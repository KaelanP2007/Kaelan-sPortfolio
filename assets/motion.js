(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let paused = reduced.matches;
  function updateMotion() {
    document.documentElement.classList.toggle('motion-paused', paused);
    document.dispatchEvent(new CustomEvent('portfolio:motionchange', { detail: { paused } }));
    for (const video of document.querySelectorAll('video')) {
      if(paused) video.pause();
    }
  }
  updateMotion();
  reduced.addEventListener('change',e=>{paused=e.matches;updateMotion();});
  if(!reduced.matches && 'IntersectionObserver' in window){
    const observer = new IntersectionObserver(entries=>{
      for(const entry of entries) if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}
    }, {threshold:0.06});
    for(const el of document.querySelectorAll('.project-tile,.experience-row,.split')){
      el.classList.add('reveal-ready');observer.observe(el);
    }
  }
  if(matchMedia('(hover: hover)').matches){
    for(const stage of document.querySelectorAll('[data-tilt]')){
      stage.addEventListener('pointermove',e=>{
        if(paused || reduced.matches) return;
        const rect=stage.getBoundingClientRect();
        stage.style.setProperty('--rx',`${((e.clientX-rect.left)/rect.width-.5)*4}deg`);
        stage.style.setProperty('--ry',`${-((e.clientY-rect.top)/rect.height-.5)*4}deg`);
      });
      stage.addEventListener('pointerleave',()=>{stage.style.setProperty('--rx','0deg');stage.style.setProperty('--ry','0deg');});
    }
  }
  for(const video of document.querySelectorAll('video[data-hero-video]')){
    const container=video.parentElement;
    const poster=container.querySelector('img');
    video.addEventListener('error',()=>{video.hidden=true;if(poster) poster.hidden=false;});
    video.addEventListener('loadeddata',()=>{video.hidden=false;if(poster) poster.hidden=true;});
    const play=document.createElement('button');play.type='button';play.className='video-control';play.textContent='Play film';
    container.append(play);
    play.addEventListener('click',async e=>{e.preventDefault();e.stopPropagation();if(video.paused){try{await video.play();play.textContent='Pause film';}catch{}}else{video.pause();play.textContent='Play film';}});
    if(!reduced.matches) video.play().catch(()=>{});
  }
})();
