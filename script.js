// ======================================================================
// DATA MODEL & HALAMAN INITIAL STATE
// ======================================================================
let PAGE_ORDER = ['cipaganti', 'bfa', 'genset'];
let PAGE_DEFINITIONS = {
  cipaganti: {
    label: 'PLN Cipaganti',
    shortLabel: 'PLN Cipaganti',
    supply: 'PLN',
    summary: 'Pusat PLN Cipaganti - 6 cabang penyederhanaan.',
    verify: ['LVMDP GWT / Panel J. Box Baru Lantai 1 / Panel Utility'],
    notes: {
      'LVMDP GWT / Panel J. Box Baru Lantai 1 / Panel Utility': 'Nama panel berupa alternatif J. Box Baru Lantai 1 / Utility.'
    },
    routes: [
      { no: 1, items: ['PLN TM - 1 PLN', 'Trafo 10', 'Panel TM', 'Panel VCB 4B/P'] },
      { no: 2, items: ['PLN TM - 1 PLN', 'Trafo 10', 'Panel TM', 'Panel VCB 5B/G'] },
      { no: 3, items: ['PLN TM - 2 PLN', 'Panel VCB 4', 'Trafo 9', 'Panel ACB1 FW', 'ACTS', 'Gedung 21 (Panel Distribusi Lantai 1)'] },
      { no: 3, items: ['PLN TM - 2 PLN', 'Panel VCB 4', 'Trafo 9', 'Panel ACB1 FW', 'ACTS', 'Gardu Hubung'] },
      { no: 3, items: ['PLN TM - 2 PLN', 'Panel VCB 4', 'Trafo 9', 'Panel ACB1 FW', 'ACTS', 'Panel Timur'] },
      { no: 3, items: ['PLN TM - 2 PLN', 'Panel VCB 4', 'Trafo 9', 'Panel ACB1 FW', 'ACTS', 'Panel Barat'] },
      { no: 3, items: ['PLN TM - 2 PLN', 'Panel VCB 4', 'Trafo 9', 'Panel ACB1 FW', 'ACTS', 'Sumber TR Normal'] },
      { no: 3, items: ['PLN TM - 2 PLN', 'Panel VCB 4', 'Trafo 9', 'Panel ACB1 FW', 'ACTS', 'GLaf Gedung 19'] },
      { no: 3, items: ['PLN TM - 2 PLN', 'Panel VCB 4', 'Trafo 9', 'Panel ACB1 FW', 'ACTS', 'Bakteri Tengah'] },
      { no: 3, items: ['PLN TM - 2 PLN', 'Panel VCB 4', 'Trafo 9', 'Panel ACB1 FW', 'ACTS', 'Panel Kritikal Pengemasan', 'Panel Kritikal'] },
      { no: 4, items: ['PLN TM - 3 PLN', 'Trafo 11', 'Gedung 21 (Panel Distribusi Lantai 1)'] },
      { no: 5, items: ['PLN TM - 3 PLN', 'Trafo 11', 'LVMDP GWT / Panel J. Box Baru Lantai 1 / Panel Utility'] },
      { no: 6, items: ['PLN TM - 3 PLN', 'Trafo 11', 'Panel Freeze Drying'] },
    ]
  },
  bfa: {
    label: 'PLN BFA',
    shortLabel: 'PLN BFA',
    supply: 'PLN',
    summary: 'Pusat PLN BFA - 12 cabang penyederhanaan.',
    verify: ['Panel MVMDP 20kV'],
    notes: {
      'Panel MVMDP 20kV': 'Posisi Panel MVMDP 20kV perlu dikonfirmasi ulang.'
    },
    routes: [
      { no: 1, items: ['Panel CB', 'Panel SF6-1', 'Gardu Hubung', 'Gardu 34 Baru', 'Gedung 34 Non Kritikal'] },
      { no: 2, items: ['Panel CB', 'Panel SF6-1', 'Gardu Hubung', 'Gardu 34 Baru', 'Panel Temprorary Non Kritikal', 'Gedung 34 Non Kritikal'] },
      { no: 3, items: ['Panel CB', 'Panel SF6-1', 'Gardu Hubung', 'Gardu 34 Baru', 'Panel Temprorary Non Kritikal', 'PP. PH. 34L.1'] },
      { no: 4, items: ['Panel CB', 'Panel SF6-1', 'Gardu Hubung', 'Gardu 34 Baru', 'Panel Temprorary Non Kritikal', 'SPARE 350kVA'] },
      { no: 5, items: ['Panel CB', 'Panel SF6-1', 'Gardu Hubung', 'Panel MVMDP 20kV', 'Trafo 20kV', 'Panel Distribusi Genset', 'LVMDP KRITIKAL Gedung 41B'] },
      { no: 6, items: ['Panel CB', 'Panel SF6-1', 'Gardu Hubung', 'Panel MVMDP 20kV', 'Trafo 20kV', 'Panel Distribusi Genset', 'LVMDP NORMAL Gedung 41B'] },
      { no: 7, items: ['Panel CB', 'Panel SF6-1', 'Gardu Hubung', 'Trafo-13', 'LVMDP. 1 - 36 Lantai 2'] },
      { no: 8, items: ['Panel CB', 'Panel SF6-1', 'Gardu Hubung', 'Trafo-13', 'LVMDP. 2 - 36 Lantai'] },
      { no: 9, items: ['Panel CB', 'Panel SF6-1', 'Gardu Hubung', 'Trafo-13', 'Panel MDP-Gedung 3'] },
      { no: 10, items: ['Panel CB', 'Panel SF6-2', 'Gardu Gedung 43', 'Panel ACB A', 'Panel ATS', 'Cap Bank', 'LVMDP', 'PP UPS 6-BS'] },
      { no: 11, items: ['Panel CB', 'Panel SF6-3', 'Trafo 12 (Gardu Gedung 40)', 'Panel Distribusi Pilot Scale / Panel Utility'] },
      { no: 12, items: ['Panel CB', 'Panel SBan3', 'Gardu Gedung 40', 'Trafo 12', 'Panel Distribusi Pilot Scale', 'Capasitor Bank'] },
    ]
  },
  genset: {
    label: 'Genset',
    shortLabel: 'Genset',
    supply: 'Genset',
    summary: 'Pusat Genset - 8 cabang penyederhanaan.',
    verify: ['Panel Timur/Barat', 'ATS', 'Gedung Teknik'],
    notes: {
      'Panel Timur/Barat': 'Dokumen sumber menuliskan "Panel Timur Barat"; nama resmi perlu dikonfirmasi.'
    },
    routes: [
      { no: 1, items: ['Trafo 2 Polio', 'ACTS', 'Flywheel Gedung 33', 'ACTS', 'Panel ACB 2 PLN', 'LVMDP Substation'] },
      { no: 2, items: ['Trafo 5', 'ACTS', 'Flywheel Gedung 29', 'LVMDP-UPS Gedung 29', 'Gardu Hubung', 'Panel Timur/Barat'] },
      { no: 2, items: ['Trafo 5', 'ACTS', 'Flywheel Gedung 29', 'LVMDP-UPS Gedung 29', 'Gardu Hubung', 'Sumber TR Normal'] },
      { no: 2, items: ['Trafo 5', 'ACTS', 'Flywheel Gedung 29', 'LVMDP-UPS Gedung 29', 'Gardu Hubung', 'Gedung 19'] },
      { no: 2, items: ['Trafo 5', 'ACTS', 'Flywheel Gedung 29', 'LVMDP-UPS Gedung 29', 'Gardu Hubung', 'SDP Compressor Basement 36'] },
      { no: 3, items: ['Trafo 6', 'Panel ACB 10', 'Panel DIST 8', 'SDP Compressor Basement 36'] },
      { no: 4, items: ['Genset Panel VCB 1G', 'Trafo 14', 'LVMDP Gedung 36', 'Panel MDP Gedung 3'] },
      { no: 5, items: ['Genset Panel VCB 1G', 'Trafo 15', 'ATS'] },
      { no: 6, items: ['Trafo 7', 'Panel DIST 9', 'Gedung Teknik'] },
      { no: 7, items: ['Trafo 1 Polio', 'LVMDP Substation', 'To ATS SPF'] },
      { no: 8, items: ['Trafo 1 Polio', 'ACTS', 'Flywheel Gedung 33', 'ACTS', 'Panel ACB 2 PLN', 'LVMDP Substation'] },
    ]
  }
};

const LEGEND_LABELS = {
  'mv-pln': 'Tegangan Menengah – PLN',
  'mv-genset': 'Tegangan Menengah – Genset',
  'lv-pln': 'Tegangan Rendah – PLN',
  'lv-genset': 'Tegangan Rendah – Genset',
  'standby': 'Jalur Cadangan (Standby)'
};

function slugId(value) {
  return value.normalize('NFKD').replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-+|-+$/g, '').toUpperCase().slice(0, 42) || 'NODE';
}

function inferNodeMeta(name, pageKey, isRoot) {
  const s = name.toLowerCase();
  const supply = (PAGE_DEFINITIONS[pageKey] && PAGE_DEFINITIONS[pageKey].supply) || 'PLN';
  let type = 'equipment';
  if (isRoot) type = 'source';
  else if (pageKey === 'genset' && /^g\d+$/i.test(name.trim())) type = 'source';
  else if (s === 'cb' || s === 'panel cb' || s.includes('sf6') || s.includes('panel tm') || s.includes('mvmdp') || s.includes('vcb')) type = 'hvmdp';
  else if (s.includes('trafo') || s.includes('gardu') || s.includes('substation')) type = 'gardu';
  else if (s.includes('flywheel')) type = 'flywheel';
  else if (s.includes('lvmdp')) type = 'lvmdp';
  else if (s.includes('panel acb') || /^acb\b/i.test(name)) type = 'acb';
  else if (s.includes('acts') || s.includes('ats')) type = 'ats';
  else if (s.includes('sdp') || s.includes('pp ups')) type = 'sdp';
  else if (s.includes('panel') || s.includes('phb') || s.includes('cap bank') || s.includes('sumber tr')) type = 'distribution';
  else if (s.includes('gedung') || s.includes('non-kritikal')) type = 'building';

  let voltage = 'LV';
  if (isRoot) voltage = pageKey === 'genset' ? 'MV/LV' : 'MV';
  else if (type === 'source') voltage = 'MV/LV';
  else if (type === 'hvmdp') voltage = 'MV';
  else if (type === 'gardu') voltage = s.includes('trafo') ? 'MV/LV' : 'MV';
  else if (type === 'flywheel') voltage = 'LV';

  return { type, supply, voltage };
}

let PAGE_NODES_CACHE = {};

function buildNodesForPage(pageKey) {
  if (PAGE_NODES_CACHE[pageKey]) {
    return PAGE_NODES_CACHE[pageKey];
  }
  const page = PAGE_DEFINITIONS[pageKey];
  if (!page) {
    PAGE_NODES_CACHE[pageKey] = [];
    return [];
  }

  if (!page.routes || page.routes.length === 0) {
    PAGE_NODES_CACHE[pageKey] = [];
    return [];
  }

  const rootId = 'ROOT-' + pageKey.toUpperCase();
  const rootMeta = inferNodeMeta(page.label, pageKey, true);
  const nodes = [{
    id: rootId, name: page.label, parent: null, pageKey, branchNos: [],
    type: rootMeta.type, supply: rootMeta.supply, voltage: rootMeta.voltage,
    critical: null, verified: true, note: page.summary || '', capacity: ''
  }];
  const nodeByParentAndName = new Map();
  let sequence = 0;

  page.routes.forEach(route => {
    let parentId = rootId;
    route.items.forEach(name => {
      const key = parentId + '||' + name;
      let node = nodeByParentAndName.get(key);
      if (!node) {
        const meta = inferNodeMeta(name, pageKey, false);
        node = {
          id: pageKey.toUpperCase() + '-' + String(++sequence).padStart(3, '0') + '-' + slugId(name),
          name, parent: parentId, pageKey, branchNos: [route.no],
          type: meta.type, supply: meta.supply, voltage: meta.voltage,
          critical: null,
          verified: !(page.verify && page.verify.includes(name)),
          note: (page.notes && page.notes[name]) || '',
          capacity: ''
        };
        nodes.push(node);
        nodeByParentAndName.set(key, node);
      } else if (!node.branchNos.includes(route.no)) {
        node.branchNos.push(route.no);
      }
      parentId = node.id;
    });
  });
  PAGE_NODES_CACHE[pageKey] = nodes;
  return nodes;
}

function buildScenariosForPage(nodes) {
  const options = [{ id: 'NONE', label: 'Normal (Tidak Ada Gangguan)' }];
  const selected = nodes.filter((n, index) => {
    if (index === 0) return true;
    const level = levelOf(n);
    const hasChildren = nodes.some(x => x.parent === n.id);
    return hasChildren && level <= 4;
  });
  selected.slice(0, 24).forEach(n => options.push({ id: n.id, label: n.name + ' Gangguan' }));
  return options;
}

let NODES = [];
let SCENARIOS = [];

// ======================================================================
// TYPE META & LEVEL
// ======================================================================
const TYPE_META = {
  source: { icon: '&#9889;', name: 'Sumber Listrik (PLN / Genset / UPS / Flywheel)', level: 1 },
  ups: { icon: '&#128267;', name: 'UPS', level: 1 },
  flywheel: { icon: '&#128267;', name: 'UPS / Flywheel', level: 4 },
  hvmdp: { icon: '&#128268;', name: 'Tegangan Menengah (HVMDP/MVMDP)', level: 2 },
  gardu: { icon: '&#127981;', name: 'Gardu / Substation / Power House', level: 3 },
  lvmdp: { icon: '&#128230;', name: 'LVMDP', level: 4 },
  acb: { icon: '&#128737;&#65039;', name: 'Main Distribution (ACB/VCB/MCCB)', level: 5 },
  ats: { icon: '&#128260;', name: 'Main Distribution (ATS/Bus Tie)', level: 5 },
  distribution: { icon: '&#9889;', name: 'Main Distribution (Distribution Panel)', level: 5 },
  sdp: { icon: '&#127970;', name: 'Sub Distribution (SDP/Panel Gedung)', level: 6 },
  psdp: { icon: '&#128193;', name: 'Sub Distribution (PSDP/Panel Lantai)', level: 6 },
  building: { icon: '&#127970;', name: 'Gedung / Beban Akhir', level: 7 },
  equipment: { icon: '&#9881;&#65039;', name: 'Equipment / Beban Akhir', level: 7 },
};

const LEVEL_COLOR = { 1: '#2563EB', 2: '#7C3AED', 3: '#16A34A', 4: '#F97316', 5: '#EAB308', 6: '#06B6D4', 7: '#6B7280' };
const LEVEL_NAME = { 1: 'Source', 2: 'Medium Voltage', 3: 'Gardu/Substation', 4: 'LVMDP', 5: 'Main Distribution', 6: 'Sub Distribution', 7: 'Equipment' };
function levelOf(n) { return (TYPE_META[n.type] && TYPE_META[n.type].level) || 7; }
function levelColorOf(n) { return LEVEL_COLOR[levelOf(n)]; }

function tintOf(hex) {
  const map = {
    '#2563EB': '#e5edfc', '#7C3AED': '#f1e7fd', '#16A34A': '#e2f6ea', '#F97316': '#fef0e0',
    '#EAB308': '#fdf6d6', '#06B6D4': '#dff7fb', '#6B7280': '#eef1f4',
  };
  return map[hex] || '#eef1f4';
}

const NODE_W = 172, NODE_H = 56, EQ_W = 130, EQ_H = 44, GAP_X = 54, GAP_Y = 24, PAD = 50;

// ======================================================================
// STATE UTAMA, APP MODE & CLIPBOARD
// ======================================================================
let NODE_CLIPBOARD = null;

const state = {
  appMode: 'view', // 'view' atau 'editor'
  activePage: 'cipaganti',
  byId: new Map(),
  childrenOf: new Map(),
  collapsed: new Set(),
  pos: new Map(),
  scale: 1, panX: 80, panY: 40,
  mode: 'normal',
  faultId: null,
  status: new Map(),
  selectedId: null,
  canvasW: 2000, canvasH: 1200,
  dragging: false, dragStartX: 0, dragStartY: 0, panStartX: 0, panStartY: 0,
  trace: null,
  legendFilter: null,
  legendTouched: null,
  editTargetId: null,
  modalMode: 'add'
};

function buildIndex() {
  state.byId.clear();
  state.childrenOf.clear();
  NODES.forEach(n => state.byId.set(n.id, n));
  NODES.forEach(n => state.childrenOf.set(n.id, []));
  NODES.forEach(n => { if (n.parent && state.childrenOf.has(n.parent)) state.childrenOf.get(n.parent).push(n.id); });
}

// ======================================================================
// LAYOUT ENGINE
// ======================================================================
function computeLayout() {
  if (!NODES || NODES.length === 0) {
    state.pos.clear();
    state.canvasW = 800;
    state.canvasH = 600;
    return;
  }
  const cursor = { v: 0 };
  const pos = new Map();
  let maxDepth = 0;

  function widthOf(id) { return state.byId.get(id) && state.byId.get(id).type === 'equipment' ? EQ_W : NODE_W; }
  function heightOf(id) { return state.byId.get(id) && state.byId.get(id).type === 'equipment' ? EQ_H : NODE_H; }

  function visit(id, depth) {
    maxDepth = Math.max(maxDepth, depth);
    const kids = state.collapsed.has(id) ? [] : state.childrenOf.get(id);
    let slot;
    if (!kids || kids.length === 0) {
      slot = cursor.v;
      cursor.v += 1;
    } else {
      const childSlots = kids.map(k => visit(k, depth + 1));
      slot = (Math.min(...childSlots) + Math.max(...childSlots)) / 2;
    }
    pos.set(id, { slot, depth });
    return slot;
  }

  const roots = NODES.filter(n => !n.parent).map(n => n.id);
  roots.forEach(r => visit(r, 0));

  state.pos.clear();
  pos.forEach((p, id) => {
    const w = widthOf(id), h = heightOf(id);
    const px = PAD + p.depth * (NODE_W + GAP_X);
    const py = PAD + p.slot * (NODE_H + GAP_Y);
    state.pos.set(id, { x: px, y: py, w, h });
  });
  state.canvasW = Math.max(800, PAD * 2 + (maxDepth + 1) * (NODE_W + GAP_X));
  state.canvasH = Math.max(600, PAD * 2 + (cursor.v) * (NODE_H + GAP_Y));
}

function countHiddenDescendants(id) {
  let count = 0;
  function walk(nid) {
    (state.childrenOf.get(nid) || []).forEach(c => { count++; walk(c); });
  }
  walk(id);
  return count;
}

// ======================================================================
// SIMULATION ENGINE
// ======================================================================
function runSimulation(faultId) {
  const status = new Map();
  state.byId.forEach((n, id) => status.set(id, 'normal'));
  if (!faultId || faultId === 'NONE') { state.status = status; return; }
  status.set(faultId, 'padam');

  function walk(id, mode) {
    (state.childrenOf.get(id) || []).forEach(childId => {
      const child = state.byId.get(childId);
      let childMode = mode;
      if (mode === 'padam' && child.altParent) {
        const altStatus = status.get(child.altParent);
        if (altStatus !== 'padam') childMode = 'genset';
      }
      status.set(childId, childMode);
      walk(childId, childMode);
    });
  }
  walk(faultId, 'padam');
  state.status = status;
}

function simulationSummary() {
  let padam = 0, genset = 0, normal = 0, critPadam = 0, critGenset = 0, nonCritPadam = 0, nonCritGenset = 0, totalCrit = 0, totalNonCrit = 0;
  state.byId.forEach((n, id) => {
    if (n.critical === true) totalCrit++;
    if (n.critical === false) totalNonCrit++;
    const s = state.status.get(id);
    if (s === 'padam') { padam++; if (n.critical) critPadam++; else if (n.critical === false) nonCritPadam++; }
    else if (s === 'genset') { genset++; if (n.critical) critGenset++; else if (n.critical === false) nonCritGenset++; }
    else normal++;
  });
  const total = state.byId.size;
  const impactedPct = total ? (((padam + genset) / total) * 100).toFixed(1) : '0.0';
  return { padam, genset, normal, critPadam, critGenset, nonCritPadam, nonCritGenset, totalCrit, totalNonCrit, total, impactedPct };
}

// ======================================================================
// RENDER NODES & EDGES
// ======================================================================
function isVisible(id) {
  let cur = state.byId.get(id);
  let guard = 0;
  while (cur && cur.parent && guard < 40) {
    if (state.collapsed.has(cur.parent)) return false;
    cur = state.byId.get(cur.parent);
    guard++;
  }
  return true;
}

function statusOf(id) {
  if (state.mode !== 'sim') return 'normal';
  return state.status.get(id) || 'normal';
}

function renderNodes() {
  const layer = document.getElementById('nodesLayer');
  const emptyPrompt = document.getElementById('emptyCanvasPrompt');
  layer.innerHTML = '';

  if (!NODES || NODES.length === 0) {
    emptyPrompt.style.display = 'block';
    return;
  } else {
    emptyPrompt.style.display = 'none';
  }

  NODES.forEach(n => {
    if (!isVisible(n.id)) return;
    const p = state.pos.get(n.id);
    if (!p) return;
    const div = document.createElement('div');
    div.className = 'node';
    div.dataset.type = n.type;
    div.dataset.id = n.id;
    div.style.left = p.x + 'px';
    div.style.top = p.y + 'px';
    div.style.width = p.w + 'px';
    div.style.minHeight = p.h + 'px';

    const st = statusOf(n.id);
    const branchColor = levelColorOf(n);
    let badgeBg = tintOf(branchColor);
    let cardColor = branchColor;
    if (state.mode === 'sim') {
      if (st === 'padam') { cardColor = '#ef4444'; badgeBg = '#fbd0d0'; div.classList.add('sim-padam'); }
      else if (st === 'genset') { cardColor = '#f59e0b'; badgeBg = '#fde3ae'; div.classList.add('sim-genset'); }
    }
    div.style.setProperty('--type-color', cardColor);
    if (n.id === state.selectedId) div.classList.add('selected');
    if (state.trace) {
      if (state.trace.chainSet.has(n.id)) div.classList.add('traced');
      else div.classList.add('dim');
    }
    if (state.legendTouched) {
      if (state.legendTouched.has(n.id)) div.classList.add('traced');
      else div.classList.add('dim');
    }

    const meta = TYPE_META[n.type] || { icon: '&#9679;' };
    let html = '<div class="row1"><div class="badge" style="background:' + badgeBg + '">' + meta.icon + '</div>' +
      '<div class="name">' + n.name + '</div></div>';
    if (n.capacity) html += '<div class="meta">' + n.capacity + '</div>';
    else if (n.type !== 'equipment') html += '<div class="meta">' + (n.supply || '') + (n.voltage ? (' &middot; ' + n.voltage) : '') + '</div>';
    div.innerHTML = html;

    if (state.mode === 'sim') {
      const dot = document.createElement('div');
      dot.className = 'statusdot ' + (st === 'padam' ? 'padam' : st === 'genset' ? 'genset' : '');
      div.appendChild(dot);
    }
    if (n.verified === false) {
      const flag = document.createElement('div');
      flag.className = 'flag';
      flag.title = 'Memerlukan verifikasi lapangan';
      flag.textContent = '!';
      div.appendChild(flag);
    }
    const kids = state.childrenOf.get(n.id) || [];
    if (kids.length) {
      const tag = document.createElement('div');
      tag.className = 'collapseTag';
      tag.textContent = state.collapsed.has(n.id) ? ('+ ' + countHiddenDescendants(n.id)) : '\u2212';
      tag.title = state.collapsed.has(n.id) ? 'Perluas' : 'Ciutkan';
      tag.addEventListener('click', (e) => {
        e.stopPropagation();
        if (state.collapsed.has(n.id)) state.collapsed.delete(n.id); else state.collapsed.add(n.id);
        computeLayout(); renderAll();
      });
      div.appendChild(tag);
    }

    div.addEventListener('click', () => selectNode(n.id));
    layer.appendChild(div);
  });
}

function edgeColor(child) {
  if (child.voltage === 'MV') return child.supply === 'Genset' ? '#8B5CF6' : '#2563EB';
  return child.supply === 'Genset' ? '#F97316' : '#16A34A';
}
const EDGE_STANDBY_COLOR = '#ABAFB7';

function edgeCategory(child, isAlt) {
  if (isAlt) return 'standby';
  return (child.voltage === 'MV' ? 'mv' : 'lv') + '-' + (child.supply === 'Genset' ? 'genset' : 'pln');
}

function renderEdges() {
  const svg = document.getElementById('edgesSvg');
  svg.setAttribute('width', state.canvasW);
  svg.setAttribute('height', state.canvasH);
  svg.setAttribute('viewBox', '0 0 ' + state.canvasW + ' ' + state.canvasH);
  let paths = '';

  function elbow(x1, y1, x2, y2) {
    const midX = x1 + (x2 - x1) * 0.55;
    return 'M ' + x1 + ' ' + y1 + ' L ' + midX + ' ' + y1 + ' L ' + midX + ' ' + y2 + ' L ' + x2 + ' ' + y2;
  }

  const trace = state.trace;
  const legendFilter = state.legendFilter;

  NODES.forEach(n => {
    if (!isVisible(n.id)) return;
    const cp = state.pos.get(n.id);
    if (!cp) return;

    if (n.parent && isVisible(n.parent) && state.pos.get(n.parent)) {
      const pp = state.pos.get(n.parent);
      const x1 = pp.x + pp.w, y1 = pp.y + pp.h / 2;
      const x2 = cp.x, y2 = cp.y + cp.h / 2;
      let color = edgeColor(n), width = 2.2, dash = '5,4', opacity = 0.9, cls = '';
      if (state.mode === 'sim') {
        const st = statusOf(n.id);
        if (st === 'padam') { color = '#ef4444'; width = 3.4; dash = '7,3'; opacity = 1; cls = ' class="edge-sim-padam"'; }
        else if (st === 'genset') {
          if (n.altParent) { color = EDGE_STANDBY_COLOR; opacity = 0.35; dash = '3,5'; }
          else { color = '#f59e0b'; width = 2.8; opacity = 0.9; dash = '6,3'; }
        }
      }
      if (legendFilter) {
        const cat = edgeCategory(n, false);
        if (cat === legendFilter) { width = 3.6; opacity = 1; cls = ' class="edge-legend-active"'; }
        else { opacity = 0.08; cls = ''; }
      }
      const isTraced = trace && trace.chainSet.has(n.id) && trace.chainSet.has(n.parent);
      if (isTraced) { color = '#0891b2'; width = 3.2; opacity = 1; dash = '6,4'; cls = ' class="edge-traced"'; }
      paths += '<path d="' + elbow(x1, y1, x2, y2) + '" stroke="' + color + '" stroke-width="' + width + '" fill="none" stroke-dasharray="' + dash + '" opacity="' + opacity + '"' + cls + '/>';
    }
    if (n.altParent && state.byId.has(n.altParent)) {
      const ap = state.pos.get(n.altParent);
      if (ap && isVisible(n.altParent)) {
        const x1 = ap.x + ap.w, y1 = ap.y + ap.h / 2;
        const x2 = cp.x, y2 = cp.y + cp.h / 2;
        let color = EDGE_STANDBY_COLOR, width = 1.8, dash = '2,4', opacity = 0.6, cls = '';
        if (state.mode === 'sim' && statusOf(n.id) === 'genset') { color = '#f59e0b'; width = 3.4; opacity = 1; dash = '7,3'; cls = ' class="edge-sim-genset"'; }
        if (legendFilter) {
          const cat = edgeCategory(n, true);
          if (cat === legendFilter) { color = EDGE_STANDBY_COLOR; width = 3.6; opacity = 1; cls = ' class="edge-legend-active"'; }
          else { opacity = 0.08; cls = ''; }
        }
        const isTraced = trace && trace.chainSet.has(n.id) && trace.chainSet.has(n.altParent);
        if (isTraced) { color = '#0891b2'; width = 3.2; opacity = 1; dash = '6,4'; cls = ' class="edge-traced"'; }
        paths += '<path d="M ' + x1 + ' ' + y1 + ' C ' + (x1 + 36) + ' ' + y1 + ', ' + (x2 - 36) + ' ' + y2 + ', ' + x2 + ' ' + y2 + '" stroke="' + color + '" stroke-width="' + width + '" fill="none" stroke-dasharray="' + dash + '"' + cls + ' opacity="' + opacity + '"/>';
      }
    }
  });
  svg.innerHTML = paths;
}

// ======================================================================
// TRANSFORM / NAVIGASI HALAMAN / SWAPPING PAGE
// ======================================================================
function applyTransform() {
  document.getElementById('viewport').style.transform =
    'translate(' + state.panX + 'px,' + state.panY + 'px) scale(' + state.scale + ')';
}

function fitToScreen() {
  const wrap = document.getElementById('canvasWrap');
  const availW = wrap.clientWidth - 40, availH = wrap.clientHeight - 40;
  const s = Math.min(availW / state.canvasW, availH / state.canvasH, 1.1);
  state.scale = Math.max(s, 0.18);
  state.panX = (wrap.clientWidth - state.canvasW * state.scale) / 2;
  state.panY = 30;
  applyTransform();
  renderMinimap();
}

function renderPageTabs() {
  const container = document.getElementById('sourceTabs');
  let html = '';
  PAGE_ORDER.forEach(key => {
    const page = PAGE_DEFINITIONS[key];
    const activeClass = key === state.activePage ? ' active' : '';
    const deleteBtn = (PAGE_ORDER.length > 1 && state.appMode === 'editor')
      ? `<span class="btn-del-tab" data-page="${key}" title="Hapus Halaman Ini">&times;</span>`
      : '';
    html += `<div class="source-tab${activeClass}" data-page="${key}">
              <span>${page ? page.label : key}</span>${deleteBtn}
             </div>`;
  });

  if (state.appMode === 'editor') {
    html += `<button class="btn-add-page" id="btnOpenPageModal">+ Halaman Baru</button>`;
  }
  container.innerHTML = html;

  container.querySelectorAll('.source-tab').forEach(tab => {
    tab.onclick = (e) => {
      if (e.target.classList.contains('btn-del-tab')) {
        e.stopPropagation();
        deletePage(e.target.dataset.page);
        return;
      }
      switchPage(tab.dataset.page);
    };
  });

  const btnOpen = document.getElementById('btnOpenPageModal');
  if (btnOpen) btnOpen.onclick = openPageModal;

  const currentMeta = PAGE_DEFINITIONS[state.activePage];
  document.getElementById('sourcePageMeta').textContent = currentMeta ? currentMeta.summary : '';
}

function switchPage(pageKey) {
  state.activePage = pageKey;
  NODES = buildNodesForPage(pageKey);
  SCENARIOS = buildScenariosForPage(NODES);
  refreshScenarioOptions();

  state.selectedId = null;
  state.collapsed.clear();
  state.trace = null;
  state.faultId = null;

  buildIndex();
  computeLayout();
  renderPageTabs();
  renderAll();

  if (NODES.length > 0) {
    selectNode(NODES[0].id);
  } else {
    document.getElementById('assetBody').innerHTML = '<div class="emptystate">Halaman ini belum memiliki node. Gunakan mode Editor untuk membuat node pertama.</div>';
  }
  fitToScreen();
}

function deletePage(pageKey) {
  if (state.appMode !== 'editor') return;
  const page = PAGE_DEFINITIONS[pageKey];
  const pageTitle = page ? page.label : pageKey;
  if (!confirm(`Apakah Anda yakin ingin menghapus halaman "${pageTitle}" beserta seluruh node di dalamnya?`)) {
    return;
  }

  delete PAGE_DEFINITIONS[pageKey];
  delete PAGE_NODES_CACHE[pageKey];
  PAGE_ORDER = PAGE_ORDER.filter(k => k !== pageKey);

  if (state.activePage === pageKey) {
    switchPage(PAGE_ORDER[0]);
  } else {
    renderPageTabs();
  }
}

// ======================================================================
// SELECTION / SIDEBAR INFO
// ======================================================================
function buildingOf(n) {
  const src = (n.note || '') + ' ' + n.name;
  const m = src.match(/Gedung\s?\d+[A-Za-z]?/i) || src.match(/Gd\.?\s?\d+[A-Za-z]?/i);
  if (m) return m[0].replace(/^Gd\.?/i, 'Gedung ');
  if (n.name.match(/Gardu|Power House/i)) return n.name;
  return '-';
}

function selectNode(id) {
  state.selectedId = id;
  renderNodes();
  const n = state.byId.get(id);
  if (!n) {
    document.getElementById('assetBody').innerHTML = '<div class="emptystate">Klik salah satu aset pada kanvas untuk menampilkan detailnya.</div>';
    return;
  }
  const parentName = n.parent ? (state.byId.get(n.parent) ? state.byId.get(n.parent).name : '-') : '-';
  const altName = n.altParent ? (state.byId.get(n.altParent) ? state.byId.get(n.altParent).name : null) : null;
  const kids = (state.childrenOf.get(id) || []).map(c => state.byId.get(c) ? state.byId.get(c).name : c);
  const st = statusOf(id);
  const stLabel = st === 'padam' ? 'Padam / Mati Listrik' : st === 'genset' ? 'Menyala Pakai Genset' : 'Menyala Normal';
  const stColor = st === 'padam' ? '#ef4444' : st === 'genset' ? '#f59e0b' : '#22c55e';

  const verifiedLabel = n.verified !== false ? '✅ Terverifikasi' : '⚠️ Perlu Verifikasi Lapangan (!)';
  const verifiedColor = n.verified !== false ? '#22c55e' : '#f59e0b';
  const critLabel = n.critical === true ? '⚡ Beban Kritikal' : n.critical === false ? '🏢 Beban Non-Kritikal' : 'Standar';

  let html = '';
  html += kvRow('Nama Aset', n.name);
  html += '<div class="kv"><span class="k">Level</span><span class="v"><span class="badgechip" style="background:' + levelColorOf(n) + '22;color:' + levelColorOf(n) + '">Level ' + levelOf(n) + ' &middot; ' + LEVEL_NAME[levelOf(n)] + '</span></span></div>';
  html += kvRow('Halaman Sumber', PAGE_DEFINITIONS[state.activePage] ? PAGE_DEFINITIONS[state.activePage].label : state.activePage);
  html += kvRow('Cabang', n.branchNos && n.branchNos.length ? n.branchNos.map(x => 'Cabang ' + x).join(', ') : 'Pusat');
  html += kvRow('Jenis Aset', (TYPE_META[n.type] || {}).name || n.type);
  if (n.capacity) html += kvRow('Kapasitas', n.capacity);
  html += kvRow('Lokasi / Gedung', buildingOf(n));
  html += kvRow('Incoming', parentName + (altName ? (' + backup: ' + altName) : ''));
  html += kvRow('Outgoing', kids.length ? (kids.length + ' panel turunan') : 'Beban akhir (leaf)');
  html += kvRow('Sumber', (n.supply || '-') + (n.voltage ? (' &middot; ' + n.voltage) : ''));
  html += kvRow('Panel Parent', parentName);
  html += kvRow('Panel Child', kids.slice(0, 4).join(', ') + (kids.length > 4 ? ', ...' : '') || '-');
  html += kvRow('Klasifikasi Beban', critLabel);
  html += '<div class="kv"><span class="k">Verifikasi</span><span class="v"><span class="badgechip" style="background:' + verifiedColor + '22;color:' + verifiedColor + '">' + verifiedLabel + '</span></span></div>';
  html += '<div class="kv"><span class="k">Status</span><span class="v"><span class="badgechip" style="background:' + stColor + '22;color:' + stColor + '">' + stLabel + '</span></span></div>';
  if (n.note) html += '<div style="font-size:11px;color:var(--text-1);margin-top:8px;line-height:1.5;background:#f8fafc;padding:6px 8px;border-radius:6px;border:1px solid var(--line-soft);"><b>Catatan:</b> ' + n.note + '</div>';
  if (n.verified === false) html += '<div class="warnflag">&#9888; Data titik ini belum terkonfirmasi penuh pada dokumen penyederhanaan &mdash; cocokkan dengan SLD utama/lapangan.</div>';

  const upActive = state.trace && state.trace.dir === 'up' && state.trace.originId === id;
  const downActive = state.trace && state.trace.dir === 'down' && state.trace.originId === id;

  if (state.appMode === 'editor') {
    html += '<div style="display:flex;gap:6px;margin-top:10px;flex-wrap:wrap;">';
    html += '<button class="mini-btn success" style="margin-top:0;flex:1;" id="btnAddChild">+ Child</button>';
    html += '<button class="mini-btn secondary" style="margin-top:0;flex:1;" id="btnEditNode">&#9998; Edit</button>';
    html += '<button class="mini-btn secondary" style="margin-top:0;flex:1;" id="btnCopyNode">&#128203; Copy</button>';
    if (NODE_CLIPBOARD) {
      html += '<button class="mini-btn success" style="margin-top:0;flex:1;" id="btnPasteNode">&#128203; Paste Here</button>';
    }
    if (n.parent) {
      html += '<button class="mini-btn danger" style="margin-top:0;flex:1;" id="btnDeleteNode">&#128465; Hapus</button>';
    }
    html += '</div>';
  }

  html += '<button class="mini-btn' + (upActive ? ' active-trace' : '') + '" id="btnTraceUp">' + (upActive ? '&#9632; Hentikan Trace Upstream' : '&#8593; Trace Upstream (ke Sumber Listrik)') + '</button>';
  html += '<button class="mini-btn' + (downActive ? ' active-trace' : '') + '" id="btnTraceDown">' + (downActive ? '&#9632; Hentikan Trace Downstream' : '&#8595; Trace Downstream (Semua Panel di Bawahnya)') + '</button>';
  html += '<button class="mini-btn secondary" id="btnSimHere">&#9889; Simulasikan Gangguan di Panel Ini</button>';

  document.getElementById('assetBody').innerHTML = html;

  if (state.appMode === 'editor') {
    document.getElementById('btnAddChild').onclick = () => openNodeModal('add', id);
    document.getElementById('btnEditNode').onclick = () => openNodeModal('edit', id);
    document.getElementById('btnCopyNode').onclick = () => copyNodeTree(id);
    if (NODE_CLIPBOARD) {
      document.getElementById('btnPasteNode').onclick = () => pasteNodeTree(id);
    }
    if (n.parent) {
      document.getElementById('btnDeleteNode').onclick = () => deleteNode(id);
    }
  }

  document.getElementById('btnTraceUp').onclick = () => traceUpstream(id);
  document.getElementById('btnTraceDown').onclick = () => traceDownstream(id);
  document.getElementById('btnSimHere').onclick = () => {
    state.mode = 'sim'; state.faultId = id;
    document.getElementById('scenarioSel').value = SCENARIOS.find(s => s.id === id) ? id : 'NONE';
    setModeUI();
    runSimulation(id);
    renderAll();
    showSimPanel();
  };
  panToNode(id);
}

// ======================================================================
// COPY & PASTE NODE LOGIC
// ======================================================================
function copyNodeTree(rootId) {
  const rootNode = state.byId.get(rootId);
  if (!rootNode) return;

  const collected = [];
  function collect(id) {
    const node = state.byId.get(id);
    if (!node) return;
    collected.push(JSON.parse(JSON.stringify(node)));
    (state.childrenOf.get(id) || []).forEach(childId => collect(childId));
  }
  collect(rootId);

  NODE_CLIPBOARD = {
    sourcePage: state.activePage,
    rootId: rootId,
    nodes: collected
  };

  alert(`Node "${rootNode.name}" (${collected.length} item) disalin ke clipboard.`);
  if (state.selectedId) selectNode(state.selectedId);
}

function openPasteModal() {
  if (state.appMode !== 'editor') return;
  if (!NODE_CLIPBOARD) { alert('Clipboard kosong! Copy node terlebih dahulu.'); return; }

  const selectParent = document.getElementById('pasteParentSelect');
  let parentOptionsHtml = '';
  if (NODES.length === 0) {
    parentOptionsHtml = '<option value="">-- Root Node Utama --</option>';
  } else {
    NODES.forEach(n => {
      const selected = n.id === state.selectedId ? 'selected' : '';
      parentOptionsHtml += `<option value="${n.id}" ${selected}>${n.name} (Level ${levelOf(n)})</option>`;
    });
  }
  selectParent.innerHTML = parentOptionsHtml;
  document.getElementById('pasteModal').classList.add('open');
}

function closePasteModal() {
  document.getElementById('pasteModal').classList.remove('open');
}

function pasteNodeTree(targetParentId = null) {
  if (state.appMode !== 'editor' || !NODE_CLIPBOARD) return;

  const destinationParentId = targetParentId || document.getElementById('pasteParentSelect').value || null;
  const idMap = new Map();
  const now = Date.now();
  let seq = 0;

  NODE_CLIPBOARD.nodes.forEach(oldNode => {
    const newId = state.activePage.toUpperCase() + '-COPY-' + (now + (seq++)) + '-' + slugId(oldNode.name);
    idMap.set(oldNode.id, newId);
  });

  const targetParent = destinationParentId ? state.byId.get(destinationParentId) : null;

  NODE_CLIPBOARD.nodes.forEach(oldNode => {
    const isRootOfClipboard = oldNode.id === NODE_CLIPBOARD.rootId;
    const newParentId = isRootOfClipboard ? destinationParentId : idMap.get(oldNode.parent);

    const newNode = {
      ...JSON.parse(JSON.stringify(oldNode)),
      id: idMap.get(oldNode.id),
      parent: newParentId,
      altParent: oldNode.altParent && idMap.has(oldNode.altParent) ? idMap.get(oldNode.altParent) : null,
      pageKey: state.activePage,
      branchNos: targetParent ? targetParent.branchNos : (oldNode.branchNos || [1])
    };

    NODES.push(newNode);
  });

  PAGE_NODES_CACHE[state.activePage] = NODES;
  SCENARIOS = buildScenariosForPage(NODES);
  refreshScenarioOptions();

  buildIndex();
  computeLayout();
  renderAll();

  const newRootId = idMap.get(NODE_CLIPBOARD.rootId);
  closePasteModal();
  selectNode(newRootId);
}

function kvRow(k, v) {
  return '<div class="kv"><span class="k">' + k + '</span><span class="v">' + v + '</span></div>';
}

function setTrace(chain, dir, originId) {
  state.trace = { chainSet: new Set(chain), dir, originId };
  if (state.legendFilter) {
    state.legendFilter = null;
    document.querySelectorAll('.legend-clickable').forEach(r => r.classList.remove('active'));
  }
  updateTraceBanner();
  renderAll();
}
function clearTrace() {
  state.trace = null;
  updateTraceBanner();
  renderAll();
  if (state.selectedId) selectNode(state.selectedId);
}
function updateSpotlightBanner() {
  const banner = document.getElementById('traceBanner');
  if (state.trace) {
    const n = state.byId.get(state.trace.originId);
    const dirLabel = state.trace.dir === 'up' ? 'Upstream (ke sumber)' : 'Downstream (ke beban)';
    document.getElementById('traceBannerText').innerHTML = '<span class="blinkdot"></span>Penyorotan aktif: <b>' + dirLabel + '</b> dari <b>' + (n ? n.name : '') + '</b>';
    banner.style.display = 'flex';
  } else if (state.legendFilter) {
    document.getElementById('traceBannerText').innerHTML = '<span class="blinkdot"></span>Menyorot jalur: <b>' + LEGEND_LABELS[state.legendFilter] + '</b>';
    banner.style.display = 'flex';
  } else {
    banner.style.display = 'none';
  }
}
function updateTraceBanner() { updateSpotlightBanner(); }

function traceUpstream(id) {
  if (state.trace && state.trace.dir === 'up' && state.trace.originId === id) { clearTrace(); return; }
  const chain = [];
  let cur = state.byId.get(id);
  let guard = 0;
  while (cur) { chain.push(cur.id); if (!cur.parent) break; cur = state.byId.get(cur.parent); guard++; if (guard > 40) break; }
  setTrace(chain, 'up', id);
  selectNode(id);
}

function traceDownstream(id) {
  if (state.trace && state.trace.dir === 'down' && state.trace.originId === id) { clearTrace(); return; }
  const chain = [id];
  let changed = false;
  function walk(nid) {
    if (state.collapsed.has(nid)) { state.collapsed.delete(nid); changed = true; }
    (state.childrenOf.get(nid) || []).forEach(c => { chain.push(c); walk(c); });
  }
  walk(id);
  if (changed) computeLayout();
  setTrace(chain, 'down', id);
  selectNode(id);
}

function panToNode(id) {
  const p = state.pos.get(id);
  if (!p) return;
  const wrap = document.getElementById('canvasWrap');
  state.panX = wrap.clientWidth / 2 - (p.x + p.w / 2) * state.scale;
  state.panY = wrap.clientHeight / 2 - (p.y + p.h / 2) * state.scale;
  applyTransform();
  renderMinimap();
}

// ======================================================================
// SIMULATION PANEL
// ======================================================================
function showSimPanel() {
  document.getElementById('simResultPanel').style.display = 'block';
  const sc = SCENARIOS.find(s => s.id === state.faultId);
  const label = sc ? sc.label : (state.byId.get(state.faultId) ? ('Gangguan di ' + state.byId.get(state.faultId).name) : '-');
  const s = simulationSummary();
  let html = '';
  html += '<div class="kv"><span class="k">Skenario</span><span class="v" style="color:#fca5a5;">' + label + '</span></div>';
  html += '<div style="margin-top:10px;font-size:10.5px;text-transform:uppercase;letter-spacing:.05em;color:var(--text-2);">Ringkasan Dampak</div>';
  html += impactRow('#ef4444', 'Padam / Mati Listrik', s.padam);
  html += impactRow('#f59e0b', 'Menyala Pakai Genset', s.genset);
  html += impactRow('#22c55e', 'Menyala Normal', s.normal);
  html += '<div class="kv" style="margin-top:6px;"><span class="k">Total Beban Terdampak</span><span class="v">' + s.impactedPct + ' %</span></div>';

  if (s.totalCrit || s.totalNonCrit) {
    const critPct = s.totalCrit ? (((s.critPadam + s.critGenset) / s.totalCrit) * 100).toFixed(0) : 0;
    const nonCritPct = s.totalNonCrit ? (((s.nonCritPadam + s.nonCritGenset) / s.totalNonCrit) * 100).toFixed(0) : 0;
    html += '<div style="margin-top:10px;font-size:11px;">Beban Kritikal Terdampak <b>' + (s.critPadam + s.critGenset) + ' / ' + s.totalCrit + '</b> (' + critPct + '%)</div>';
    html += '<div class="bar"><div style="width:' + critPct + '%;background:#ef4444;"></div></div>';
    html += '<div style="margin-top:8px;font-size:11px;">Beban Non-Kritikal Terdampak <b>' + (s.nonCritPadam + s.nonCritGenset) + ' / ' + s.totalNonCrit + '</b> (' + nonCritPct + '%)</div>';
    html += '<div class="bar"><div style="width:' + nonCritPct + '%;background:#f59e0b;"></div></div>';
  }

  const affected = [];
  state.byId.forEach((n, id) => { const st = state.status.get(id); if (st === 'padam' || st === 'genset') affected.push({ n, st }); });
  html += '<div class="notelist" style="margin-top:12px;">';
  affected.slice(0, 60).forEach(a => {
    const c = a.st === 'padam' ? '#ef4444' : '#f59e0b';
    html += '<div><span class="dot" style="background:' + c + ';display:inline-block;width:7px;height:7px;border-radius:50%;margin-right:6px;"></span>' + a.n.name + ' <span style="color:var(--text-2);">(' + (a.st === 'padam' ? 'mati listrik' : 'pakai genset') + ')</span></div>';
  });
  html += '</div>';

  document.getElementById('simBody').innerHTML = html;
}
function impactRow(color, label, val) {
  return '<div class="impact-row"><span><span class="dot" style="background:' + color + '"></span>' + label + '</span><b>' + val + ' Panel</b></div>';
}

// ======================================================================
// MINIMAP
// ======================================================================
function renderMinimap() {
  const cv = document.getElementById('minimapCanvas');
  const ctx = cv.getContext && cv.getContext('2d');
  if (!ctx) return;
  const w = cv.clientWidth || 200, h = 100;
  cv.width = w; cv.height = h;
  ctx.clearRect(0, 0, w, h);

  if (!NODES || NODES.length === 0) return;

  const sx = w / state.canvasW, sy = h / state.canvasH;
  const s = Math.min(sx, sy);
  const offX = (w - state.canvasW * s) / 2, offY = (h - state.canvasH * s) / 2;

  NODES.forEach(n => {
    if (!isVisible(n.id)) return;
    const p = state.pos.get(n.id);
    if (!p) return;
    let color = levelColorOf(n);
    if (state.mode === 'sim') {
      const st = statusOf(n.id);
      if (st === 'padam') color = '#ef4444'; else if (st === 'genset') color = '#f59e0b';
    }
    ctx.fillStyle = color;
    ctx.fillRect(offX + p.x * s, offY + p.y * s, Math.max(2, p.w * s), Math.max(2, p.h * s));
  });

  const wrap = document.getElementById('canvasWrap');
  const vx = -state.panX / state.scale, vy = -state.panY / state.scale;
  const vw = wrap.clientWidth / state.scale, vh = wrap.clientHeight / state.scale;
  ctx.strokeStyle = '#2563eb'; ctx.lineWidth = 1.2;
  ctx.strokeRect(offX + vx * s, offY + vy * s, vw * s, vh * s);
}

// ======================================================================
// STATS BAR
// ======================================================================
function renderStats() {
  const count = (fn) => NODES.filter(fn).length;
  const currentDef = PAGE_DEFINITIONS[state.activePage];
  const branchCount = (currentDef && currentDef.routes) ? new Set(currentDef.routes.map(r => r.no)).size : 0;
  const items = [
    { icon: '&#9889;', label: 'Level 1 &middot; Source', val: count(n => levelOf(n) === 1), color: LEVEL_COLOR[1] },
    { icon: '&#128268;', label: 'Level 2 &middot; Medium Voltage', val: count(n => levelOf(n) === 2), color: LEVEL_COLOR[2] },
    { icon: '&#127981;', label: 'Level 3 &middot; Gardu/Substation', val: count(n => levelOf(n) === 3), color: LEVEL_COLOR[3] },
    { icon: '&#128230;', label: 'Level 4 &middot; LVMDP/Flywheel', val: count(n => levelOf(n) === 4), color: LEVEL_COLOR[4] },
    { icon: '&#128737;&#65039;', label: 'Level 5 &middot; Main Distribution', val: count(n => levelOf(n) === 5), color: LEVEL_COLOR[5] },
    { icon: '&#127970;', label: 'Level 6 &middot; Sub Distribution', val: count(n => levelOf(n) === 6), color: LEVEL_COLOR[6] },
    { icon: '&#9881;&#65039;', label: 'Level 7 &middot; Gedung/Beban', val: count(n => levelOf(n) === 7), color: LEVEL_COLOR[7] },
    { icon: '&#8644;', label: 'Jumlah Cabang', val: branchCount, color: '#0891b2' },
    { icon: '&#128230;', label: 'Total Aset Halaman', val: NODES.length, color: '#64748b' },
    { icon: '&#9888;&#65039;', label: 'Perlu Verifikasi', val: count(n => n.verified === false), color: '#f59e0b' },
  ];
  document.getElementById('statsbar').innerHTML = items.map(it =>
    '<div class="stat"><div class="si" style="background:' + it.color + '22;color:' + it.color + '">' + it.icon + '</div>' +
    '<div><div class="sl">' + it.label + '</div><div class="sv">' + it.val + '</div></div></div>'
  ).join('');
}

// ======================================================================
// SEARCH
// ======================================================================
function setupSearch() {
  const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { results.style.display = 'none'; return; }
    const matches = NODES.filter(n => n.name.toLowerCase().includes(q) || n.id.toLowerCase().includes(q)).slice(0, 12);
    if (!matches.length) { results.innerHTML = '<div>Tidak ditemukan</div>'; results.style.display = 'block'; return; }
    results.innerHTML = matches.map(n => '<div data-id="' + n.id + '"><b>' + n.name + '</b> &middot; ' + (TYPE_META[n.type] || {}).name + '</div>').join('');
    results.style.display = 'block';
    results.querySelectorAll('div[data-id]').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.dataset.id;
        expandAncestors(id);
        computeLayout(); renderAll();
        selectNode(id);
        results.style.display = 'none';
        input.value = state.byId.get(id).name;
      });
    });
  });
  document.addEventListener('click', (e) => { if (!e.target.closest('#searchWrap')) results.style.display = 'none'; });
}
function expandAncestors(id) {
  let cur = state.byId.get(id);
  while (cur && cur.parent) { state.collapsed.delete(cur.parent); cur = state.byId.get(cur.parent); }
}

// ======================================================================
// HELP / FAQ POPUP MODAL HANDLER
// ======================================================================
function openHelpModal() {
  document.getElementById('helpOverlay').classList.add('open');
}

function closeHelpModal() {
  document.getElementById('helpOverlay').classList.remove('open');
}

function toggleHelpModal() {
  const overlay = document.getElementById('helpOverlay');
  if (overlay.classList.contains('open')) {
    closeHelpModal();
  } else {
    openHelpModal();
  }
}

function setupHelpModalEvents() {
  const btnHelp = document.getElementById('btnHelp');
  const closeHeader = document.getElementById('closeHelpHeader');
  const closeFooter = document.getElementById('closeHelpFooter');
  const overlay = document.getElementById('helpOverlay');

  if (btnHelp) btnHelp.onclick = toggleHelpModal;
  if (closeHeader) closeHeader.onclick = closeHelpModal;
  if (closeFooter) closeFooter.onclick = closeHelpModal;

  overlay.onclick = (e) => {
    if (e.target === overlay) closeHelpModal();
  };
}

// ======================================================================
// MODAL TAMBAH HALAMAN MINDMAP BARU
// ======================================================================
function openPageModal() {
  if (state.appMode !== 'editor') return;
  document.getElementById('pageTitle').value = '';
  document.getElementById('pageModal').classList.add('open');
  setTimeout(() => document.getElementById('pageTitle').focus(), 50);
}
function closePageModal() {
  document.getElementById('pageModal').classList.remove('open');
}
function saveNewPage() {
  if (state.appMode !== 'editor') return;
  const title = document.getElementById('pageTitle').value.trim();
  const supply = document.getElementById('pageSupply').value;
  if (!title) { alert('Judul halaman mindmap tidak boleh kosong!'); return; }

  const newKey = 'page_' + Date.now();
  PAGE_DEFINITIONS[newKey] = {
    label: title,
    shortLabel: title,
    supply: supply,
    summary: 'Halaman Mindmap: ' + title,
    verify: [],
    notes: {},
    routes: []
  };
  PAGE_ORDER.push(newKey);
  PAGE_NODES_CACHE[newKey] = [];
  closePageModal();
  switchPage(newKey);
}

// ======================================================================
// EDIT & ADD NODE LOGIC
// ======================================================================
function setupEditModal() {
  const select = document.getElementById('modalType');
  select.innerHTML = Object.keys(TYPE_META).map(key => `<option value="${key}">${TYPE_META[key].name}</option>`).join('');

  document.getElementById('btnCancelNode').onclick = closeNodeModal;
  document.getElementById('btnCloseModalHeader').onclick = closeNodeModal;
  document.getElementById('btnSaveNode').onclick = saveNodeModal;

  const modalOverlay = document.getElementById('nodeModal');
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeNodeModal();
  });

  document.getElementById('btnCancelPage').onclick = closePageModal;
  document.getElementById('btnClosePageModalHeader').onclick = closePageModal;
  document.getElementById('btnSavePage').onclick = saveNewPage;
  document.getElementById('btnCreateFirstNode').onclick = () => openNodeModal('add', null);

  document.getElementById('btnCancelPaste').onclick = closePasteModal;
  document.getElementById('btnClosePasteModalHeader').onclick = closePasteModal;
  document.getElementById('btnConfirmPaste').onclick = () => pasteNodeTree();
}

function getDescendantIds(startId) {
  const descendants = new Set();
  function walk(id) {
    descendants.add(id);
    (state.childrenOf.get(id) || []).forEach(childId => walk(childId));
  }
  walk(startId);
  return descendants;
}

function openNodeModal(mode, targetId) {
  if (state.appMode !== 'editor') return;
  state.modalMode = mode;
  state.editTargetId = targetId;
  const overlay = document.getElementById('nodeModal');
  const title = document.getElementById('modalTitle');
  const inputName = document.getElementById('modalName');
  const selectType = document.getElementById('modalType');
  const selectParent = document.getElementById('modalParent');
  const selectAltParent = document.getElementById('modalAltParent');
  const selectSupply = document.getElementById('modalSupply');
  const selectVoltage = document.getElementById('modalVoltage');
  const inputCap = document.getElementById('modalCapacity');
  const selectVerified = document.getElementById('modalVerified');
  const selectCritical = document.getElementById('modalCritical');
  const inputNote = document.getElementById('modalNote');
  const btnDelete = document.getElementById('btnModalDelete');

  const targetNode = targetId ? state.byId.get(targetId) : null;
  const excludeIds = (mode === 'edit' && targetId) ? getDescendantIds(targetId) : new Set();

  let parentOptionsHtml = '';
  if (NODES.length === 0) {
    parentOptionsHtml = '<option value="">-- Root Source Node Utama --</option>';
  } else {
    NODES.forEach(n => {
      if (!excludeIds.has(n.id)) {
        parentOptionsHtml += `<option value="${n.id}">${n.name} (Level ${levelOf(n)})</option>`;
      }
    });
  }
  selectParent.innerHTML = parentOptionsHtml;

  let altOptionsHtml = '<option value="">-- Tidak Ada Jalur Cadangan --</option>' + (NODES.length > 0 ? parentOptionsHtml : '');
  selectAltParent.innerHTML = altOptionsHtml;

  if (mode === 'add') {
    title.textContent = targetNode ? 'Tambah Child Node Baru' : 'Tambah Node Utama (Root)';
    inputName.value = '';
    selectType.value = targetNode ? 'equipment' : 'source';
    if (targetNode) {
      selectParent.value = targetNode.id;
      selectSupply.value = targetNode.supply || (PAGE_DEFINITIONS[state.activePage] ? PAGE_DEFINITIONS[state.activePage].supply : 'PLN');
      selectVoltage.value = targetNode.voltage || 'LV';
      selectParent.disabled = false;
    } else {
      selectParent.value = '';
      selectParent.disabled = true;
      selectSupply.value = PAGE_DEFINITIONS[state.activePage] ? PAGE_DEFINITIONS[state.activePage].supply : 'PLN';
      selectVoltage.value = 'MV';
    }
    selectAltParent.value = '';
    inputCap.value = '';
    selectVerified.value = 'true';
    selectCritical.value = 'null';
    inputNote.value = '';
    btnDelete.style.display = 'none';
  } else {
    title.textContent = 'Edit Informasi Aset';
    if (targetNode) {
      inputName.value = targetNode.name || '';
      selectType.value = targetNode.type || 'equipment';
      if (targetNode.parent === null) {
        selectParent.innerHTML = '<option value="">-- Root Source Node (Pusat) --</option>';
        selectParent.value = '';
        selectParent.disabled = true;
        btnDelete.style.display = 'none';
      } else {
        selectParent.disabled = false;
        selectParent.value = targetNode.parent;
        btnDelete.style.display = 'inline-flex';
        btnDelete.onclick = () => {
          closeNodeModal();
          deleteNode(targetId);
        };
      }
      selectAltParent.value = targetNode.altParent || '';
      selectSupply.value = targetNode.supply || 'PLN';
      selectVoltage.value = targetNode.voltage || 'LV';
      inputCap.value = targetNode.capacity || '';
      selectVerified.value = targetNode.verified !== false ? 'true' : 'false';
      selectCritical.value = targetNode.critical === true ? 'true' : targetNode.critical === false ? 'false' : 'null';
      inputNote.value = targetNode.note || '';
    }
  }
  overlay.classList.add('open');
  setTimeout(() => inputName.focus(), 50);
}

function closeNodeModal() {
  document.getElementById('nodeModal').classList.remove('open');
}

function saveNodeModal() {
  if (state.appMode !== 'editor') return;
  const name = document.getElementById('modalName').value.trim();
  const type = document.getElementById('modalType').value;
  const parentId = document.getElementById('modalParent').value || null;
  const altParentId = document.getElementById('modalAltParent').value || null;
  const supply = document.getElementById('modalSupply').value;
  const voltage = document.getElementById('modalVoltage').value;
  const capacity = document.getElementById('modalCapacity').value.trim();
  const verified = document.getElementById('modalVerified').value === 'true';
  const critVal = document.getElementById('modalCritical').value;
  const critical = critVal === 'true' ? true : critVal === 'false' ? false : null;
  const note = document.getElementById('modalNote').value.trim();

  if (!name) { alert('Nama aset tidak boleh kosong!'); return; }

  if (state.modalMode === 'add') {
    const parentNode = parentId ? state.byId.get(parentId) : (state.editTargetId ? state.byId.get(state.editTargetId) : null);
    const newId = state.activePage.toUpperCase() + '-' + Date.now().toString().slice(-6) + '-' + slugId(name);
    const newNode = {
      id: newId,
      name: name,
      parent: parentNode ? parentNode.id : null,
      altParent: altParentId !== parentId ? altParentId : null,
      pageKey: state.activePage,
      branchNos: parentNode ? parentNode.branchNos : [1],
      type: type,
      supply: supply,
      voltage: voltage,
      critical: critical,
      verified: verified,
      note: note,
      capacity: capacity
    };
    NODES.push(newNode);
  } else if (state.modalMode === 'edit') {
    const n = state.byId.get(state.editTargetId);
    if (n) {
      n.name = name;
      n.type = type;
      if (n.parent !== null) {
        n.parent = parentId;
        const pNode = state.byId.get(parentId);
        if (pNode && pNode.branchNos) n.branchNos = pNode.branchNos;
      }
      n.altParent = altParentId !== n.parent ? altParentId : null;
      n.supply = supply;
      n.voltage = voltage;
      n.capacity = capacity;
      n.verified = verified;
      n.critical = critical;
      n.note = note;
    }
  }

  PAGE_NODES_CACHE[state.activePage] = NODES;
  SCENARIOS = buildScenariosForPage(NODES);
  refreshScenarioOptions();

  buildIndex();
  computeLayout();
  renderAll();

  const activeId = state.modalMode === 'add' ? NODES[NODES.length - 1].id : state.editTargetId;
  selectNode(activeId);
  closeNodeModal();
}

function deleteNode(id) {
  if (state.appMode !== 'editor') return;
  const n = state.byId.get(id);
  if (!n || !n.parent) return;

  if (confirm(`Apakah Anda yakin ingin menghapus aset "${n.name}" beserta seluruh cabang turunan di bawahnya?`)) {
    const toDelete = new Set();
    function collectDescendants(nid) {
      toDelete.add(nid);
      (state.childrenOf.get(nid) || []).forEach(childId => collectDescendants(childId));
    }
    collectDescendants(id);

    NODES = NODES.filter(node => !toDelete.has(node.id));
    PAGE_NODES_CACHE[state.activePage] = NODES;

    const parentId = n.parent;
    state.selectedId = null;
    SCENARIOS = buildScenariosForPage(NODES);
    refreshScenarioOptions();

    buildIndex();
    computeLayout();
    renderAll();
    if (parentId) selectNode(parentId);
  }
}

// ======================================================================
// FITUR: VIEW MODE & EDITOR MODE & PERSISTENSI SAVE DATA
// ======================================================================
function setAppMode(mode) {
  state.appMode = mode;
  document.body.classList.toggle('editor-mode', mode === 'editor');
  document.body.classList.toggle('view-mode', mode === 'view');

  document.getElementById('btnViewMode').classList.toggle('active', mode === 'view');
  document.getElementById('btnEditMode').classList.toggle('active', mode === 'editor');

  const btnSave = document.getElementById('btnSaveAll');
  if (btnSave) {
    btnSave.style.display = mode === 'editor' ? 'inline-flex' : 'none';
  }

  renderPageTabs();
  if (state.selectedId) selectNode(state.selectedId);
}

function saveAllDataToStorage() {
  if (state.appMode !== 'editor') return;

  PAGE_NODES_CACHE[state.activePage] = NODES;

  const storageData = {
    pageOrder: PAGE_ORDER,
    pageDefinitions: PAGE_DEFINITIONS,
    pageNodesCache: PAGE_NODES_CACHE
  };

  try {
    localStorage.setItem('BIOFARMA_MINDMAP_DATA', JSON.stringify(storageData));
    alert('✅ Seluruh perubahan mindmap dan halaman berhasil disimpan secara permanen!');
  } catch (err) {
    alert('❌ Gagal menyimpan data: ' + err.message);
  }
}

function loadDataFromStorage() {
  const saved = localStorage.getItem('BIOFARMA_MINDMAP_DATA');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed.pageOrder && parsed.pageDefinitions && parsed.pageNodesCache) {
        PAGE_ORDER = parsed.pageOrder;
        PAGE_DEFINITIONS = parsed.pageDefinitions;
        PAGE_NODES_CACHE = parsed.pageNodesCache;
      }
    } catch (e) {
      console.error('Gagal memuat data tersimpan dari LocalStorage', e);
    }
  }
}

// ======================================================================
// FITUR: SHORTCUTS KEYBOARD CONTROL
// ======================================================================
function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    const activeEl = document.activeElement;
    const isEditingText = activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA' || activeEl.tagName === 'SELECT');
    if (isEditingText) return;

    if (e.key === 'Escape') {
      closeHelpModal();
      closeNodeModal();
      closePageModal();
      closePasteModal();
      return;
    }

    if (state.appMode !== 'editor') return;

    if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C')) {
      if (state.selectedId) {
        e.preventDefault();
        copyNodeTree(state.selectedId);
      }
    }

    if ((e.ctrlKey || e.metaKey) && (e.key === 'v' || e.key === 'V')) {
      if (NODE_CLIPBOARD) {
        e.preventDefault();
        if (state.selectedId) {
          pasteNodeTree(state.selectedId);
        } else {
          openPasteModal();
        }
      }
    }

    if (e.key === 'Delete' || e.key === 'Backspace') {
      if (state.selectedId) {
        const n = state.byId.get(state.selectedId);
        if (n && n.parent) {
          e.preventDefault();
          deleteNode(state.selectedId);
        }
      }
    }
  });
}

// ======================================================================
// PAN / ZOOM INTERACTION
// ======================================================================
function setupPanZoom() {
  const wrap = document.getElementById('canvasWrap');
  wrap.addEventListener('mousedown', (e) => {
    if (e.target.closest('.node') || e.target.closest('#emptyCanvasPrompt')) return;
    state.dragging = true;
    state.dragStartX = e.clientX; state.dragStartY = e.clientY;
    state.panStartX = state.panX; state.panStartY = state.panY;
    wrap.style.cursor = 'grabbing';
  });
  window.addEventListener('mousemove', (e) => {
    if (!state.dragging) return;
    state.panX = state.panStartX + (e.clientX - state.dragStartX);
    state.panY = state.panStartY + (e.clientY - state.dragStartY);
    applyTransform();
    renderMinimap();
  });
  window.addEventListener('mouseup', () => {
    state.dragging = false;
    wrap.style.cursor = 'default';
  });
  wrap.addEventListener('wheel', (e) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;
    const newScale = Math.max(0.15, Math.min(2.5, state.scale * zoomFactor));
    const rect = wrap.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    state.panX = mx - (mx - state.panX) * (newScale / state.scale);
    state.panY = my - (my - state.panY) * (newScale / state.scale);
    state.scale = newScale;
    applyTransform();
    renderMinimap();
  }, { passive: false });

  document.getElementById('zoomIn').onclick = () => { state.scale = Math.min(2.5, state.scale * 1.2); applyTransform(); renderMinimap(); };
  document.getElementById('zoomOut').onclick = () => { state.scale = Math.max(0.15, state.scale / 1.2); applyTransform(); renderMinimap(); };
  document.getElementById('zoomFit').onclick = () => fitToScreen();
}

// ======================================================================
// CONTROLS & EVENT BINDINGS
// ======================================================================
function refreshScenarioOptions() {
  const sel = document.getElementById('scenarioSel');
  sel.innerHTML = SCENARIOS.map(s => `<option value="${s.id}">${s.label}</option>`).join('');
}

function setModeUI() {
  document.querySelectorAll('#modeToggle button').forEach(b => {
    b.classList.toggle('active', b.dataset.mode === state.mode);
  });
}

function setupEvents() {
  setupPanZoom();
  setupSearch();
  setupEditModal();
  setupHelpModalEvents();
  setupKeyboardShortcuts();

  document.getElementById('btnViewMode').onclick = () => setAppMode('view');
  document.getElementById('btnEditMode').onclick = () => setAppMode('editor');
  document.getElementById('btnSaveAll').onclick = saveAllDataToStorage;

  document.querySelectorAll('#modeToggle button').forEach(b => {
    b.onclick = () => {
      state.mode = b.dataset.mode;
      setModeUI();
      if (state.mode === 'sim') {
        const sel = document.getElementById('scenarioSel');
        state.faultId = sel.value;
        runSimulation(state.faultId);
        showSimPanel();
      } else {
        document.getElementById('simResultPanel').style.display = 'none';
      }
      renderAll();
    };
  });

  document.getElementById('scenarioSel').onchange = (e) => {
    state.faultId = e.target.value;
    if (state.faultId !== 'NONE') state.mode = 'sim';
    setModeUI();
    runSimulation(state.faultId);
    if (state.mode === 'sim') showSimPanel();
    renderAll();
  };

  document.getElementById('closeSim').onclick = () => {
    document.getElementById('simResultPanel').style.display = 'none';
  };

  document.getElementById('traceBannerStop').onclick = () => {
    clearTrace();
    state.legendFilter = null;
    state.legendTouched = null;
    document.querySelectorAll('.legend-clickable').forEach(r => r.classList.remove('active'));
    updateSpotlightBanner();
    renderAll();
  };

  document.getElementById('btnRefresh').onclick = () => {
    state.mode = 'normal';
    state.faultId = null;
    state.trace = null;
    state.legendFilter = null;
    state.legendTouched = null;
    state.collapsed.clear();
    document.getElementById('scenarioSel').value = 'NONE';
    document.querySelectorAll('.legend-clickable').forEach(r => r.classList.remove('active'));
    setModeUI();
    document.getElementById('simResultPanel').style.display = 'none';
    updateSpotlightBanner();
    computeLayout();
    renderAll();
    fitToScreen();
  };

  document.getElementById('btnDownload').onclick = () => window.print();

  document.getElementById('btnFullscreen').onclick = () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen();
    else if (document.exitFullscreen) document.exitFullscreen();
  };

  // Toggle Collapse Horizontal untuk Unified Floating Card (Minimap + Legend)
  document.getElementById('btnToggleUnified').onclick = () => {
    const card = document.getElementById('unifiedCard');
    card.classList.toggle('minimized-horizontal');
  };

  // Toggle Collapse Horizontal untuk Sidebar Kondisi Aset
  document.getElementById('btnToggleSidebar').onclick = () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('minimized-horizontal');
  };

  document.querySelectorAll('.legend-clickable').forEach(row => {
    row.onclick = () => {
      const filter = row.dataset.filter;
      if (state.legendFilter === filter) {
        state.legendFilter = null;
        state.legendTouched = null;
        row.classList.remove('active');
      } else {
        document.querySelectorAll('.legend-clickable').forEach(r => r.classList.remove('active'));
        state.legendFilter = filter;
        row.classList.add('active');
        state.trace = null;

        const touched = new Set();
        NODES.forEach(n => {
          if (n.parent && edgeCategory(n, false) === filter) {
            touched.add(n.id); touched.add(n.parent);
          }
          if (n.altParent && edgeCategory(n, true) === filter) {
            touched.add(n.id); touched.add(n.altParent);
          }
        });
        state.legendTouched = touched;
      }
      updateSpotlightBanner();
      renderAll();
    };
  });
}

function renderLevelLegend() {
  const body = document.getElementById('levelLegendBody');
  let html = '';
  Object.keys(LEVEL_NAME).forEach(lvl => {
    const color = LEVEL_COLOR[lvl];
    html += `<div class="legend-row"><span class="legend-dot" style="background:${color}"></span>Level ${lvl} &middot; ${LEVEL_NAME[lvl]}</div>`;
  });
  body.innerHTML = html;
}

function renderAll() {
  renderNodes();
  renderEdges();
  renderMinimap();
  renderStats();
}

// ======================================================================
// INISIALISASI APLIKASI
// ======================================================================
window.addEventListener('DOMContentLoaded', () => {
  loadDataFromStorage();

  NODES = buildNodesForPage(state.activePage);
  SCENARIOS = buildScenariosForPage(NODES);

  buildIndex();
  computeLayout();
  renderPageTabs();
  refreshScenarioOptions();
  renderLevelLegend();
  setupEvents();
  setAppMode('view');
  renderAll();

  if (NODES.length > 0) {
    selectNode(NODES[0].id);
  }
  fitToScreen();
});