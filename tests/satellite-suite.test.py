#!/usr/bin/env python3
import importlib.util,json,re,shutil,tempfile,unittest,hashlib
from pathlib import Path
from html.parser import HTMLParser
ROOT=Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location('suite',ROOT/'scripts/render-satellite-suite.py')
suite=importlib.util.module_from_spec(spec);spec.loader.exec_module(suite)

class Scan(HTMLParser):
 def __init__(self,text):
  super().__init__();self.ids=[];self.tags=[];self.feed(text)
 def handle_starttag(self,tag,attrs):
  d=dict(attrs);self.tags.append((tag,d))
  if 'id' in d:self.ids.append(d['id'])

def snapshot(root):return {str(p.relative_to(root)):hashlib.sha256(p.read_bytes()).hexdigest() for p in root.rglob('*') if p.is_file()}

class SuiteTests(unittest.TestCase):
 def setUp(self):
  self.tmp=tempfile.TemporaryDirectory();self.root=Path(self.tmp.name);self.source=self.root/'source';self.out=self.root/'out'
  self.source.mkdir();
  for slug in suite.SLUGS:
   (self.source/slug).mkdir();shutil.copy(ROOT/'public'/slug/'app.js',self.source/slug/'app.js')
  self.out.mkdir();self.copy=self.root/'copy.json';shutil.copy(ROOT/'content/satellite-suite-locales.json',self.copy)
  self.homes={}
  for loc,lang in suite.LANGS.items():
   rel='index.html' if loc=='pt' else loc+'/index.html';f=self.out/rel;f.parent.mkdir(parents=True,exist_ok=True)
   s=f'<!doctype html>\r\n<html lang="{lang}"><body><header><a href="/kept/">Keep</a></header><main id="main"><h1>Keep title</h1><form action="/do-not-change"><input name="original"></form><script>const untouched=true;</script></main><footer>Existing footer</footer></body></html>\r\n'
   f.write_bytes(s.encode());self.homes[rel]=s
 def tearDown(self):self.tmp.cleanup()
 def run_build(self):return suite.build(self.source,self.out,self.copy)
 def test_twenty_complete_locales_and_reciprocal_routes(self):
  before=snapshot(self.source);m=self.run_build();self.assertEqual(20,len(m['pages']));self.assertEqual(5,len(m['homepages']));self.assertFalse(m['liveVerified'])
  for p in m['pages']:
   rel=p['url'].lstrip('/')+('index.html' if p['url'].endswith('/') else '');s=(self.out/rel).read_text();scan=Scan(s)
   self.assertIn(('html',{'lang':p['language'],'data-zion-satellite-suite':suite.RELEASE}),scan.tags)
   self.assertEqual(len(scan.ids),len(set(scan.ids)));self.assertIn('main',scan.ids)
   canonical=[d for tag,d in scan.tags if tag=='link' and d.get('rel')=='canonical'];self.assertEqual([suite.BASE+p['url']],[d['href'] for d in canonical])
   alts=[d for tag,d in scan.tags if tag=='link' and d.get('rel')=='alternate'];self.assertEqual(6,len(alts))
   for alt in alts:
    u=alt['href'][len(suite.BASE):];q=self.out/(u.lstrip('/')+('index.html' if u.endswith('/') else ''));self.assertTrue(q.is_file())
   self.assertEqual(p['sha256'],hashlib.sha256(s.encode()).hexdigest())
  self.assertEqual(before,snapshot(self.source))
 def test_homepages_only_owned_section_changes_and_idempotence(self):
  self.run_build()
  for rel,before in self.homes.items():
   after=(self.out/rel).read_bytes().decode();rest=re.sub(r'<!--zion-satellite-home:start-->[\s\S]*?<!--zion-satellite-home:end-->','',after);self.assertEqual(before,rest)
  first=snapshot(self.out);self.run_build();self.assertEqual(first,snapshot(self.out))
 def test_missing_translation_fails_before_output(self):
  d=suite.load_copy(self.copy);del d['fr']['Home'];self.copy.write_text(json.dumps(d));before=snapshot(self.out)
  with self.assertRaises(ValueError):self.run_build()
  self.assertEqual(before,snapshot(self.out))
 def test_changed_runtime_fails_before_output(self):
  p=self.source/suite.SLUGS[2]/'app.js';p.write_text(p.read_text()+'\n// unreviewed');before=snapshot(self.out)
  with self.assertRaisesRegex(ValueError,'runtime changed'):self.run_build()
  self.assertEqual(before,snapshot(self.out))
 def test_late_home_failure_leaves_no_partial_pages(self):
  (self.out/'de/index.html').write_text('<html lang="fr"><body>wrong</body></html>');before=snapshot(self.out)
  with self.assertRaisesRegex(ValueError,'locale mismatch'):self.run_build()
  self.assertEqual(before,snapshot(self.out))
 def test_unowned_route_collision_preserved(self):
  p=self.out/'fr'/suite.SLUGS[1]/'index.html';p.parent.mkdir(parents=True);p.write_text('<html lang="fr">Someone else owns this</html>');before=snapshot(self.out)
  with self.assertRaisesRegex(ValueError,'collision'):self.run_build()
  self.assertEqual(before,snapshot(self.out))
 def test_symlinks_cannot_escape(self):
  outside=self.root/'outside';outside.mkdir();(self.out/'assets').symlink_to(outside,target_is_directory=True)
  with self.assertRaises(ValueError):self.run_build()
  self.assertEqual([],list(outside.iterdir()))
 def test_redirect_home_not_a_translation(self):
  p=self.out/'es/index.html';p.write_text('<html lang="es"><meta http-equiv="refresh" content="0;url=/"></html>')
  with self.assertRaisesRegex(ValueError,'Redirect'):self.run_build()
 def test_malformed_or_duplicate_marker_rejected(self):
  c=suite.load_copy(self.copy)['pt']
  for suffix in ['<!--zion-satellite-home:start-->','<!--zion-satellite-home:start-->x<!--zion-satellite-home:end--><!--zion-satellite-home:start-->x<!--zion-satellite-home:end-->']:
   with self.assertRaises(ValueError):suite.insert_home(self.homes['index.html']+suffix,'pt',c)
 def test_original_own_section_is_upgraded_not_duplicated(self):
  c=suite.load_copy(self.copy)['pt'];old='<section id="zion-new-satellite-labs"><p>old owned text</p></section>';before=self.homes['index.html'].replace('</main>',old+'</main>');after=suite.insert_home(before,'pt',c)
  self.assertEqual(1,after.count('id="zion-new-satellite-labs"'));self.assertNotIn('old owned text',after)
 def test_html_escaping_not_injected_script(self):
  d=suite.load_copy(self.copy);d['fr']['Free Discovery']='<img src=x onerror=alert(1)>'
  s=suite.page('fr',None,None,d['fr']);self.assertIn('&lt;img',s);self.assertNotIn('<img src=x',s)
 def test_output_must_not_overwrite_source(self):
  with self.assertRaisesRegex(ValueError,'Source'):suite.build(self.source,self.source,self.copy)
 def test_source_exact_git_hashes_are_retained(self):
  for s,h in zip(suite.SLUGS,suite.PINNED):self.assertEqual(h,suite.blob_sha((self.source/s/'app.js').read_bytes()))

if __name__=='__main__':unittest.main(verbosity=2)
