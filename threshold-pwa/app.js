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
};

let state = { view:'dashboard', people:[], properties:[], entries:[], loaded:false };
function uid(){ return Date.now().toString(36) + Math.random().toString(36).slice(2,8); }

async function seedIfEmpty(){
  const count = await dbCount('entries');
  const peopleCount = await dbCount('people');
  if(count > 0 || peopleCount > 0) return;
  const p1 = uid(), p2 = uid(), prop1 = uid();
  const people = [
    {id:p1, name:'Chandrashekara Hassan Raju', role:'Primary account holder', email:'chandp24@gmail.com', joinDate:'2026-06-20'},
    {id:p2, name:'Pallavi R Mangalvedkar', role:'Spouse of primary', email:'pmangalvedkar@gmail.com', joinDate:'2026-06-23'}
  ];
  const properties = [{id:prop1, name:'Alpine View'}];
  const entries = [
    {id:uid(), date:'2026-07-15', category:'Property design', personId:p2, description:'STR design and construction meeting', propertyId:prop1, hours:1, photo:null},
    {id:uid(), date:'2026-07-15', category:'Property design', personId:p1, description:'Discuss design and construction with Eve and Victoria', propertyId:prop1, hours:1, photo:null},
    {id:uid(), date:'2026-07-09', category:'Property design', personId:p1, description:'Review architectural plans with contractor', propertyId:prop1, hours:1, photo:null},
    {id:uid(), date:'2026-06-28', category:'Guest communication', personId:p1, description:'Respond to guest inquiries and booking questions', propertyId:prop1, hours:2, photo:null},
    {id:uid(), date:'2026-06-25', category:'Maintenance', personId:p1, description:'Coordinate HVAC repair with technician', propertyId:prop1, hours:3, photo:null},
    {id:uid(), date:'2026-06-23', category:'Sourcing', personId:p2, description:'Research furniture and decor options', propertyId:prop1, hours:1.5, photo:null},
    {id:uid(), date:'2026-06-20', category:'Admin', personId:p1, description:'Set up STR Tax Loophole account and property records', propertyId:prop1, hours:3.25, photo:null},
  ];
  for(const p of people) await dbPut('people', p);
  for(const p of properties) await dbPut('properties', p);
  for(const e of entries) await dbPut('entries', e);
}

async function loadAll(){
  await seedIfEmpty();
  state.people = await dbGetAll('people');
  state.properties = await dbGetAll('properties');
  state.entries = await dbGetAll('entries');
  state.loaded = true;
  render();
}

function personName(id){ const p = state.people.find(x=>x.id===id); return p ? p.name : 'Unknown'; }
function propertyName(id){ const p = state.properties.find(x=>x.id===id); return p ? p.name : 'Unknown'; }
function round1(n){ return Math.round(n*10)/10; }
function startOfWeek(d){ const dt=new Date(d); dt.setDate(dt.getDate()-dt.getDay()); dt.setHours(0,0,0,0); return dt; }
function escapeHtml(s){ const d=document.createElement('div'); d.innerText=s||''; return d.innerHTML; }

function computeMetrics(){
  const now=new Date(), wkStart=startOfWeek(now);
  const monthStart=new Date(now.getFullYear(), now.getMonth(), 1);
  const yearStart=new Date(now.getFullYear(), 0, 1);
  let week=0, month=0, ytd=0;
  state.entries.forEach(e=>{
    const d=new Date(e.date+'T00:00:00'); const h=parseFloat(e.hours)||0;
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
  state.entries.forEach(e=>{ perPerson[e.personId]=(perPerson[e.personId]||0)+(parseFloat(e.hours)||0); });
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
  return `
    <div class="card">
      <div class="activity-date">${e.date}</div>
      <div class="tag">${e.category}</div>
      <div class="activity-person">${personName(e.personId)}</div>
      <div class="activity-desc">${escapeHtml(e.description)}</div>
      <div class="activity-property">${propertyName(e.propertyId)}</div>
      ${e.photo ? `<div class="thumb-row"><img class="thumb" src="${e.photo}"/></div>` : ''}
      <div class="activity-bottom">
        <div class="activity-hours">${e.hours} hrs</div>
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
  state.entries.forEach(e=>{ totals[e.personId]=(totals[e.personId]||0)+(parseFloat(e.hours)||0); });
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
      const hrs=round1(state.entries.filter(e=>e.propertyId===p.id).reduce((s,e)=>s+(parseFloat(e.hours)||0),0));
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

/* ---------- Modals ---------- */
function closeModal(){ document.getElementById('modal-root').innerHTML=''; }

function openEntryModal(id){
  const existing = id ? state.entries.find(e=>e.id===id) : null;
  const categories=['Property design','Guest communication','Maintenance','Sourcing','Admin','Financial management','Inspection'];
  const peopleOpts = state.people.map(p=>`<option value="${p.id}" ${existing&&existing.personId===p.id?'selected':''}>${escapeHtml(p.name)}</option>`).join('');
  const propOpts = state.properties.map(p=>`<option value="${p.id}" ${existing&&existing.propertyId===p.id?'selected':''}>${escapeHtml(p.name)}</option>`).join('');
  const catOpts = categories.map(c=>`<option ${existing&&existing.category===c?'selected':''}>${c}</option>`).join('');

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
      <div class="field"><label>Hours</label><input type="number" step="0.25" min="0" inputmode="decimal" id="f-hours" value="${existing?existing.hours:''}"></div>
      <div class="field">
        <label>${ICONS.camera} Attachment</label>
        <input type="file" accept="image/*" capture="environment" id="f-photo">
        <div class="file-hint">Take a photo or choose from your library.</div>
        <div class="thumb-row" id="f-photo-preview">${existing&&existing.photo?`<img class="thumb" src="${existing.photo}">`:''}</div>
      </div>
      <div class="modal-actions">
        <button class="btn" onclick="saveEntry('${existing?existing.id:''}')">${existing?'Save changes':'Add entry'}</button>
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      </div>
    </div>
  </div>`;

  let photoData = existing ? existing.photo : null;
  document.getElementById('f-photo').addEventListener('change', function(ev){
    const file = ev.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = function(){
      photoData = reader.result;
      document.getElementById('f-photo-preview').innerHTML = `<img class="thumb" src="${photoData}">`;
    };
    reader.readAsDataURL(file);
  });
  window.__currentPhoto = () => photoData;
}

async function saveEntry(id){
  const date=document.getElementById('f-date').value;
  const personId=document.getElementById('f-person').value;
  const category=document.getElementById('f-category').value;
  const propertyId=document.getElementById('f-property').value;
  const description=document.getElementById('f-desc').value.trim();
  const hours=parseFloat(document.getElementById('f-hours').value);
  if(!date||!personId||!propertyId||!description||isNaN(hours)){
    alert('Please fill in date, person, property, description, and hours.'); return;
  }
  const photo = window.__currentPhoto ? window.__currentPhoto() : null;
  const obj = id ? state.entries.find(e=>e.id===id) : {id:uid()};
  Object.assign(obj, {date, personId, category, propertyId, description, hours, photo});
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
