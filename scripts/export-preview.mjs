import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
const pageNames=['index.html','work.html','experience.html','about.html','skills.html','contact.html','portfolio.html',...fs.readdirSync(path.join(root,'work')).filter(f=>f.endsWith('.html')).map(f=>'work/'+f)];
const pages=Object.fromEntries(pageNames.map(f=>[f,fs.readFileSync(path.join(root,f),'utf8')]));
const assets={};
const mime={'.css':'text/css','.js':'text/javascript','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml','.pdf':'application/pdf'};
for(const [file,html] of Object.entries(pages)){
 for(const [,url] of html.matchAll(/(?:src|href)="([^"]+)"/g)){
  if(/^(https?:|mailto:|tel:|#|data:)/.test(url))continue;
  const key=path.posix.normalize(path.posix.join(path.posix.dirname(file),url));
  if(pages[key]||assets[key])continue;
  const ext=path.extname(key);const bytes=fs.readFileSync(path.join(root,key));
  assets[key]={type:mime[ext]||'application/octet-stream',data:bytes.toString('base64'),text:['.css','.js'].includes(ext)?bytes.toString('utf8'):null};
 }
}
const safeJSON=x=>JSON.stringify(x).replace(/</g,'\\u003c');
const runtime=`
const pages=${safeJSON(pages)};
const assets=${safeJSON(assets)};
const frame=document.querySelector('iframe');
function resolve(file,url){const parts=(file.split('/').slice(0,-1).join('/')+'/'+url).split('/');const out=[];for(const p of parts){if(!p||p==='.')continue;if(p==='..')out.pop();else out.push(p);}return out.join('/');}
function data(key){const a=assets[key];return a?'data:'+a.type+';base64,'+a.data:null;}
function render(name){
 if(!pages[name])name='index.html';
 let html=pages[name];
 html=html.replace(/<link rel="stylesheet" href="([^"]+)"[^>]*>/g,(_,url)=>'<style>'+assets[resolve(name,url)].text+'</style>');
 html=html.replace(/<script src="([^"]+)"([^>]*)><\\/script>/g,(_,url,attrs)=>'<script>'+(attrs.includes('defer')?'document.addEventListener("DOMContentLoaded",function(){'+assets[resolve(name,url)].text+'});':assets[resolve(name,url)].text)+'<\\/script>');
 html=html.replace(/(src|href)="([^"]+)"/g,(all,attr,url)=>{
  if(/^(https?:|mailto:|tel:|#|data:)/.test(url))return all;
  const key=resolve(name,url);
  if(pages[key])return 'href="#" data-route="'+key+'"';
  const uri=data(key);if(!uri)return all;
  return attr+'="'+uri+'"'+(key.endsWith('.pdf')?' download="Kaelan_Patterson_Resume.pdf"':'');
 });
 html=html.replace(/<a ([^>]*href="https?:[^>]+)>/g,'<a $1 target="_blank" rel="noopener noreferrer">');
 html=html.replace('</body>','<script>document.addEventListener("click",function(e){const a=e.target.closest("a[data-route]");if(a){e.preventDefault();parent.postMessage({kind:"portfolio-route",route:a.dataset.route},"*");}});<\\/script></body>');
 frame.srcdoc=html;document.title=(name==='index.html'?'Kaelan Patterson':name.replace('.html',''))+' — Portfolio preview';
}
window.addEventListener('message',e=>{if(e.source===frame.contentWindow&&e.data?.kind==='portfolio-route'&&pages[e.data.route])location.hash=e.data.route;});
window.addEventListener('hashchange',()=>render(location.hash.slice(1)));
render(location.hash.slice(1)||'index.html');
`;
const output=path.join(root,'../downloads/Kaelan_Portfolio_Preview.html');fs.mkdirSync(path.dirname(output),{recursive:true});
fs.writeFileSync(output,`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Kaelan Patterson — Portfolio preview</title><style>html,body{margin:0;height:100%;background:#121416}iframe{border:0;width:100%;height:100%;display:block}</style></head><body><iframe title="Kaelan Patterson interactive portfolio"></iframe><script>${runtime}</script></body></html>`);
console.log('Exported standalone offline preview: '+output);
