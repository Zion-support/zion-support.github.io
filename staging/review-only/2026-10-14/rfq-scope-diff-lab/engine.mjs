/** Strict, local CSV scope reconciliation and optional all-in markup guard. */
export const SAMPLE_EXPECTED='item,serial,model,qty\nA1,SYN-A101,Switch 24p,1\nA2,SYN-B202,Server rack,1\nA3,SYN-C303,SAN switch,2\nA4,SYN-D404,Storage node,1';
export const SAMPLE_QUOTE='item,serial,model,qty,unit_price_monthly\nA1,SYN-A101,Switch 24p,1,300.00\nA2,SYN-B999,Server rack,1,500.00\nA2,SYN-B999,Server rack,1,500.00\nA4,SYN-D404,Storage node,1,450.00\nA5,SYN-E505,Extra,1,100.00';
function parseCsv(data){
 if(typeof data!=='string'||!data.trim())throw Error('Provide non-empty CSV text.');
 if(new TextEncoder().encode(data).length>130000)throw Error('CSV exceeds 130 KB limit.');
 let row=[],rows=[],cell='',quoted=false;
 for(let i=0;i<data.length;i++){
  const c=data[i];
  if(quoted){if(c==='"'&&data[i+1]==='"'){cell+='"';i++;}else if(c==='"'){quoted=false;}else cell+=c;continue;}
  if(c==='"'){if(cell.trim())throw Error('Unexpected quote inside a field.');quoted=true;continue;}
  if(c===','){row.push(cell.trim());cell='';continue;}
  if(c==='\n'||c==='\r'){if(c==='\r'&&data[i+1]==='\n')i++;row.push(cell.trim());cell='';if(row.some(v=>v!==''))rows.push(row);row=[];continue;}
  cell+=c;
 }
 if(quoted)throw Error('Unclosed quoted CSV field.');row.push(cell.trim());if(row.some(x=>x!==''))rows.push(row);
 return rows;
}
export function toCents(raw,{optional=false}={}){
 const s=String(raw??'').trim();if(!s){if(optional)return null;throw Error('Money amount is required.');}
 let t=s.replace(/\s|R\$|\$/gi,'');
 if(/^\d{1,3}(\.\d{3})*,\d{1,2}$/.test(t))t=t.replace(/\./g,'').replace(',','.');
 else if(/^\d+,\d{1,2}$/.test(t))t=t.replace(',','.');
 if(!/^\d+(\.\d{1,2})?$/.test(t))throw Error('Use a non-negative amount, e.g. 1200.50 or 1.200,50.');
 let [whole,frac='']=t.split('.');let cents=Number(whole)*100+Number((frac+'00').slice(0,2));
 if(!Number.isSafeInteger(cents)||cents>1e12)throw Error('Money amount is too large.');return cents;
}
export const brl=c=>c==null?'n/a':new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(c/100);
export function readItems(text,{quote=false}={}){
 const data=parseCsv(text);if(data.length<2)throw Error('CSV must contain a header and at least one data row.');
 if(data.length>302)throw Error('A maximum of 300 equipment lines is supported.');
 const header=data[0].map(s=>s.toLowerCase().replace(/^\ufeff/,'').trim());
 const idx={};for(const key of['item','serial','model','qty']){idx[key]=header.indexOf(key);if(idx[key]===-1)throw Error(`Missing CSV column: ${key}.`);}
 idx.price=header.indexOf('unit_price_monthly');
 const rows=data.slice(1).map((cells,i)=>{
  const get=k=>String(cells[idx[k]]??'').trim();const item=get('item'),serial=get('serial'),model=get('model');
  const qtyTxt=get('qty'),qty=Number(qtyTxt);
  if(!item||!serial||!model)throw Error(`Row ${i+2}: item, serial and model cannot be blank.`);
  if(!Number.isSafeInteger(qty)||qty<1||qty>100000)throw Error(`Row ${i+2}: qty must be a positive integer.`);
  let priceCents=null;
  if(quote&&idx.price>=0)priceCents=toCents(cells[idx.price],{optional:true});
  return{item,serial,model,qty,priceCents};
 });
 return{rows,hasPriceColumn:idx.price>=0};
}
function canonical(s){return String(s).trim().toUpperCase();}
function issue(severity,code,text,item=''){return{severity,code,text,item};}
export function analyzeRfq(expectedText,quoteText,{allInAnnualCost='',confirmedAnnualSell=''}={}){
 const e=readItems(expectedText),q=readItems(quoteText,{quote:true});
 const expected=e.rows,quoted=q.rows,problems=[];
 function index(list,which){const byItem=new Map(),bySerial=new Map();for(const x of list){let a=canonical(x.item),s=canonical(x.serial);if(byItem.has(a))problems.push(issue('critical','DUPLICATE_ITEM',`${which}: item ${x.item} appears more than once.`,x.item));else byItem.set(a,x);
 if(bySerial.has(s))problems.push(issue('critical','DUPLICATE_SERIAL',`${which}: serial ${x.serial} appears more than once.`,x.item));else bySerial.set(s,x);
 }return byItem;}
 const em=index(expected,'Client scope'),qm=index(quoted,'Supplier quote');
 for(const [id,ex] of em){let qu=qm.get(id);if(!qu){problems.push(issue('critical','MISSING',`Missing client item ${ex.item} (${ex.model}) from quote.`,ex.item));continue;}
  if(canonical(ex.serial)!==canonical(qu.serial))problems.push(issue('critical','SERIAL_CHANGED',`Item ${ex.item}: serial differs between source and quote.`,ex.item));
  if(canonical(ex.model)!==canonical(qu.model))problems.push(issue('warn','MODEL_CHANGED',`Item ${ex.item}: model differs between source and quote.`,ex.item));
  if(ex.qty!==qu.qty)problems.push(issue('critical','QUANTITY_CHANGED',`Item ${ex.item}: client qty ${ex.qty}, quote qty ${qu.qty}.`,ex.item));
 }
 for(const [id,qu]of qm){if(!em.has(id))problems.push(issue('warn','UNEXPECTED',`Quote contains unexpected item ${qu.item}.`,qu.item));}
 const priced=q.hasPriceColumn&&quoted.every(x=>x.priceCents!==null);
 if(!priced)problems.push(issue('warn','PRICE_INCOMPLETE','Quote lacks unit_price_monthly for at least one equipment line.'));
 const monthlyTotal=priced?quoted.reduce((acc,x)=>acc+x.priceCents*x.qty,0):null;
 if(monthlyTotal!==null&&!Number.isSafeInteger(monthlyTotal))throw Error('Total exceeds safe arithmetic range.');
 const derivedAnnual=monthlyTotal===null?null:monthlyTotal*12;
 const costCents=toCents(allInAnnualCost,{optional:true}),sellCents=toCents(confirmedAnnualSell,{optional:true});
 const effectiveSell=sellCents??derivedAnnual;
 const floorMinSell=costCents===null?null:Math.ceil(costCents*7/5);
 const ceilMaxCost=effectiveSell===null?null:Math.floor(effectiveSell*5/7);
 const markup=costCents!==null&&costCents>0&&effectiveSell!==null?(effectiveSell-costCents)/costCents:null;
 const amountMatches=sellCents===null||derivedAnnual===null||sellCents===derivedAnnual;
 if(sellCents!==null&&derivedAnnual!==null&&!amountMatches)problems.push(issue('critical','TOTAL_MISMATCH','Approved annual sell differs from the annualized per-item quote total.'));
 if(costCents===null)problems.push(issue('warn','COST_UNVERIFIED','Verified all-in annual cost is missing; margin cannot be certified.'));
 else if(effectiveSell!==null&&floorMinSell>effectiveSell)problems.push(issue('critical','MARKUP_FAIL','Selling price is below verified all-in cost x 1.40.'));
 if(sellCents===null)problems.push(issue('warn','SELL_UNAPPROVED','No approved annual selling price entered. Calculated line totals are not approval.'));
 const blocker=problems.some(p=>p.severity==='critical');
 const readyForOwnerReview=!blocker&&priced&&costCents!==null&&sellCents!==null&&markup!==null&&markup>=.4;
 return{summary:{expectedLines:expected.length,quoteLines:quoted.length,expectedUnits:expected.reduce((a,x)=>a+x.qty,0),quoteUnits:quoted.reduce((a,x)=>a+x.qty,0),criticalIssues:problems.filter(x=>x.severity==='critical').length,warnings:problems.filter(x=>x.severity==='warn').length,readyForOwnerReview,requiresWrittenApproval:true},prices:{currency:'BRL',derivedAnnualCents:derivedAnnual,confirmedAnnualSellCents:sellCents,verifiedAllInAnnualCostCents:costCents,minimumSellCents:floorMinSell,maximumAllInCostCents:ceilMaxCost,markupRate:markup,amountMatches},issues:problems,method:'Local source-to-quote reconciliation. Human review, supplier evidence and written approval always required.'};
}
