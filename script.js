/* ======================= DATA ======================= */
const REGIONS = [
  {key:'barreirinhas', label:'Trechos a partir de Barreirinhas', icon:'pin'},
  {key:'cabure', label:'Trechos a partir de Caburé', icon:'pin'},
  {key:'parnaiba', label:'Trechos a partir de Parnaíba / Luís Correia', icon:'pin'},
  {key:'barra-grande', label:'Trechos a partir de Barra Grande', icon:'pin'},
  {key:'jericoacoara', label:'Trechos a partir de Jericoacoara', icon:'pin'},
  {key:'outras', label:'Tatus e rotas especiais', icon:'star'},
];

const ROUTES = [
  {o:'Barreirinhas', d:'Tutoia', note:'', region:'barreirinhas', cd:500, sw4:600},
  {o:'Barreirinhas', d:'Parnaíba ou Luís Correia', note:'', region:'barreirinhas', cd:900, sw4:1000},
  {o:'Barreirinhas', d:'Jericoacoara', note:'via asfalto', region:'barreirinhas', cd:1400, sw4:1600},
  {o:'Barreirinhas', d:'Jericoacoara', note:'via praia', region:'barreirinhas', cd:1500, sw4:1600},
  {o:'Barreirinhas', d:'Barra Grande', note:'', region:'barreirinhas', cd:1200, sw4:1300},

  {o:'Caburé', d:'Tutoia', note:'', region:'cabure', cd:500, sw4:600},
  {o:'Caburé', d:'Parnaíba', note:'', region:'cabure', cd:900, sw4:1000},
  {o:'Caburé', d:'Jericoacoara', note:'via praia', region:'cabure', cd:1500, sw4:1600},
  {o:'Caburé', d:'Jericoacoara', note:'via asfalto', region:'cabure', cd:1400, sw4:1600},
  {o:'Caburé', d:'Barra Grande', note:'', region:'cabure', cd:1200, sw4:1300},
  {o:'Caburé', d:'Macapá', note:'', region:'cabure', cd:1000, sw4:1200},

  {o:'Parnaíba', d:'Barra Grande', note:'', region:'parnaiba', cd:450, sw4:500},
  {o:'Parnaíba (litoral leste)', d:'Macapá', note:'', region:'parnaiba', cd:500, sw4:600},
  {o:'Parnaíba ou Luís Correia', d:'Jericoacoara', note:'via asfalto', region:'parnaiba', cd:850, sw4:1000},
  {o:'Parnaíba ou Luís Correia', d:'Jericoacoara', note:'via praia', region:'parnaiba', cd:900, sw4:1100},
  {o:'Parnaíba', d:'Fortaleza', note:'via asfalto', region:'parnaiba', cd:1500, sw4:1600},
  {o:'Parnaíba', d:'Tutoia', note:'', region:'parnaiba', cd:450, sw4:600},

  {o:'Barra Grande', d:'Camocim', note:'via praia', region:'barra-grande', cd:850, sw4:1000},
  {o:'Barra Grande', d:'Jericoacoara', note:'via asfalto', region:'barra-grande', cd:800, sw4:900},
  {o:'Barra Grande', d:'Jericoacoara', note:'via praia', region:'barra-grande', cd:900, sw4:1000},

  {o:'Jericoacoara', d:'Camocim', note:'', region:'jericoacoara', cd:800, sw4:900},
  {o:'Jericoacoara', d:'Fortaleza', note:'via asfalto', region:'jericoacoara', cd:900, sw4:1000},
  {o:'Jericoacoara', d:'Fortaleza', note:'via praia', region:'jericoacoara', cd:1400, sw4:1500},
  {o:'Jericoacoara', d:'Tutoia', note:'via praia', region:'jericoacoara', cd:1200, sw4:1300},
  {o:'Jericoacoara', d:'Tutoia', note:'via asfalto', region:'jericoacoara', cd:1100, sw4:1200},

  {o:'Tatus', d:'Pousada em Parnaíba', note:'', region:'outras', cd:100, sw4:150},
  {o:'Tatus', d:'Barra Grande', note:'', region:'outras', cd:500, sw4:600},
  {o:'Santo Amaro', d:'Jericoacoara', note:'via asfalto', region:'outras', cd:1800, sw4:2000},
];

const DESTINOS = [
  {n:'Barreirinhas', t:'Portão de entrada dos Lençóis Maranhenses, às margens do Rio Preguiças. Base para passeios às dunas e lagoas.', img:'images/barreirinhas.jpg'},
  {n:'Caburé', t:'Vila de pescadores entre o rio e o mar, acesso só de barco ou 4x4. Praias desertas e clima tranquilo.', img:'images/cabure.jpg'},
  {n:'Parnaíba', t:'Porta de entrada do Delta do Parnaíba, com passeios de barco entre ilhas, mangues e coqueirais.', img:'images/parnaiba.jpg'},
  {n:'Barra Grande', t:'Vila de pescadores no litoral piauiense, famosa pelo kitesurf e pelas dunas intocadas.', img:'images/barra-grande.jpg'},
  {n:'Jericoacoara', t:'Vila charmosa no Ceará, conhecida pela Duna do Pôr do Sol, Lagoa Azul e Pedra Furada.', img:'images/jericoacoara.jpg'},
  {n:'Tutoia', t:'Cidade histórica no extremo leste do Maranhão, ponto de conexão entre os Lençóis e o litoral piauiense.', img:'images/tutoia.jpg'},
  {n:'Camocim', t:'Cidade litorânea cearense entre Jericoacoara e o Piauí, conhecida por suas praias tranquilas.', img:'images/camocim.jpg'},
  {n:'Fortaleza', t:'Capital cearense, ponto final ou inicial de muitos roteiros pela Rota das Emoções.', img:'images/fortaleza.jpg'},
];

/* ======================= RENDER ROUTES ======================= */
const iconPin = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-6.4-7-11a7 7 0 0 1 14 0c0 4.6-7 11-7 11z"/><circle cx="12" cy="10" r="2.4"/></svg>';
const iconStar = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9L5.7 21l1.7-7L2 9.2l7.1-.6z"/></svg>';
const iconArrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const iconCar = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13l2-6a2 2 0 0 1 2-1h10a2 2 0 0 1 2 1l2 6"/><rect x="3" y="13" width="18" height="6" rx="1.5"/><circle cx="7.5" cy="19" r="1.6"/><circle cx="16.5" cy="19" r="1.6"/></svg>';
const iconSuv = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12l1.5-5A2 2 0 0 1 7.4 5.5h9.2a2 2 0 0 1 1.9 1.5L20 12"/><rect x="3" y="12" width="18" height="7" rx="2"/><circle cx="7.5" cy="19.5" r="1.6"/><circle cx="16.5" cy="19.5" r="1.6"/></svg>';

function money(v){ return v.toLocaleString('pt-BR',{minimumFractionDigits:2, maximumFractionDigits:2}); }

const container = document.getElementById('regionsContainer');
REGIONS.forEach(reg=>{
  const items = ROUTES.filter(r=>r.region===reg.key);
  const block = document.createElement('div');
  block.className = 'region-block reveal';
  block.id = 'regiao-'+reg.key;
  block.dataset.region = reg.key;
  block.innerHTML = `
    <div class="region-head">
      <div class="region-icon">${reg.icon==='star'?iconStar:iconPin}</div>
      <h3>${reg.label}</h3>
      <span class="count">${items.length} trecho${items.length>1?'s':''}</span>
    </div>
    <div class="cards-grid">
      ${items.map(r=>`
        <div class="route-card" data-search="${(r.o+' '+r.d+' '+r.note).toLowerCase()}" data-origem="${r.o}" data-destino="${r.d}" data-nota="${r.note}">
          <div class="route-path">${r.o} ${iconArrow} ${r.d}</div>
          ${r.note?`<span class="route-note">${r.note}</span>`:''}
          <div class="price-row">
            <div class="price-tile" data-veiculo="Cabine Dupla"><div class="veh">${iconCar} Cabine Dupla</div><div class="val">R$ ${money(r.cd)}</div></div>
            <div class="price-tile sw4" data-veiculo="SW4"><div class="veh">${iconSuv} SW4</div><div class="val">R$ ${money(r.sw4)}</div></div>
          </div>
          <div class="card-cta">Toque para reservar ${iconArrow}</div>
        </div>
      `).join('')}
    </div>
  `;
  container.appendChild(block);
});

/* ======================= RENDER DESTINOS ======================= */
const destScroll = document.getElementById('destScroll');
const dunehue = ['#5da141','#3f6b34','#d9a35c','#6b4226'];
DESTINOS.forEach((d,i)=>{
  const c = document.createElement('div');
  c.className = 'dest-card reveal';
  c.innerHTML = `
    <div class="dest-art" style="background:linear-gradient(135deg, ${dunehue[i%4]}, #3f1b17);">
      <img src="${d.img}" alt="Foto de ${d.n}" loading="lazy"
           style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;"
           onerror="this.style.display='none';this.parentElement.querySelector('.dest-fallback').style.display='block';">
      <svg class="dest-fallback" viewBox="0 0 260 140" width="100%" height="100%" preserveAspectRatio="none" style="display:none;position:relative;">
        <path d="M0,100 C60,60 120,120 180,80 C220,55 240,90 260,75 L260,140 L0,140 Z" fill="rgba(255,255,255,.18)"/>
        <path d="M0,120 C70,90 150,135 260,100 L260,140 L0,140 Z" fill="rgba(255,255,255,.28)"/>
        <circle cx="215" cy="30" r="16" fill="rgba(255,255,255,.5)"/>
      </svg>
    </div>
    <div class="dest-body"><h4>${d.n}</h4><p>${d.t}</p></div>
  `;
  destScroll.appendChild(c);
});

/* ======================= FILTER + SEARCH ======================= */
const chips = document.querySelectorAll('.chip');
const regionBlocks = document.querySelectorAll('.region-block');
const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('noResults');

function applyFilter(){
  const activeChip = document.querySelector('.chip.active').dataset.region;
  const q = searchInput.value.trim().toLowerCase();
  let anyVisible = false;

  regionBlocks.forEach(block=>{
    const regionMatch = activeChip==='all' || block.dataset.region===activeChip;
    let blockHasVisible = false;
    block.querySelectorAll('.route-card').forEach(card=>{
      const textMatch = !q || card.dataset.search.includes(q);
      const show = regionMatch && textMatch;
      card.style.display = show ? '' : 'none';
      if(show) blockHasVisible = true;
    });
    block.style.display = blockHasVisible ? '' : 'none';
    if(blockHasVisible) anyVisible = true;
  });
  noResults.classList.toggle('show', !anyVisible);
}

chips.forEach(chip=>{
  chip.addEventListener('click', ()=>{
    chips.forEach(c=>c.classList.remove('active'));
    chip.classList.add('active');
    applyFilter();
    if(chip.dataset.region!=='all'){
      document.getElementById('regiao-'+chip.dataset.region)?.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});
searchInput.addEventListener('input', applyFilter);

/* ======================= SCROLL REVEAL ======================= */
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
  });
},{threshold:.12});
revealEls.forEach(el=>io.observe(el));
// observe dynamically created cards too
document.querySelectorAll('.region-block, .dest-card').forEach(el=>{
  el.classList.add('reveal'); io.observe(el);
});

/* ======================= TOPBAR SHADOW ======================= */
const topbar = document.getElementById('topbar');
window.addEventListener('scroll', ()=>{
  topbar.classList.toggle('scrolled', window.scrollY>10);
},{passive:true});

/* ======================= COUNT UP STATS ======================= */
const statEls = document.querySelectorAll('.stat .num');
const statIO = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(!e.isIntersecting) return;
    statIO.unobserve(e.target);
    const target = parseInt(e.target.dataset.count,10);
    const dur = 1200;
    const start = performance.now();
    function tick(now){
      const p = Math.min(1,(now-start)/dur);
      const eased = 1-Math.pow(1-p,3);
      e.target.textContent = Math.round(eased*target);
      if(p<1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
},{threshold:.4});
statEls.forEach(el=>statIO.observe(el));

/* ======================= 3D CARD TILT ======================= */
document.addEventListener('mousemove', (e)=>{
  const card = e.target.closest('.route-card');
  if(!card) return;
  const r = card.getBoundingClientRect();
  const px = (e.clientX - r.left)/r.width - .5;
  const py = (e.clientY - r.top)/r.height - .5;
  card.style.setProperty('--ry', (px*8)+'deg');
  card.style.setProperty('--rx', (py*-8)+'deg');
}, {passive:true});
document.addEventListener('mouseout', (e)=>{
  const card = e.target.closest('.route-card');
  if(card){ card.style.setProperty('--rx','0deg'); card.style.setProperty('--ry','0deg'); }
});

/* ======================= BOOKING MODAL ======================= */
const WHATSAPP_NUMBER = '5598989086313';
const modalOverlay = document.getElementById('modalOverlay');
const bookingForm = document.getElementById('bookingForm');
const fTrecho = document.getElementById('fTrecho');
const fVeiculo = document.getElementById('fVeiculo');
const fPessoas = document.getElementById('fPessoas');
const fData = document.getElementById('fData');
const fHorario = document.getElementById('fHorario');
const fCrianca = document.getElementById('fCrianca');
const fCriancaQtdWrap = document.getElementById('fCriancaQtdWrap');
const fCriancaQtd = document.getElementById('fCriancaQtd');
const fNome = document.getElementById('fNome');

function formatTrecho(r){
  return r.o + ' → ' + r.d + (r.note ? ' (' + r.note + ')' : '');
}

// build the trecho dropdown: one optgroup per region, then a fallback option
REGIONS.forEach(reg=>{
  const items = ROUTES.filter(r=>r.region===reg.key);
  if(!items.length) return;
  const group = document.createElement('optgroup');
  group.label = reg.label.replace('Trechos a partir de ', '');
  items.forEach(r=>{
    const opt = document.createElement('option');
    opt.value = formatTrecho(r);
    opt.textContent = formatTrecho(r);
    group.appendChild(opt);
  });
  fTrecho.appendChild(group);
});
const optOutro = document.createElement('option');
optOutro.value = 'outro';
optOutro.textContent = 'Não encontrei o transfer que eu preciso 🙋';
fTrecho.appendChild(optOutro);

// prevent picking a date in the past
const todayISO = new Date().toISOString().split('T')[0];
fData.setAttribute('min', todayISO);

function openModal(){
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e)=>{ if(e.target===modalOverlay) closeModal(); });
document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeModal(); });

fCrianca.addEventListener('change', ()=>{
  fCriancaQtdWrap.style.display = fCrianca.checked ? 'block' : 'none';
});

// open from a route card
document.addEventListener('click', (e)=>{
  const card = e.target.closest('.route-card');
  if(!card) return;
  const origem = card.dataset.origem;
  const destino = card.dataset.destino;
  const nota = card.dataset.nota;
  const tile = e.target.closest('.price-tile');
  const veiculo = tile ? tile.dataset.veiculo : 'Cabine Dupla';
  bookingForm.reset();
  fCriancaQtdWrap.style.display = 'none';
  fTrecho.value = formatTrecho({o:origem, d:destino, note:nota});
  fVeiculo.value = veiculo;
  fPessoas.value = 2;
  openModal();
});

// open generic (no route pre-filled) from CTA band
document.getElementById('openGenericModal').addEventListener('click', ()=>{
  bookingForm.reset();
  fCriancaQtdWrap.style.display = 'none';
  fTrecho.selectedIndex = 0;
  fPessoas.value = 2;
  openModal();
});

bookingForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  const trechoRaw = fTrecho.value;
  const trecho = trechoRaw === 'outro'
    ? 'Não encontrei o transfer que preciso na lista — quero ajuda para montar meu roteiro 🙋'
    : trechoRaw;
  const veiculo = fVeiculo.value;
  const pessoas = fPessoas.value;
  const data = fData.value;
  const horario = fHorario.value;
  const nome = fNome.value.trim();
  const temCrianca = fCrianca.checked;
  const qtdCrianca = fCriancaQtd.value;

  let dataFormatada = data;
  if(data){
    const [ano,mes,dia] = data.split('-');
    dataFormatada = `${dia}/${mes}/${ano}`;
  }

  const linhas = [
    'Olá! Gostaria de solicitar uma reserva pela FC Ecoturismo. 🚙',
    '',
    `*Trecho:* ${trecho}`,
    `*Veículo:* ${veiculo}`,
    `*Data:* ${dataFormatada}`,
    `*Horário:* ${horario}`,
    `*Nome:* ${nome}`,
    `*Quantidade de pessoas:* ${pessoas}`,
    `*Crianças no grupo:* ${temCrianca ? qtdCrianca+' criança(s)' : 'Não'}`,
  ];
  const texto = encodeURIComponent(linhas.join('\n'));
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, '_blank');
  closeModal();
});

/* init */
applyFilter();
