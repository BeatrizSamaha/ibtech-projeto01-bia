var obs=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('visible');obs.unobserve(x.target);}});},{threshold:.08});
  document.querySelectorAll('.fade-in').forEach(function(el){obs.observe(el);});
  var btn=document.getElementById('emailBtn'),E='biagarcia2806@gmail.com';
  btn.addEventListener('click',function(){
    var orig=btn.innerHTML;
    if(navigator.clipboard)navigator.clipboard.writeText(E).catch(function(){});
    btn.innerHTML='<span class="clink-lbl">copiado</span> ✓';
    setTimeout(function(){btn.innerHTML=orig;},2000);
  });



    // Blob cursor com delay
  var blob = document.createElement('div');
  blob.className = 'blob-cursor';
  document.body.appendChild(blob);
  var bx = window.innerWidth/2, by = window.innerHeight/2;
  var tx = bx, ty = by;
  document.addEventListener('mousemove', function(e){ tx = e.clientX; ty = e.clientY; });
  (function animBlob(){
    bx += (tx - bx) * 0.07;
    by += (ty - by) * 0.07;
    blob.style.left = bx + 'px';
    blob.style.top  = by + 'px';
    requestAnimationFrame(animBlob);
  })();

  // Efeito magnético nos links do nav
  document.querySelectorAll('.nlinks a, .clink').forEach(function(el){
    el.addEventListener('mousemove', function(e){
      var r = el.getBoundingClientRect();
      var x = (e.clientX - r.left - r.width/2) * 0.25;
      var y = (e.clientY - r.top  - r.height/2) * 0.25;
      el.style.transform = 'translate(' + x + 'px,' + y + 'px)';
    });
    el.addEventListener('mouseleave', function(){
      el.style.transform = '';
      el.style.transition = 'transform .4s cubic-bezier(.22,1,.36,1)';
      setTimeout(function(){ el.style.transition = ''; }, 400);
    });
  });

  // Text scramble no hover da pill do hero
  var pill = document.querySelector('.hero-subtitle');
  if(pill){
    var orig = pill.textContent;
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ&';
    pill.addEventListener('mouseenter', function(){
      var iter = 0;
      var interval = setInterval(function(){
        pill.textContent = orig.split('').map(function(c,i){
          if(i < iter) return orig[i];
          if(c === ' ') return ' ';
          return chars[Math.floor(Math.random()*chars.length)];
        }).join('');
        if(iter >= orig.length) clearInterval(interval);
        iter += 2;
      }, 40);
    });
  }

  // Marcar seção ativa no nav
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nlinks a');
  window.addEventListener('scroll', function(){
    var cur = '';
    sections.forEach(function(s){
      if(window.scrollY >= s.offsetTop - 120) cur = s.id;
    });
    navLinks.forEach(function(a){
      a.style.color = a.getAttribute('href') === '#'+cur ? 'var(--pk)' : '';
    });
  });

  // Cursor customizado
  var cur = document.createElement('div'); cur.className = 'cursor'; document.body.appendChild(cur);
  var ring = document.createElement('div'); ring.className = 'cursor-ring'; document.body.appendChild(ring);
  document.addEventListener('mousemove', function(e) {
    cur.style.left = e.clientX + 'px'; cur.style.top = e.clientY + 'px';
    setTimeout(function(){ ring.style.left = e.clientX + 'px'; ring.style.top = e.clientY + 'px'; }, 60);
  });
  document.querySelectorAll('a,button,.tl-card,.cell').forEach(function(el){
    el.addEventListener('mouseenter', function(){ cur.style.width='20px'; cur.style.height='20px'; ring.style.width='50px'; ring.style.height='50px'; });
    el.addEventListener('mouseleave', function(){ cur.style.width='12px'; cur.style.height='12px'; ring.style.width='36px'; ring.style.height='36px'; });
  });