import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { projects } from '../src/projects.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const pages = ['index.html','about.html','work.html','portfolio.html','experience.html','skills.html','contact.html', ...projects.map(p=>`work/${p.slug}.html`)];

test('every local link, fragment and asset resolves under a GitHub Pages project subpath', async () => {
  for(const file of pages){
    const html = await readFile(path.join(root,file),'utf8');
    const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
    for(const [,value] of html.matchAll(/\b(?:href|src)="([^"]+)"/g)){
      if (/^(https?:|mailto:|tel:|data:)/.test(value)) continue;
      assert.ok(!value.startsWith('/'), `${file}: root-absolute URL breaks project hosting: ${value}`);
      if(value.startsWith('#')){assert.ok(ids.has(value.slice(1)),`${file}: missing ${value}`);continue;}
      const [target, fragment] = value.split('#');
      const targetPath = path.resolve(root,path.dirname(file),decodeURIComponent(target));
      assert.ok(targetPath.startsWith(root),`${file}: URL escapes site`);
      assert.ok((await stat(targetPath)).isFile(),`${file}: missing ${target}`);
      if(fragment){
        const targetHtml=await readFile(targetPath,'utf8');
        assert.ok(targetHtml.includes(`id="${fragment}"`),`${file}: missing target fragment`);
      }
    }
  }
});

test('all pages have page-specific metadata, accessible landmarks and current positioning', async()=>{
  const titles=new Set();
  for(const file of pages){
    const html=await readFile(path.join(root,file),'utf8');
    const title=html.match(/<title>(.*?)<\/title>/)[1];
    assert.ok(!titles.has(title),`duplicate title in ${file}`);titles.add(title);
    assert.equal((html.match(/<h1[> ]/g)||[]).length,1);
    assert.match(html,/<html lang="en" data-theme="dark">/);
    assert.match(html,/<main id="main">/);
    assert.match(html,/aria-label="Main navigation"/);
    assert.match(html,/meta name="description" content="[^"]+"/);
    assert.match(html,/Summer 2027/);
    assert.doesNotMatch(html,/currently in my first year|First-Year •|2026 Engineering Internships|Resume December 2025/i);
    for(const tag of html.match(/<img\b[^>]*>/g)||[]) assert.match(tag,/alt="[^"]+"/);
  }
});

test('case study slugs are unique and next-project links form a complete loop',async()=>{
  assert.equal(new Set(projects.map(p=>p.slug)).size,projects.length);
  for(const [i,p] of projects.entries()){
    assert.match(p.slug,/^[a-z0-9-]+$/);
    const html=await readFile(path.join(root,`work/${p.slug}.html`),'utf8');
    assert.ok(html.includes(`href="./${projects[(i+1)%projects.length].slug}.html"`));
  }
});

// Preserve the original portfolio while adding newer work.
test('complete portfolio retains original background and projects alongside new projects',async()=>{
 const html=await readFile(path.join(root,'portfolio.html'),'utf8');
 for(const phrase of ['Kaelan The Grass Mower','ASHL','Streetsville','WHMIS','647-202-2637','kaelan.patterson@icloud.com','General Chemistry','Game','conflict resolution','Time management']) {
  assert.ok(html.toLowerCase().includes(phrase.toLowerCase()),`Missing original/new content: ${phrase}`);
 }
 for(const p of projects) assert.ok(html.includes(`work/${p.slug}.html`));
 assert.match(html,/Second.year/);
});
