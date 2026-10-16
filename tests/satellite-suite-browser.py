import json,asyncio,re,os,shutil
from pathlib import Path
from playwright.async_api import async_playwright
ROOT=Path(__file__).resolve().parents[1];OUT=Path(os.environ.get('SATELLITE_PREVIEW',str(ROOT/'preview')))
slugs=['mcp-trust-boundary-studio','agent-canary-release-lab','field-spares-custody-kit']
langs=['en','pt','es','fr','de'];results=[];errors=[];blocked=[]
def local_html(rel):
 s=(OUT/rel).read_text()
 s=re.sub(r'<link rel="stylesheet" href="([^"]+)">',lambda m:'<style>'+(OUT/m[1].lstrip('/')).read_text()+'</style>',s)
 s=re.sub(r'<script defer src="([^"]+)"></script>','',s)
 return s

async def main():
 async with async_playwright() as p:
  browser=await p.chromium.launch(executable_path=os.environ.get('BROWSER_EXECUTABLE') or shutil.which('chromium'),headless=True,args=['--no-sandbox'])
  context=await browser.new_context(viewport={'width':1280,'height':900},accept_downloads=True)
  async def serve(route):
   url=route.request.url
   if not url.startswith('https://zion-preview.test/'):
    blocked.append(url);await route.abort();return
   from urllib.parse import urlsplit
   rel=urlsplit(url).path.lstrip('/');rel+= 'index.html' if rel.endswith('/') else ''
   f=OUT/rel
   if f.is_file():
    mime='text/html' if f.suffix=='.html' else 'text/javascript' if f.suffix=='.js' else 'text/css' if f.suffix=='.css' else 'application/json'
    await route.fulfill(status=200,content_type=mime,body=f.read_bytes())
   else:await route.fulfill(status=404,body='Not part of isolated preview')
  await context.route('**/*',serve)
  page=await context.new_page();page.on('pageerror',lambda e:errors.append(str(e)))
  for lang in langs:
   for slug in slugs:
    prefix='' if lang=='en' else '/'+lang
    url='https://zion-preview.test'+prefix+'/'+slug+'/'
    await page.close();page=await context.new_page();page.on('pageerror',lambda e:errors.append(str(e)));await page.set_content(local_html((prefix+'/'+slug+'/index.html').lstrip('/')));await page.add_script_tag(content=(OUT/'assets/satellite-suite'/lang/(slug+'.js')).read_text());await page.wait_for_selector('#findings li',timeout=3000)
    assert await page.locator('html').get_attribute('lang')==('pt-BR' if lang=='pt' else lang)
    assert await page.locator('.languages a').count()==5
    assert await page.locator('.languages a[aria-current="page"]').count()==1
    text=await page.locator('body').inner_text()
    if lang!='en':
     for forbidden in ['Evidence required: ','Copy summary','Download JSON','Inputs stay in this browser']:
      assert forbidden not in text,(lang,slug,forbidden)
    await page.keyboard.press('Tab');assert await page.locator(':focus').get_attribute('href')=='#main'
    await page.keyboard.press('Enter');assert await page.locator(':focus').get_attribute('id')=='main'
    for width in [390,1280]:
     await page.set_viewport_size({'width':width,'height':900});assert await page.evaluate('document.documentElement.scrollWidth <= innerWidth'),(lang,slug,width)
    if slug=='field-spares-custody-kit':
     for field,value in {'ticket':'TEST-ONLY','asset':'OLD-TEST','part':'NEW-TEST','base':'620','travel':'0','freight':'0','tax':'0'}.items():await page.locator('#'+field).fill(value)
     for field in ['scope','engineer','serial','custody','terms','client','po','zion']:await page.locator('#'+field).check()
     assert '100 / 100' in await page.locator('#score').inner_text()
     async with page.expect_download() as dl:await page.locator('#export').click()
     file=await (await dl.value).path();d=json.loads(Path(file).read_text());assert d['authorized'] is False and d['financial']['minimumSellCents']==86800
     await page.locator('#po').uncheck();assert await page.locator('#status').get_attribute('class')=='hold'
     await page.locator('button[type=reset]').click();await page.wait_for_timeout(20);assert await page.locator('#base').input_value()==''
     if lang=='pt':
      await page.set_viewport_size({'width':1280,'height':900});await page.screenshot(path=str(ROOT/'custody-pt-desktop.png'),full_page=True)
      await page.set_viewport_size({'width':390,'height':844});await page.screenshot(path=str(ROOT/'custody-pt-mobile.png'),full_page=True)
    results.append({'locale':lang,'app':slug,'loaded':True,'languageLinks':5,'keyboard':True,'mobileOverflow':False,'externalRequests':0})
  # Comparison pages are translated and include reciprocal links to all siblings.
  for lang in langs:
   prefix='' if lang=='en' else '/'+lang
   await page.set_content(local_html((prefix+'/apps/satellite-labs.html').lstrip('/')))
   assert await page.locator('.cards .card').count()==3
   for slug in slugs:assert await page.locator('a[href="'+prefix+'/'+slug+'/"]').count()>0
  assert not errors,errors
  assert not blocked,blocked
  await browser.close()
 ROOT.joinpath('browser-results.json').write_text(json.dumps({'cases':results,'comparisonPages':5,'jsErrors':errors,'unexpectedNetwork':blocked,'hostedVerification':False,'method':'local HTML/CSS/JS injected into Chromium; hosted navigation is blocked by environment'},indent=2))
 print('PASS: 15 app pages, 5 comparison pages; 30 viewport checks; 15 keyboard flows; 5 custody export/PO/reset flows; no JS errors or external requests. Local document injection; not HTTP, hosted or TLS verification.')
asyncio.run(main())
