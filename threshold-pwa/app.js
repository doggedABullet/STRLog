/* ---------- Icons ---------- */
const ICONS = {
  dashboard:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  activity:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',
  properties:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/></svg>',
  team:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  clock:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  calendar:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  trend:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
  plus:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  edit:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>',
  trash:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  mail:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M22 6 12 13 2 6"/><path d="M2 6h20v12H2z"/></svg>',
  user:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.5-6 8-6s8 2 8 6"/></svg>',
  camera:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2Z"/><circle cx="12" cy="13" r="4"/></svg>',
  inbox:'<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke-width="1.5"><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11Z"/></svg>',
  settings:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/></svg>',
  download:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  file:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><polyline points="14 2 14 8 20 8"/></svg>',
};

let state = { view:'dashboard', people:[], properties:[], entries:[], categories:[], loaded:false };
function uid(){ return Date.now().toString(36) + Math.random().toString(36).slice(2,8); }

const DEFAULT_CATEGORIES = ['Property Acquisition','Property Design','Legal','Property Development','Property Maintenance','STR License'];

/* Raw rows pulled from the exported activities.csv, used as the starting
   dataset the first time the app runs. [hours, minutes] are kept separate
   (matching how they were originally logged) and combined into a decimal
   total at seed time. */
const SEED_ROWS = [
  ['2026-06-20',2,0,'Explored loan options online, spoke to 4 lenders, got quotes.','Chandrashekara Hassan Raju','Alpine View','Property Acquisition'],
  ['2026-06-22',3,0,'Connected with more lenders to get updated quotes, talked to them about options.','Chandrashekara Hassan Raju','Alpine View','Property Acquisition'],
  ['2026-06-23',0,45,'Messages exchanged with the realtor to setup house inspection, design teams etc','Chandrashekara Hassan Raju','Alpine View','Property Acquisition'],
  ['2026-06-24',1,0,'Filled out in-take form with chroma home. Looked for ideas and inspiration for home improvement.','Pallavi R Mangalvedkar','Alpine View','Property Design'],
  ['2026-06-24',0,30,'Spoke to CPA','Chandrashekara Hassan Raju','Alpine View','Legal'],
  ['2026-06-24',1,0,'Reviewed the insurance quotes provided by the companies. Spoke to 1 from gooseinsurance to review the coverage and went back to couple others for changes','Chandrashekara Hassan Raju','Alpine View','Property Acquisition'],
  ['2026-06-24',0,30,'Discussed the policy details and made changes. Discuss the policy changes To get a better quote.','Chandrashekara Hassan Raju','Alpine View','Property Acquisition'],
  ['2026-06-25',1,0,'An hour long conversation with the design company to understand what they offer, diff options,','Chandrashekara Hassan Raju','Alpine View','Property Design'],
  ['2026-07-09',0,30,'Met with Chantal to review the next steps for design','Pallavi R Mangalvedkar','Alpine View','Property Design'],
  ['2026-07-09',0,30,'Jumped on a call with the design company to work on next steps','Chandrashekara Hassan Raju','Alpine View','Property Design'],
  ['2026-07-15',1,0,'Discuss design and construction with Eve and Victoria','Chandrashekara Hassan Raju','Alpine View','Property Design'],
  ['2026-07-15',1,0,'STR Design and construction meeting','Pallavi R Mangalvedkar','Alpine View','Property Design'],
  ['2026-07-15',1,0,'Discuss the priority for the projects while keeping competition in mind','Chandrashekara Hassan Raju','Alpine View','Property Design'],
  ['2026-07-15',1,0,'Discuss the priority for the projects while keeping competition in mind','Pallavi R Mangalvedkar','Alpine View','Property Design'],
  ['2026-07-22',2,0,'Meet with Chantal and Eve','Chandrashekara Hassan Raju','Alpine View','Property Design'],
  ['2026-07-22',2,0,'Meet with Chantal and Eve','Pallavi R Mangalvedkar','Alpine View','Property Design'],
  ['2026-07-24',1,30,'Discuss landscaping and outdoor amenities construction','Pallavi R Mangalvedkar','Alpine View','Property Design'],
  ['2026-07-24',1,30,'Discuss landscaping and outdoor amenities construction','Chandrashekara Hassan Raju','Alpine View','Property Design'],
  ['2026-08-03',1,0,'Construction cost and design discussion','Pallavi R Mangalvedkar','Alpine View','Property Design'],
  ['2026-08-03',1,0,'Construction cost and design discussion','Chandrashekara Hassan Raju','Alpine View','Property Design'],
  ['2026-08-07',1,30,'Final design review with Eve and Victoria','Chandrashekara Hassan Raju','Alpine View','Property Design'],
  ['2026-08-07',1,30,'Final design review with Eve and Victoria','Pallavi R Mangalvedkar','Alpine View','Property Design'],
  ['2026-08-08',0,45,'Research for hot tub. Tons of reviews, AI consultation, calling stores in Denver including messaging','Chandrashekara Hassan Raju','Alpine View','Property Design'],
  ['2026-08-09',0,45,'Continued research for hot tub. Tons of reviews, AI consultation, calling stores in Denver including messaging','Chandrashekara Hassan Raju','Alpine View','Property Design'],
  ['2026-08-10',0,30,'Meet with Eli for photo shoot ideas and schedule','Chandrashekara Hassan Raju','Alpine View','Property Design'],
  ['2026-08-10',0,30,'Meet with Eli for photo shoot ideas and schedule','Pallavi R Mangalvedkar','Alpine View','Property Design'],
  ['2026-08-10',1,0,'Call different stores in Denver area looking for a Wellis hot tub.','Chandrashekara Hassan Raju','Alpine View','Property Design'],
  ['2026-08-11',2,30,'Sauna research and talking with couple of stores. Emailing back and forth with Eve and Victoria','Chandrashekara Hassan Raju','Alpine View','Property Design'],
  ['2026-08-12',2,0,'Exchanged messages with SaunaKits, Eve, spoke with water filtration team. Researched grills for the house. Cube vs Barrel Saunas','Chandrashekara Hassan Raju','Alpine View','Property Design'],
  ['2026-08-13',1,0,'Researching tv, grill, communicating back and forth with Eve.','Pallavi R Mangalvedkar','Alpine View','Property Design'],
  ['2026-08-13',1,0,'Researching tv, grill, communicating back and forth with Eve.','Chandrashekara Hassan Raju','Alpine View','Property Design'],
  ['2026-08-14',0,56,'Spoke with Victoria over the construction work, pergola, sauna, appliances, etc','Chandrashekara Hassan Raju','Alpine View','Property Development'],
  ['2026-08-16',0,45,'Looking for sauna builds in the Denver area. Exchanged text messages with sauna friend and another 2 companies who build saunas in Denver area','Chandrashekara Hassan Raju','Alpine View','Property Development'],
  ['2026-08-17',0,45,'Back and forth with Eve on some of the furnitures, money, and Sauna','Chandrashekara Hassan Raju','Alpine View','Property Development'],
  ['2026-08-18',0,30,'Call with David from saunafriend. Messages exchanged with Eve.','Chandrashekara Hassan Raju','Alpine View','Property Development'],
  ['2026-08-21',0,44,'Spoke with Kia from Mountain Magic cleaning company to discuss the job.','Chandrashekara Hassan Raju','Alpine View','Property Maintenance'],
  ['2026-08-21',0,44,'Spoke with Kia from Mountain Magic cleaning company to discuss the job.','Pallavi R Mangalvedkar','Alpine View','Property Maintenance'],
  ['2026-08-27',0,25,'Spoke with 365 property solution','Chandrashekara Hassan Raju','Alpine View','Property Maintenance'],
  ['2026-08-30',1,10,'Reviewed locks and cameras on Amazon, chatGPT','Chandrashekara Hassan Raju','Alpine View','Property Development'],
  ['2026-09-02',1,15,'Research and spent time on applying for Colorado state tax license','Pallavi R Mangalvedkar','Alpine View','STR License'],
  ['2026-09-02',1,15,'Research and spent time on applying for Colorado state tax license','Chandrashekara Hassan Raju','Alpine View','STR License'],
  ['2026-09-03',0,38,'STR license research. Speaking to the lady at the front desk','Chandrashekara Hassan Raju','Alpine View','STR License'],
  ['2026-09-04',1,0,'Fill up paper work, prints and drive to get the documents notarized','Chandrashekara Hassan Raju','Alpine View','STR License'],
];

async function seedIfEmpty(){
  const count = await dbCount('entries');
  const peopleCount = await dbCount('people');
  const catCount = await dbCount('categories');

  if(catCount === 0){
    for(const name of DEFAULT_CATEGORIES) await dbPut('categories', {id:uid(), name});
  }

  if(count > 0 || peopleCount > 0) return;

  const p1 = uid(), p2 = uid(), prop1 = uid();
  const peopleByName = {'Chandrashekara Hassan Raju':p1, 'Pallavi R Mangalvedkar':p2};
  const people = [
    {id:p1, name:'Chandrashekara Hassan Raju', role:'Primary account holder', email:'chandp24@gmail.com', joinDate:'2026-06-20'},
    {id:p2, name:'Pallavi R Mangalvedkar', role:'Spouse of primary', email:'pmangalvedkar@gmail.com', joinDate:'2026-06-23'}
  ];
  const properties = [{id:prop1, name:'Alpine View'}];
  const entries = SEED_ROWS.map(([date, hrs, mins, description, personName, propertyName, category]) => ({
    id: uid(),
    date,
    category,
    personId: peopleByName[personName],
    description,
    propertyId: prop1,
    hours: hrs,
    minutes: mins,
    photo: null,
  }));

  for(const p of people) await dbPut('people', p);
  for(const p of properties) await dbPut('properties', p);
  for(const e of entries) await dbPut('entries', e);
}

async function loadAll(){
  await seedIfEmpty();
  state.people = await dbGetAll('people');
  state.properties = await dbGetAll('properties');
  state.entries = await dbGetAll('entries');
  state.categories = (await dbGetAll('categories')).sort((a,b)=>a.name.localeCompare(b.name));
  state.loaded = true;
  render();
}

function entryHours(e){
  const h = parseFloat(e.hours)||0;
  const m = parseFloat(e.minutes)||0;
  return h + m/60;
}
function formatHM(e){
  const h = parseFloat(e.hours)||0;
  const m = Math.round(parseFloat(e.minutes)||0);
  if(m>0) return `${h}h ${m}m`;
  return `${h}h`;
}

function personName(id){ const p = state.people.find(x=>x.id===id); return p ? p.name : 'Unknown'; }
function propertyName(id){ const p = state.properties.find(x=>x.id===id); return p ? p.name : 'Unknown'; }
function round1(n){ return Math.round(n*10)/10; }
function startOfWeek(d){ const dt=new Date(d); dt.setDate(dt.getDate()-dt.getDay()); dt.setHours(0,0,0,0); return dt; }
function escapeHtml(s){ const d=document.createElement('div'); d.innerText=s||''; return d.innerHTML; }

/* ---------- Attachments ---------- */
const ATTACH_MAX_COUNT = 5;
const ATTACH_MAX_IMAGE_BYTES = 10 * 1024 * 1024;
const ATTACH_MAX_PDF_BYTES = 4 * 1024 * 1024;

function isPdf(type){ return type === 'application/pdf'; }
function isImage(type){ return type && type.startsWith('image/'); }
function formatBytes(n){
  if(n < 1024) return n + ' B';
  if(n < 1024*1024) return Math.round(n/1024) + ' KB';
  return (n/(1024*1024)).toFixed(1) + ' MB';
}
/* Normalizes an entry's attachments for display/export. Newer entries have
   an `attachments` array of {id,name,type,size,blob}. Older entries had a
   single base64 `photo` field — surfaced here as one image attachment so
   old and new entries render and export the same way. */
function attachmentsOf(e){
  if(Array.isArray(e.attachments) && e.attachments.length) return e.attachments;
  if(e.photo) return [{id:'legacy', name:'photo.jpg', type:'image/jpeg', size:0, dataUrl:e.photo}];
  return [];
}

function computeMetrics(){
  const now=new Date(), wkStart=startOfWeek(now);
  const monthStart=new Date(now.getFullYear(), now.getMonth(), 1);
  const yearStart=new Date(now.getFullYear(), 0, 1);
  let week=0, month=0, ytd=0;
  state.entries.forEach(e=>{
    const d=new Date(e.date+'T00:00:00'); const h=entryHours(e);
    if(d>=yearStart) ytd+=h;
    if(d>=monthStart) month+=h;
    if(d>=wkStart) week+=h;
  });
  return {week:round1(week), month:round1(month), ytd:round1(ytd), properties:state.properties.length};
}

function setView(v){ state.view=v; render(); window.scrollTo(0,0); }

function renderTabbar(){
  const items=[
    {key:'dashboard', label:'Dashboard', icon:ICONS.dashboard},
    {key:'activity', label:'Log', icon:ICONS.activity},
    {key:'properties', label:'Properties', icon:ICONS.properties},
    {key:'team', label:'Team', icon:ICONS.team},
    {key:'settings', label:'Settings', icon:ICONS.settings},
  ];
  document.getElementById('tabbar').innerHTML = items.map(i=>
    `<button class="tab ${state.view===i.key?'active':''}" onclick="setView('${i.key}')">${i.icon}<span>${i.label}</span></button>`
  ).join('');
}

function render(){
  renderTabbar();
  const main=document.getElementById('main');
  const offlinePill = document.getElementById('offline-pill');
  offlinePill.classList.toggle('show', !navigator.onLine);
  if(!state.loaded){ main.innerHTML='<div class="empty">Loading…</div>'; return; }
  if(state.view==='dashboard') main.innerHTML=renderDashboard();
  else if(state.view==='activity') main.innerHTML=renderActivity();
  else if(state.view==='team') main.innerHTML=renderTeam();
  else if(state.view==='properties') main.innerHTML=renderProperties();
  else if(state.view==='settings') main.innerHTML=renderSettings();
  document.getElementById('fab').onclick = () => openEntryModal();
}

function renderDashboard(){
  const m=computeMetrics();
  const recent=[...state.entries].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,5);
  const ytd = m.ytd;
  const pct = Math.max(0, Math.min(1, ytd/500));
  const circumference = 2*Math.PI*76;
  const dashoffset = circumference * (1-pct);
  const met100 = ytd >= 100;

  const perPerson = {};
  state.entries.forEach(e=>{ perPerson[e.personId]=(perPerson[e.personId]||0)+entryHours(e); });
  const peopleStats = state.people.map(p=>`
    <div class="ring-stat">
      <div class="ring-stat-label">${escapeHtml(p.name.split(' ')[0])}</div>
      <div class="ring-stat-value">${round1(perPerson[p.id]||0)} hrs</div>
    </div>`).join('');

  return `
    <h1 class="page-title">Dashboard</h1>
    <div class="ring-card">
      <svg width="180" height="180" viewBox="0 0 180 180">
        <circle cx="90" cy="90" r="76" fill="none" stroke="var(--card-alt)" stroke-width="14"/>
        <circle cx="90" cy="90" r="76" fill="none" stroke="var(--accent)" stroke-width="14" stroke-linecap="round"
          stroke-dasharray="${circumference}" stroke-dashoffset="${dashoffset}" transform="rotate(-90 90 90)"/>
        <text x="90" y="82" text-anchor="middle" font-size="34" font-weight="700" fill="var(--text)" font-family="Georgia, serif">${ytd}</text>
        <text x="90" y="106" text-anchor="middle" font-size="13" fill="var(--text-muted)">of 500 hours</text>
      </svg>
      <div class="ring-status ${met100?'':'pending'}">${met100 ? '100-hour threshold reached' : (100-ytd).toFixed(1)+' hours to the 100-hour threshold'}</div>
      <div class="ring-substats">
        ${peopleStats || '<div class="ring-stat"><div class="ring-stat-label">No team members yet</div></div>'}
      </div>
    </div>
    <button class="btn" onclick="openEntryModal()">${ICONS.plus.replace('#fff','currentColor')} Log time</button>
    <h2 class="section-title">Recent <em>activity</em></h2>
    ${recent.length ? recent.map(entryCard).join('') : emptyState('No entries logged yet.')}
  `;
}

function emptyState(msg){
  return `<div class="empty"><div class="empty-icon">${ICONS.inbox}</div>${msg}</div>`;
}

function entryCard(e){
  const atts = attachmentsOf(e);
  const attHtml = atts.length ? `<div class="thumb-row">${atts.map(a=>{
    const src = a.blob ? URL.createObjectURL(a.blob) : a.dataUrl;
    if(isImage(a.type)) return `<a href="${src}" target="_blank" rel="noopener"><img class="thumb" src="${src}"></a>`;
    return `<a href="${src}" target="_blank" rel="noopener" class="file-chip">${ICONS.file}<span>${escapeHtml(a.name)}</span></a>`;
  }).join('')}</div>` : '';
  return `
    <div class="card">
      <div class="activity-date">${e.date}</div>
      <div class="tag">${e.category}</div>
      <div class="activity-person">${personName(e.personId)}</div>
      <div class="activity-desc">${escapeHtml(e.description)}</div>
      <div class="activity-property">${propertyName(e.propertyId)}</div>
      ${attHtml}
      <div class="activity-bottom">
        <div class="activity-hours">${formatHM(e)}</div>
        <div class="row-actions">
          <button class="icon-btn" onclick="openEntryModal('${e.id}')">${ICONS.edit}</button>
          <button class="icon-btn danger" onclick="deleteEntry('${e.id}')">${ICONS.trash}</button>
        </div>
      </div>
    </div>`;
}

function renderActivity(){
  const all=[...state.entries].sort((a,b)=>b.date.localeCompare(a.date));
  return `
    <h1 class="page-title">Activity log</h1>
    ${all.length ? all.map(entryCard).join('') : emptyState('No entries yet. Tap + to add your first one.')}
  `;
}

function renderTeam(){
  const totals={};
  state.entries.forEach(e=>{ totals[e.personId]=(totals[e.personId]||0)+entryHours(e); });
  return `
    <h1 class="page-title">Team</h1>
    <button class="btn btn-secondary" onclick="openPersonModal()" style="margin-bottom:16px;">${ICONS.plus.replace('#fff','currentColor')} Add team member</button>
    ${state.people.map(p=>`
      <div class="card">
        <div class="team-top">
          <div class="team-identity">
            <div class="avatar">${ICONS.user}</div>
            <div><p class="team-name">${escapeHtml(p.name)}</p><p class="team-role">${escapeHtml(p.role||'')}</p></div>
          </div>
          <div class="row-actions">
            <button class="icon-btn" onclick="openPersonModal('${p.id}')">${ICONS.edit}</button>
            <button class="icon-btn danger" onclick="deletePerson('${p.id}')">${ICONS.trash}</button>
          </div>
        </div>
        <div class="team-email">${ICONS.mail} ${escapeHtml(p.email||'')}</div>
        <div class="team-stats">
          <div><div class="stat-label">Hours logged</div><div class="stat-value">${round1(totals[p.id]||0)} hrs</div></div>
          <div><div class="stat-label">Join date</div><div class="stat-value">${p.joinDate||'—'}</div></div>
        </div>
      </div>
    `).join('') || emptyState('No team members yet.')}
  `;
}

function renderProperties(){
  return `
    <h1 class="page-title">Properties</h1>
    <button class="btn btn-secondary" onclick="openPropertyModal()" style="margin-bottom:16px;">${ICONS.plus.replace('#fff','currentColor')} Add property</button>
    ${state.properties.map(p=>{
      const hrs=round1(state.entries.filter(e=>e.propertyId===p.id).reduce((s,e)=>s+entryHours(e),0));
      return `
      <div class="card">
        <div class="team-top">
          <p class="team-name">${escapeHtml(p.name)}</p>
          <div class="row-actions">
            <button class="icon-btn" onclick="openPropertyModal('${p.id}')">${ICONS.edit}</button>
            <button class="icon-btn danger" onclick="deleteProperty('${p.id}')">${ICONS.trash}</button>
          </div>
        </div>
        <div class="team-stats" style="margin-top:12px;"><div><div class="stat-label">Hours logged</div><div class="stat-value">${hrs} hrs</div></div></div>
      </div>`;
    }).join('') || emptyState('No properties yet.')}
  `;
}

function renderSettings(){
  const catUsage = {};
  state.entries.forEach(e=>{ catUsage[e.category]=(catUsage[e.category]||0)+1; });
  return `
    <h1 class="page-title">Settings</h1>
    <h2 class="section-title">Manage <em>categories</em></h2>
    <button class="btn btn-secondary" onclick="openCategoryModal()" style="margin-bottom:16px;">${ICONS.plus.replace('#fff','currentColor')} Add category</button>
    ${state.categories.map(c=>`
      <div class="card">
        <div class="team-top">
          <p class="team-name">${escapeHtml(c.name)}</p>
          <div class="row-actions">
            <button class="icon-btn" onclick="openCategoryModal('${c.id}')">${ICONS.edit}</button>
            <button class="icon-btn danger" onclick="deleteCategory('${c.id}')">${ICONS.trash}</button>
          </div>
        </div>
        <div class="stat-label" style="margin-top:10px;">${catUsage[c.name]||0} ${catUsage[c.name]===1?'entry':'entries'} logged</div>
      </div>
    `).join('') || emptyState('No categories yet.')}

    <h2 class="section-title">Data <em>export</em></h2>
    <div class="card">
      <p class="team-role" style="margin:0 0 14px;">Download your full activity log as a CSV, bundled with every photo/PDF attachment, in a ZIP file.</p>
      <button class="btn" id="export-btn" onclick="exportData()">${ICONS.download.replace('currentColor','var(--accent-ink)')} Export data</button>
    </div>
  `;
}

function csvEscape(v){
  const s = (v===undefined||v===null) ? '' : String(v);
  return /[",\n]/.test(s) ? '"' + s.replace(/"/g,'""') + '"' : s;
}

async function exportData(){
  const btn = document.getElementById('export-btn');
  if(btn){ btn.disabled = true; btn.textContent = 'Preparing export…'; }
  try{
    const header = ['Date','Hours','Minutes','Description','Team Member','Property','Category','Attachments'];
    const sorted = [...state.entries].sort((a,b)=>a.date.localeCompare(b.date));
    const zip = new JSZip();
    const attFolder = zip.folder('attachments');
    const usedNames = new Set();

    const rows = sorted.map(e => {
      const atts = attachmentsOf(e);
      const attNames = [];
      atts.forEach((a, i) => {
        let name = `${e.date}_${personName(e.personId).split(' ')[0]}_${a.name || ('file'+i)}`;
        while(usedNames.has(name)) name = `dup_${name}`;
        usedNames.add(name);
        attNames.push(name);
        if(a.blob){
          attFolder.file(name, a.blob);
        } else if(a.dataUrl){
          const base64 = a.dataUrl.split(',')[1];
          attFolder.file(name, base64, {base64:true});
        }
      });
      return [e.date, e.hours||0, e.minutes||0, e.description, personName(e.personId), propertyName(e.propertyId), e.category, attNames.join('; ')];
    });
    const csv = [header, ...rows].map(r => r.map(csvEscape).join(',')).join('\n');
    zip.file('activity-log.csv', csv);

    const blob = await zip.generateAsync({type:'blob'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `threshold-export-${new Date().toISOString().slice(0,10)}.zip`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }catch(err){
    alert('Export failed: ' + (err && err.message ? err.message : err));
  }finally{
    if(btn){ btn.disabled = false; btn.textContent = 'Export data'; }
  }
}

/* ---------- Modals ---------- */
function closeModal(){ document.getElementById('modal-root').innerHTML=''; }

function openCategoryModal(id){
  const existing = id ? state.categories.find(c=>c.id===id) : null;
  document.getElementById('modal-root').innerHTML = `
  <div class="modal-backdrop" onclick="if(event.target===this) closeModal()">
    <div class="modal">
      <div class="modal-handle"></div>
      <h2>${existing?'Edit category':'Add category'}</h2>
      <div class="field"><label>Category name</label><input id="c-name" value="${existing?escapeHtml(existing.name):''}"></div>
      <div class="modal-actions">
        <button class="btn" onclick="saveCategory('${existing?existing.id:''}')">${existing?'Save changes':'Add category'}</button>
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      </div>
    </div>
  </div>`;
}

async function saveCategory(id){
  const name=document.getElementById('c-name').value.trim();
  if(!name){ alert('Please enter a category name.'); return; }
  const dup = state.categories.find(c=>c.name.toLowerCase()===name.toLowerCase() && c.id!==id);
  if(dup){ alert('That category already exists.'); return; }
  const obj = id ? state.categories.find(c=>c.id===id) : {id:uid()};
  const oldName = obj.name;
  obj.name = name;
  await dbPut('categories', obj);
  if(id && oldName && oldName!==name){
    const affected = state.entries.filter(e=>e.category===oldName);
    for(const e of affected){ e.category = name; await dbPut('entries', e); }
  }
  await loadAll();
  closeModal();
}

async function deleteCategory(id){
  const cat = state.categories.find(c=>c.id===id);
  if(!cat) return;
  const inUse = state.entries.some(e=>e.category===cat.name);
  if(inUse && !confirm(`"${cat.name}" is used by existing entries. Delete it anyway? Those entries will keep the old category name.`)) return;
  if(!inUse && !confirm('Delete this category?')) return;
  await dbDelete('categories', id);
  await loadAll();
}

function openEntryModal(id){
  const existing = id ? state.entries.find(e=>e.id===id) : null;
  const peopleOpts = state.people.map(p=>`<option value="${p.id}" ${existing&&existing.personId===p.id?'selected':''}>${escapeHtml(p.name)}</option>`).join('');
  const propOpts = state.properties.map(p=>`<option value="${p.id}" ${existing&&existing.propertyId===p.id?'selected':''}>${escapeHtml(p.name)}</option>`).join('');
  const catNames = state.categories.map(c=>c.name);
  if(existing && existing.category && !catNames.includes(existing.category)) catNames.push(existing.category);
  const catOpts = catNames.length
    ? catNames.map(c=>`<option ${existing&&existing.category===c?'selected':''}>${escapeHtml(c)}</option>`).join('')
    : '<option disabled>Add a category first, in Settings</option>';

  const existingAtts = existing ? attachmentsOf(existing) : [];

  document.getElementById('modal-root').innerHTML = `
  <div class="modal-backdrop" onclick="if(event.target===this) closeModal()">
    <div class="modal">
      <div class="modal-handle"></div>
      <h2>${existing?'Edit entry':'Add a new entry'}</h2>
      <div class="field"><label>Date</label><input type="date" id="f-date" value="${existing?existing.date:new Date().toISOString().slice(0,10)}"></div>
      <div class="field"><label>Person</label><select id="f-person">${peopleOpts || '<option disabled>Add a team member first</option>'}</select></div>
      <div class="field"><label>Work type</label><select id="f-category">${catOpts}</select></div>
      <div class="field"><label>Property</label><select id="f-property">${propOpts || '<option disabled>Add a property first</option>'}</select></div>
      <div class="field"><label>Description</label><textarea id="f-desc">${existing?escapeHtml(existing.description):''}</textarea></div>
      <div class="field"><label>Hours</label><input type="number" step="1" min="0" inputmode="numeric" id="f-hours" value="${existing?existing.hours:0}"></div>
      <div class="field"><label>Minutes</label><input type="number" step="1" min="0" max="59" inputmode="numeric" id="f-minutes" value="${existing?(existing.minutes||0):0}"></div>
      <div class="field">
        <label>${ICONS.camera} Supporting documents</label>
        <input type="file" accept="image/*,application/pdf" capture="environment" multiple id="f-attach">
        <div class="file-hint" id="f-attach-hint">Photos, screenshots, or PDFs. Images up to 10MB, PDFs up to 4MB.</div>
        <div class="thumb-row" id="f-attach-preview"></div>
      </div>
      <div class="modal-actions">
        <button class="btn" onclick="saveEntry('${existing?existing.id:''}')">${existing?'Save changes':'Add entry'}</button>
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      </div>
    </div>
  </div>`;

  /* Attachments for the entry currently being edited/created, kept in memory
     until Save. Existing ones carry their id so we know they're already
     saved; new ones get a fresh id and hold the raw File (a Blob). */
  let attachments = existingAtts.map(a => a.blob
    ? {id:a.id, name:a.name, type:a.type, size:a.size, blob:a.blob}
    : {id:a.id, name:a.name, type:a.type, size:a.size, dataUrl:a.dataUrl}); // legacy photo, kept as-is unless removed

  function renderAttachPreview(){
    const remaining = ATTACH_MAX_COUNT - attachments.length;
    document.getElementById('f-attach-hint').textContent =
      `Photos, screenshots, or PDFs. Images up to 10MB, PDFs up to 4MB — ${Math.max(0,remaining)} slot${remaining===1?'':'s'} remaining.`;
    document.getElementById('f-attach-preview').innerHTML = attachments.map(a=>{
      const src = a.blob ? URL.createObjectURL(a.blob) : a.dataUrl;
      const inner = isImage(a.type)
        ? `<img class="thumb" src="${src}">`
        : `<div class="thumb file-thumb">${ICONS.file}</div>`;
      return `<div class="thumb-wrap">${inner}<button type="button" class="thumb-remove" onclick="removeAttachment('${a.id}')">&times;</button></div>`;
    }).join('');
  }
  window.removeAttachment = (id) => { attachments = attachments.filter(a=>a.id!==id); renderAttachPreview(); };

  document.getElementById('f-attach').addEventListener('change', function(ev){
    const files = Array.from(ev.target.files || []);
    ev.target.value = '';
    for(const file of files){
      if(attachments.length >= ATTACH_MAX_COUNT){ alert(`You can attach up to ${ATTACH_MAX_COUNT} files per entry.`); break; }
      const okType = isImage(file.type) || isPdf(file.type);
      if(!okType){ alert(`${file.name}: only images and PDFs are supported.`); continue; }
      const limit = isPdf(file.type) ? ATTACH_MAX_PDF_BYTES : ATTACH_MAX_IMAGE_BYTES;
      if(file.size > limit){ alert(`${file.name} is too large (max ${formatBytes(limit)}).`); continue; }
      attachments.push({id:uid(), name:file.name, type:file.type, size:file.size, blob:file});
    }
    renderAttachPreview();
  });
  renderAttachPreview();
  window.__currentAttachments = () => attachments;
}

async function saveEntry(id){
  const date=document.getElementById('f-date').value;
  const personId=document.getElementById('f-person').value;
  const category=document.getElementById('f-category').value;
  const propertyId=document.getElementById('f-property').value;
  const description=document.getElementById('f-desc').value.trim();
  const hours=parseFloat(document.getElementById('f-hours').value)||0;
  const minutes=parseFloat(document.getElementById('f-minutes').value)||0;
  if(!date||!personId||!propertyId||!description||(hours===0&&minutes===0)){
    alert('Please fill in date, person, property, description, and hours or minutes.'); return;
  }
  const photo = null; // superseded by `attachments`; kept only so legacy readers don't error
  const attachments = window.__currentAttachments ? window.__currentAttachments() : [];
  const obj = id ? state.entries.find(e=>e.id===id) : {id:uid()};
  Object.assign(obj, {date, personId, category, propertyId, description, hours, minutes, photo, attachments});
  await dbPut('entries', obj);
  await loadAll();
  closeModal();
}

async function deleteEntry(id){
  if(!confirm('Delete this entry?')) return;
  await dbDelete('entries', id);
  await loadAll();
}

function openPersonModal(id){
  const existing = id ? state.people.find(p=>p.id===id) : null;
  document.getElementById('modal-root').innerHTML = `
  <div class="modal-backdrop" onclick="if(event.target===this) closeModal()">
    <div class="modal">
      <div class="modal-handle"></div>
      <h2>${existing?'Edit team member':'Add team member'}</h2>
      <div class="field"><label>Name</label><input id="p-name" value="${existing?escapeHtml(existing.name):''}"></div>
      <div class="field"><label>Relationship / role</label><input id="p-role" placeholder="e.g. Spouse of primary" value="${existing?escapeHtml(existing.role||''):''}"></div>
      <div class="field"><label>Email</label><input id="p-email" type="email" value="${existing?escapeHtml(existing.email||''):''}"></div>
      <div class="field"><label>Join date</label><input id="p-join" type="date" value="${existing?existing.joinDate:new Date().toISOString().slice(0,10)}"></div>
      <div class="modal-actions">
        <button class="btn" onclick="savePerson('${existing?existing.id:''}')">${existing?'Save changes':'Add member'}</button>
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      </div>
    </div>
  </div>`;
}

async function savePerson(id){
  const name=document.getElementById('p-name').value.trim();
  const role=document.getElementById('p-role').value.trim();
  const email=document.getElementById('p-email').value.trim();
  const joinDate=document.getElementById('p-join').value;
  if(!name){ alert('Please enter a name.'); return; }
  const obj = id ? state.people.find(p=>p.id===id) : {id:uid()};
  Object.assign(obj, {name, role, email, joinDate});
  await dbPut('people', obj);
  await loadAll();
  closeModal();
}

async function deletePerson(id){
  if(!confirm('Remove this team member?')) return;
  await dbDelete('people', id);
  await loadAll();
}

function openPropertyModal(id){
  const existing = id ? state.properties.find(p=>p.id===id) : null;
  document.getElementById('modal-root').innerHTML = `
  <div class="modal-backdrop" onclick="if(event.target===this) closeModal()">
    <div class="modal">
      <div class="modal-handle"></div>
      <h2>${existing?'Edit property':'Add property'}</h2>
      <div class="field"><label>Property name</label><input id="pr-name" value="${existing?escapeHtml(existing.name):''}"></div>
      <div class="modal-actions">
        <button class="btn" onclick="saveProperty('${existing?existing.id:''}')">${existing?'Save changes':'Add property'}</button>
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      </div>
    </div>
  </div>`;
}

async function saveProperty(id){
  const name=document.getElementById('pr-name').value.trim();
  if(!name){ alert('Please enter a property name.'); return; }
  const obj = id ? state.properties.find(p=>p.id===id) : {id:uid()};
  obj.name = name;
  await dbPut('properties', obj);
  await loadAll();
  closeModal();
}

async function deleteProperty(id){
  if(!confirm('Delete this property?')) return;
  await dbDelete('properties', id);
  await loadAll();
}

/* ---------- Init ---------- */
window.addEventListener('online', render);
window.addEventListener('offline', render);
if('serviceWorker' in navigator){
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(()=>{});
  });
}
loadAll();
