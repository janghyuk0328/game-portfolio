(()=>{
'use strict';
const data=window.PORTFOLIO_CONTENT||{};
const $=(sel,root=document)=>root.querySelector(sel);
const $$=(sel,root=document)=>Array.from(root.querySelectorAll(sel));
const escapeHtml=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const modal=$('#media-modal');
const modalTitle=$('#modal-title');
const modalBrow=$('#modal-eyebrow');
const modalBody=$('#modal-body');
const modalExternal=$('#modal-external');
let previousFocus=null;
function youtubeId(url){
  try{const u=new URL(url);if(u.hostname==='youtu.be'||u.hostname==='www.youtu.be')return u.pathname.split('/')[1];if(['www.youtube.com','youtube.com','m.youtube.com','www.youtube-nocookie.com'].includes(u.hostname))return u.searchParams.get('v')||(u.pathname.startsWith('/embed/')?u.pathname.split('/')[2]:null);}catch(e){}return null;
}
function safeExternal(url){try{const u=new URL(url);return u.protocol==='https:'||u.protocol==='http:'?u.href:null;}catch(e){return null;}}
// Supports local MP4 files placed inside assets/videos/ as well as remote HTTPS video links.
function safeMedia(url){if(typeof url!=='string')return null;const ext=safeExternal(url);if(ext)return ext;if(/^assets\/videos\/[\w./-]+\.mp4(?:[?#].*)?$/i.test(url)&&!url.includes('..'))return new URL(url,document.baseURI).href;return null;}
function showModal(title,eyebrow){modal.classList.remove('portrait-video');previousFocus=document.activeElement;modalTitle.textContent=title;modalBrow.textContent=eyebrow||'PORTFOLIO MEDIA';modalBody.replaceChildren();modalExternal.hidden=true;modalExternal.textContent='새 탭에서 열기 ↗';modal.removeAttribute('hidden');document.body.classList.add('modal-open');$('#modal-close').focus();}
function closeModal(){if(modal.hidden)return;modal.classList.remove('portrait-video');modal.setAttribute('hidden','');modalBody.replaceChildren();document.body.classList.remove('modal-open');if(previousFocus&&typeof previousFocus.focus==='function')previousFocus.focus();}
function showVideo(key){
 if(key!=='trello-demo'){openFloatingVideo(key);return;}
 const v=data.videos?.[key];if(!v||!v.url)return;
 const link=safeMedia(v.url);if(!link)return;
 showModal(v.title,v.label);
 modal.classList.toggle('portrait-video',key.startsWith('split-'));
 const id=youtubeId(link);
 if(id){
   // Official YouTube "Share > Embed" iframe structure, generated automatically from the video URL.
   // A valid HTTP Referer is required by YouTube; file:// previews may show error 153.
   const iframe=document.createElement('iframe');
   const base='https://www.youtube.com/embed/'+encodeURIComponent(id);
   const params=new URLSearchParams({autoplay:'1',rel:'0',playsinline:'1'});
   iframe.src=base+'?'+params.toString();
   iframe.title=v.title;
   iframe.loading='eager';
   iframe.referrerPolicy='strict-origin-when-cross-origin';
   iframe.setAttribute('allow','accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
   iframe.setAttribute('allowfullscreen','');
   modalBody.append(iframe);
   const note=document.createElement('div');note.className='modal-note';
   note.textContent=location.protocol==='file:'
     ? '현재는 로컬 파일(file://)로 열었습니다. YouTube 오류 153이 발생하면 GitHub Pages 또는 localhost 웹서버에서 확인하세요. '
     : '브라우저 정책이나 동영상 업로더의 퍼가기 제한으로 재생이 막히면 오른쪽 상단의 YouTube 링크로 확인할 수 있습니다. ';
   const a=document.createElement('a');a.href=link;a.target='_blank';a.rel='noopener noreferrer';a.textContent='YouTube에서 직접 보기 ↗';note.append(a);modalBody.append(note);
 }else if(new URL(link).pathname.toLowerCase().endsWith('.mp4')){
   const video=document.createElement('video');video.src=link;video.controls=true;video.autoplay=true;video.playsInline=true;video.style.width='100%';modalBody.append(video);
 }else{
   const p=document.createElement('p');p.className='modal-fallback';p.textContent='외부 영상으로 등록되어 있습니다. 새 탭에서 확인해 주세요.';modalBody.append(p);
 }
 modalExternal.href=link;
 modalExternal.textContent=id?'YouTube에서 직접 보기 ↗':'원본 영상 새 탭에서 열기 ↗';
 modalExternal.hidden=false;
}
function showPdf(key){const d=data.documents?.[key];if(!d||!d.path)return;showModal(d.title,d.kind==='excerpt'?'DESIGN DOCUMENT / OVERVIEW EXCERPT':'PORTFOLIO PDF');const frame=document.createElement('iframe');frame.className='pdf-frame';frame.src=d.path+'#toolbar=1&navpanes=0&view=FitH';frame.title=d.title+' PDF 미리보기';modalBody.append(frame);const note=document.createElement('div');note.className='modal-note';note.textContent=d.note||'';const a=document.createElement('a');a.href=d.path;a.target='_blank';a.rel='noopener noreferrer';a.textContent=' PDF가 표시되지 않으면 새 탭에서 열기 ↗';note.append(a);modalBody.append(note);modalExternal.href=d.path;modalExternal.textContent='PDF 새 탭에서 열기 ↗';modalExternal.hidden=false;}
function showImage(source,caption){if(!source)return;showModal(caption||'이미지 확대','PROJECT / WORK CAPTURE');const img=document.createElement('img');img.src=source;img.alt=caption||'확대된 작업 이미지';img.className='modal-image';modalBody.append(img);modalExternal.href=source;modalExternal.textContent='원본 이미지 열기 ↗';modalExternal.hidden=false;}
// Video preview cards: local screenshot posters, actual YouTube player loads only after click.
$$('[data-video-card]').forEach(el=>{const v=data.videos?.[el.dataset.videoCard];if(!v||!v.url)return;const btn=document.createElement('button');btn.type='button';btn.className='video-card';btn.dataset.video=el.dataset.videoCard;btn.setAttribute('aria-label',v.title+' 재생');btn.innerHTML=`<img loading="lazy" src="${escapeHtml(v.poster||'')}" alt="${escapeHtml(v.title)} 영상 썸네일"><span class="video-top-tag">${escapeHtml(v.label||'GAME PLAY')}</span><span class="video-play" aria-hidden="true">▶</span><span class="video-bottom-title">${escapeHtml(v.actionLabel||v.title)}<small>PLAY VIDEO ↗</small></span>`;el.append(btn);});
// Placeholder becomes a working button automatically once the video URL is supplied in content.js.
$$('[data-optional-video]').forEach(el=>{
 const key=el.dataset.optionalVideo;const v=data.videos?.[key];
 const button=document.createElement('button');button.type='button';button.className='pill-link';
 if(v?.url){button.dataset.video=key;button.textContent=v.actionLabel+' ↗';}
 else {button.disabled=true;button.textContent='2인 플레이 영상 준비 중';}
 el.replaceWith(button);
});
$$('[data-pdf-download]').forEach(el=>{const d=data.documents?.[el.dataset.pdfDownload];if(d?.path)el.setAttribute('href',d.path);else el.hidden=true;});
$$('[data-doc-status]').forEach(el=>{const d=data.documents?.[el.dataset.docStatus];if(!d)return;if(d.kind==='full')el.textContent='원본 기획서 전체 PDF입니다. 브라우저에서 열람하거나 다운로드할 수 있습니다.';else el.textContent='※ 개요 PDF에서 발췌한 소개 1페이지입니다. 원본 기획서 전체 파일은 아직 업로드되지 않았습니다.';});


// Nonblocking player: stays on screen while the visitor scrolls project explanations.
const dock=$('#video-dock'), dockBody=$('#dock-body'), dockTitle=$('#dock-title'), dockYoutube=$('#dock-youtube');
const dockMin=$('#dock-minimize'),dockBig=$('#dock-expand'),dockClose=$('#dock-close');
function openFloatingVideo(key){
  const v=data.videos?.[key]; if(!v?.url)return;
  const link=safeMedia(v.url); if(!link)return;
  dockTitle.textContent=v.title; dockYoutube.href=link;
  const id=youtubeId(link);dockBody.replaceChildren();
  if(id){
    const frame=document.createElement('iframe');
    frame.src='https://www.youtube.com/embed/'+encodeURIComponent(id)+'?autoplay=1&rel=0&playsinline=1';
    frame.title=v.title;frame.loading='eager';frame.referrerPolicy='strict-origin-when-cross-origin';
    frame.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    frame.allowFullscreen=true;dockBody.append(frame);
  }else if(link.toLowerCase().split(/[?#]/)[0].endsWith('.mp4')){
    const vid=document.createElement('video');vid.src=link;vid.controls=true;vid.autoplay=true;vid.playsInline=true;dockBody.append(vid);
  }
  // Keep the floating video player at 16:9 for every game, including SPLIT.
  // The SPLIT project preview itself stays portrait and is not modified.
  dock.classList.remove('is-portrait');
  dock.hidden=false;dock.classList.remove('is-minimized');
  dockMin.setAttribute('aria-label','영상 최소화');dockMin.textContent='−';
}
dockMin?.addEventListener('click',()=>{
  const min=dock.classList.toggle('is-minimized');
  dockMin.setAttribute('aria-label',min?'영상 다시 펼치기':'영상 최소화');
  dockMin.textContent=min?'▢':'−';
});
dockBig?.addEventListener('click',()=>dock.classList.toggle('is-expanded'));
dockClose?.addEventListener('click',()=>{dock.hidden=true;dock.classList.remove('is-minimized','is-expanded','is-portrait');dockBody.replaceChildren();});

// Independently controlled photo carousels for SPLIT / GGC and Rolling LEO / G-STAR.
$$('[data-photo-carousel]').forEach(carousel=>{
 const photos=data.photos?.[carousel.dataset.photoCarousel]||[];
 if(!photos.length)return;
 let idx=0;
 const photo=$('[data-photo-image]',carousel),counter=$('[data-photo-counter]',carousel),caption=$('[data-photo-caption]',carousel);
 function show(n){
  idx=(n+photos.length)%photos.length;
  const item=photos[idx];photo.src=item.src;photo.alt=item.caption;
  counter.textContent=String(idx+1).padStart(2,'0')+' / '+String(photos.length).padStart(2,'0');
  caption.textContent=item.caption;
 }
 $('[data-photo-prev]',carousel).addEventListener('click',()=>show(idx-1));
 $('[data-photo-next]',carousel).addEventListener('click',()=>show(idx+1));
 $('[data-carousel-zoom]',carousel).addEventListener('click',()=>showImage(photos[idx].src,photos[idx].caption));
 show(0);
});

// Interactive gallery: two actual level-review screenshots. Photo click enlarges it; video is a separate button.
$$('[data-level-slider]').forEach(slider=>{
  const slides=$$('.level-slide-image',slider);
  const label=$('[data-slider-label]',slider.closest('.gallery-level-review'));
  let active=0;
  function showAt(next){
    active=(next+slides.length)%slides.length;
    slides.forEach((slide,i)=>{slide.hidden=i!==active;});
    if(label)label.textContent=active===0?'01 / 02 · BEFORE / 초기 더미 레벨':'02 / 02 · AFTER / 피드백 반영 레벨';
  }
  $('[data-slider-prev]',slider)?.addEventListener('click',()=>showAt(active-1));
  $('[data-slider-next]',slider)?.addEventListener('click',()=>showAt(active+1));
  showAt(0);
});
// Remote YouTube thumbnail: fall back to a supplied game screenshot on a blocked connection.
$$('img[data-local-fallback]').forEach(img=>{img.addEventListener('error',()=>{if(!img.dataset.fallbackUsed){img.dataset.fallbackUsed='1';img.src=img.dataset.localFallback;}});});

// Global click handlers
addEventListener('click',e=>{
 const vid=e.target.closest('[data-video]');if(vid){e.preventDefault();showVideo(vid.dataset.video);return;}
 const pdf=e.target.closest('[data-pdf-view]');if(pdf){e.preventDefault();showPdf(pdf.dataset.pdfView);return;}
 const zoom=e.target.closest('[data-zoom]');if(zoom){e.preventDefault();showImage(zoom.dataset.zoom,zoom.dataset.zoomCaption);return;}
 const ext=e.target.closest('[data-external-open]');if(ext){e.preventDefault();const url=safeExternal(data.external?.[ext.dataset.externalOpen]);if(url)window.open(url,'_blank','noopener,noreferrer');return;}
 if(e.target.closest('[data-close-modal]'))closeModal();
});
$('#modal-close').addEventListener('click',closeModal);
addEventListener('keydown',e=>{if(e.key==='Escape'&&!modal.hidden)closeModal();if(e.key==='Tab'&&!modal.hidden){const items=$$('a[href],button:not([disabled]),iframe,[tabindex]:not([tabindex="-1"])',modal).filter(x=>x.offsetParent!==null);if(!items.length)return;const first=items[0],last=items[items.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}});
const menu=$('#menu-toggle'),nav=$('#site-nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기');});$$('a',nav).forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','메뉴 열기');}));
// Scroll progress, nav active state.
const progress=$('#scroll-progress');let ticking=false;const onScroll=()=>{if(ticking)return;ticking=true;requestAnimationFrame(()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?(scrollY/max*100):0)+'%';ticking=false;});};addEventListener('scroll',onScroll,{passive:true});onScroll();
const navLinks=$$('#site-nav a');const sections=navLinks.map(a=>$(a.getAttribute('href'))).filter(Boolean);if('IntersectionObserver'in window){const io=new IntersectionObserver(entries=>{const shown=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio);if(shown[0])navLinks.forEach(a=>a.classList.toggle('active',a.hash==='#'+shown[0].target.id));},{rootMargin:'-28% 0px -52% 0px',threshold:0});sections.forEach(s=>io.observe(s));}
$('#current-year').textContent=String(new Date().getFullYear());const warn=$('#local-preview-alert');if(warn&&location.protocol==='file:')warn.hidden=false;
})();
