const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const path=require('node:path');const test=require('node:test');
const root=path.resolve(__dirname, '../..');
const maxQueryLength=200;
function execute(search,throwHistory=false){
 const listeners={}; const input={value:'',addEventListener:(e,f)=>listeners.input=f,focus(){}};
 const clear={addEventListener:(e,f)=>listeners.clear=f};const count={dataset:{pattern:'{count}/{total}'}};const empty={};
 const buttons=['all','cost','service'].map(filter=>({dataset:{filter},setAttribute(k,v){this[k]=v;},addEventListener(e,f){listeners[filter]=f;}}));
 const controls={hidden:true,querySelectorAll:()=>buttons};const cards=[{textContent:'Café Cloud',dataset:{category:'cost'}},{textContent:'Service',dataset:{category:'service'}}];
 const anchor={href:'/pt/apps/',getAttribute(){return this.href;},setAttribute(k,v){this[k]=v;}};let history=[];
 const nodes=new Map([['catalog-controls',controls],['catalog-search',input],['catalog-clear',clear],['resource-count',count],['catalog-empty',empty]]);
 const document={getElementById:id=>nodes.get(id),querySelectorAll:s=>s==='[data-resource]'?cards:[anchor]};
 const window={location:{search,href:'https://example.test/apps/'+search},history:{replaceState(...args){if(throwHistory){throw Error('Denied');}history.push(String(args[2]));}}};
 vm.runInNewContext(fs.readFileSync(path.join(root,'public/assets/js/apps-directory.js'),'utf8'),Object.assign({document,window},Object.fromEntries(['URL','URLSearchParams'].map(name=>[name,globalThis[name]]))));
 const snapshot=()=>JSON.stringify({value:input.value,count:count.textContent,empty:empty.hidden,cards:cards.map(c=>c.hidden),buttons:buttons.map(b=>b['aria-pressed']),anchor:anchor.href,controls:controls.hidden,history});
 const results=[snapshot()];input.value='service';listeners.input();results.push(snapshot());listeners.cost();results.push(snapshot());listeners.clear();results.push(snapshot());return results.map(value=>JSON.parse(value));
}
for(const query of ['', '?q=cafe','?category=cost','?category=invalid','?q='+ 'x'.repeat(maxQueryLength+1)]){
 for(const deny of [false,true]){
  test(`catalog filtering and reset: ${query.slice(0,10)}, history denied ${deny}`,()=>{
   const [initial,search,category,reset]=execute(query,deny);
   assert.equal(initial.controls,false);
   assert(initial.value.length<=maxQueryLength);
   assert.equal(search.count,query==='?category=cost'?'0/2':'1/2');
   assert.deepEqual(search.cards,[true,query==='?category=cost']);
   assert.equal(category.count,'0/2');
   assert.equal(category.empty,false);
   assert.equal(reset.count,'2/2');
   assert.deepEqual(reset.cards,[false,false]);
   assert.equal(reset.value,'');
   assert.equal(reset.anchor,'/pt/apps/');
   assert.deepEqual(reset.buttons,['true','false','false']);
   assert.equal(reset.history.length,deny?0:3);
   if(query==='?q=cafe'||query==='?category=cost'){
    assert.equal(initial.count,'1/2');
    assert.deepEqual(initial.cards,[false,true]);
   }
  });
 }
}
test('missing document and controls are safe',()=>{
 const source=fs.readFileSync(path.join(root,'public/assets/js/apps-directory.js'),'utf8');
 vm.runInNewContext(source,{document:{getElementById:()=>null}});
 vm.runInNewContext(source,{});
});
