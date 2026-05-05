(() => {
  // Header scroll-state — switches between full-width and floating-pill
  const header = document.getElementById('siteHeader');
  const banner = document.getElementById('banner');
  const onScroll = () => {
    const threshold = banner ? banner.offsetHeight : 0;
    header.classList.toggle('is-floating', window.scrollY > threshold);
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile drawer (hamburger) ---------- */
  const menuBtn = document.getElementById('menuBtn');
  if (menuBtn) {
    // Detect current page for active marker
    const path = location.pathname.split('/').pop() || 'index.html';
    const navLinks = [
      { href: 'index.html', label: 'Início' },
      { href: 'sobre.html', label: 'Sobre' },
      { href: 'espacos-e-planos.html', label: 'Espaços & Planos' },
      { href: 'contato.html', label: 'Contato' }
    ];
    const navHTML = navLinks.map(l => {
      const active = l.href === path ? ' aria-current="page"' : '';
      return `<a href="${l.href}"${active}>${l.label}<i class="ph ph-arrow-right" aria-hidden="true"></i></a>`;
    }).join('');

    const drawer = document.createElement('div');
    drawer.className = 'mobile-drawer';
    drawer.setAttribute('role', 'dialog');
    drawer.setAttribute('aria-label', 'Menu de navegação');
    drawer.setAttribute('aria-hidden', 'true');
    drawer.innerHTML = `
      <div class="mobile-drawer__backdrop" data-close></div>
      <div class="mobile-drawer__panel">
        <div class="mobile-drawer__head">
          <a href="index.html" aria-label="Momment Coworking — página inicial">
            <img class="mobile-drawer__logo" src="assets/logo-momment.svg" alt="Momment Coworking">
          </a>
          <button class="mobile-drawer__close" type="button" aria-label="Fechar menu" data-close>
            <i class="ph ph-x" aria-hidden="true"></i>
          </button>
        </div>
        <nav class="mobile-drawer__nav" aria-label="Navegação principal">
          ${navHTML}
        </nav>
        <a href="login.html" class="mobile-drawer__login"${path === 'login.html' ? ' aria-current="page"' : ''}>
          <span>Entrar</span> <i class="ph ph-sign-in" aria-hidden="true"></i>
        </a>
        <a href="https://wa.me/5543000000000" target="_blank" rel="noopener noreferrer" class="mobile-drawer__cta">
          <i class="ph-fill ph-whatsapp-logo" aria-hidden="true"></i>
          Falar no WhatsApp
        </a>
        <div class="mobile-drawer__contact">
          <span>(43) 0000-0000 · <a href="mailto:ola@momment.com.br">ola@momment.com.br</a></span>
        </div>
      </div>
    `;
    document.body.appendChild(drawer);

    const open = () => {
      drawer.classList.add('is-open');
      document.body.classList.add('is-drawer-open');
      menuBtn.classList.add('is-active');
      menuBtn.setAttribute('aria-expanded', 'true');
      drawer.setAttribute('aria-hidden', 'false');
    };
    const close = () => {
      drawer.classList.remove('is-open');
      document.body.classList.remove('is-drawer-open');
      menuBtn.classList.remove('is-active');
      menuBtn.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
    };

    menuBtn.addEventListener('click', () => {
      drawer.classList.contains('is-open') ? close() : open();
    });
    drawer.addEventListener('click', (e) => {
      if (e.target.closest('[data-close]')) close();
    });
    drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) close();
    });
  }

  // Spaces — interactive tabs
  const SPACES = {
    estacao: {
      name: "Estação Compartilhada",
      meters: "1,5m²",
      desc: "Mesa em open space, cadeira ergonômica, gaveta com chave.<br>Pra quem vem todo dia e prefere o ritmo do salão.",
      image: "assets/img (4).png",
      amenities: [
        ["users-three", "até 16 estações"],
        ["wifi-high", "Wi-Fi dedicado"],
        ["coffee", "café incluso"]
      ]
    },
    privativa: {
      name: "Sala Privativa",
      meters: "12m²",
      desc: "Sala fechada pra equipe pequena. Mesa de 4, lousa de vidro, ar-condicionado, porta de verdade que fecha.",
      image: "assets/img (2).png",
      amenities: [
        ["door", "porta privativa"],
        ["wind", "ar-condicionado"],
        ["lock-key", "guarda-volumes"]
      ]
    },
    reuniao: {
      name: "Sala de Reunião",
      meters: "16m²",
      desc: "Pra apresentar pro cliente sem disputar atenção com cafeteria. TV 55″, câmera para call, mesa pra 8.",
      image: "assets/img (3).png",
      amenities: [
        ["video-camera", "câmera + TV 55″"],
        ["users-three", "8 pessoas"],
        ["calendar-blank", "reserva online"]
      ]
    },
    treinamento: {
      name: "Sala de Treinamento",
      meters: "32m²",
      desc: "Layout flexível pra workshop, treinamento ou evento interno. Cadeiras empilháveis, projetor, água e café por contar.",
      image: "assets/img (6).png",
      amenities: [
        ["chalkboard-teacher", "até 24 pessoas"],
        ["projector-screen", "projetor full HD"],
        ["coffee", "coffee break"]
      ]
    },
    cafe: {
      name: "Café & Copa",
      meters: "28m²",
      desc: "Onde o time se cruza, o café surge e a próxima ideia aparece. Geladeira, micro-ondas, máquina espresso, mesa comum.",
      image: "assets/img (1).png",
      amenities: [
        ["coffee", "espresso ilimitado"],
        ["fork-knife", "geladeira + micro"],
        ["users-three", "área comum"]
      ]
    }
  };

  const tabs = document.querySelectorAll('.space-tab');
  const elImg     = document.getElementById('spacePreviewImg');
  const elMeters  = document.getElementById('spacePreviewMeters');
  const elName    = document.getElementById('spacePreviewName');
  const elDesc    = document.getElementById('spacePreviewDesc');
  const elAmen    = document.getElementById('spacePreviewAmenities');

  const previewEl = document.getElementById('spacePreview');

  function selectSpace(key) {
    const s = SPACES[key];
    if (!s) return;
    tabs.forEach(t => {
      const active = t.dataset.space === key;
      t.classList.toggle('is-active', active);
      t.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    const apply = () => {
      elImg.src = s.image;
      elImg.alt = s.name;
      elMeters.textContent = s.meters;
      elName.textContent = s.name;
      elDesc.innerHTML = s.desc;
      elAmen.innerHTML = s.amenities.map(([icon, label]) =>
        `<span class="space-preview__amenity"><i class="ph ph-${icon}"></i> ${label}</span>`
      ).join('');
    };
    if (!previewEl || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      apply();
      return;
    }
    previewEl.classList.add('is-fading');
    setTimeout(() => {
      apply();
      requestAnimationFrame(() => previewEl.classList.remove('is-fading'));
    }, 200);
  }

  tabs.forEach(t => t.addEventListener('click', () => selectSpace(t.dataset.space)));
})();

/* ============================================================
   MOTION — reveals, hero word-split, count-up
   ============================================================ */
(() => {
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Apply .reveal classes via config ---------- */
  const REVEAL_HEADERS = [
    '.problem__head', '.solution__head', '.spaces__head', '.differentials__head',
    '.steps__head', '.plans__head', '.audience__head', '.community__head',
    '.bastidores__head', '.faq__head'
  ];
  const REVEAL_GROUPS = [
    ['.problem__grid', '.problem-card'],
    ['.spaces__layout', '.space-tab, .space-preview'],
    ['.differentials__grid', '.differential-pillar, .pillar'],
    ['.steps__grid', '.step-card'],
    ['.plans__row', '.plan-card'],
    ['.plans__grid > .inaug', '.inaug'],
    ['.audience__grid', '.audience-card'],
    ['.community__row', '.comm-photo, .comm-card'],
    ['.bastidores__grid', '.video-card'],
    ['.faq__list', '.faq__item'],
    ['.site-footer__cols', '.site-footer__col']
  ];

  REVEAL_HEADERS.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => el.classList.add('reveal'));
  });
  REVEAL_GROUPS.forEach(([groupSel, childSel]) => {
    document.querySelectorAll(groupSel).forEach(group => {
      const kids = group.querySelectorAll(childSel);
      kids.forEach((el, i) => {
        el.classList.add('reveal');
        el.style.setProperty('--reveal-delay', `${i * 90}ms`);
      });
    });
  });

  /* Final CTA — stagger top to bottom */
  document.querySelectorAll('.final-cta > *').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.setProperty('--reveal-delay', `${i * 80}ms`);
  });

  /* Community quote banner — solo */
  document.querySelectorAll('.community__quote').forEach(el => el.classList.add('reveal'));

  /* Brands marquee container — solo reveal */
  document.querySelectorAll('.brands').forEach(el => el.classList.add('reveal'));

  /* Impact stats — they reveal as a group too */
  document.querySelectorAll('.impact__stat').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.setProperty('--reveal-delay', `${i * 120}ms`);
  });

  /* ---------- IntersectionObserver ----------
     We delay observation by 2 frames so the browser commits the .reveal
     hidden state before the IO callback can flip on .is-visible. Without
     this, Chromium can stall the transition at currentTime 0. */
  if (reduceMotion) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    requestAnimationFrame(() => requestAnimationFrame(() => {
      document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    }));
  }

  /* ---------- Hero word-by-word ---------- */
  const heroTitle = document.querySelector('.hero__title');
  if (heroTitle && !reduceMotion) {
    const splitNode = (node, words) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const parts = node.textContent.split(/(\s+)/);
        const frag = document.createDocumentFragment();
        parts.forEach(p => {
          if (!p) return;
          if (/^\s+$/.test(p)) {
            frag.appendChild(document.createTextNode(p));
          } else {
            const span = document.createElement('span');
            span.className = 'word';
            span.textContent = p;
            span.style.setProperty('--word-index', words.length);
            words.push(span);
            frag.appendChild(span);
          }
        });
        node.replaceWith(frag);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        Array.from(node.childNodes).forEach(c => splitNode(c, words));
      }
    };
    const words = [];
    Array.from(heroTitle.childNodes).forEach(c => splitNode(c, words));
  }

  /* ---------- Count-up ---------- */
  const easeOut = t => 1 - Math.pow(1 - t, 3);
  const animateCount = (el) => {
    const target = parseInt(el.dataset.target, 10);
    if (!target || isNaN(target)) return;
    if (reduceMotion) { el.textContent = target.toLocaleString('pt-BR'); return; }
    const dur = 1400;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start) / dur);
      const v = Math.round(target * easeOut(t));
      el.textContent = v.toLocaleString('pt-BR');
      if (t < 1) requestAnimationFrame(step);
    };
    el.textContent = '0';
    requestAnimationFrame(step);
  };
  const impactSection = document.querySelector('.impact');
  if (impactSection) {
    const counts = impactSection.querySelectorAll('.count-up');
    if (counts.length) {
      const cio = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            counts.forEach(animateCount);
            cio.unobserve(impactSection);
          }
        });
      }, { threshold: 0.4 });
      cio.observe(impactSection);
    }
  }
})();
