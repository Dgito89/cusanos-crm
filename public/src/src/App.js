import { useState } from "react";

const LOGO = "data:image/png;base64,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";

const DEFAULT_STAGES = ["Lead","Contacted","Samples Sent","Awaiting Feedback","Proposal","Negotiating","Closed Won","Closed Lost"];
const PRIORITY_OPTIONS = ["High","Medium","Low"];
const STAGE_COLORS = {"Lead":"#D6EAF8","Contacted":"#D5F5E3","Samples Sent":"#FCF3CF","Awaiting Feedback":"#FDEBD0","Proposal":"#E8DAEF","Negotiating":"#FDE8D8","Closed Won":"#1a7a35","Closed Lost":"#922B21"};
const STAGE_TEXT = {"Closed Won":"#fff","Closed Lost":"#fff"};
const PRIORITY_COLORS = {"High":"#FADBD8","Medium":"#FCF3CF","Low":"#D5F5E3"};

const mkOrders = () => [{date:"",order_num:"",product:"",qty:"",status:"",notes:""},{date:"",order_num:"",product:"",qty:"",status:"",notes:""},{date:"",order_num:"",product:"",qty:"",status:"",notes:""}];
const EMPTY_ACCOUNT = {company:"",contact:"",title:"",phone:"",email:"",url:"",distributor:"",units:"",gpo:"",products:"",volume:"",stage:"Lead",last_contact:"",next_followup:"",priority:"Medium",notes:"",orders:mkOrders()};

const SECTION_META = [
  {key:"active",   label:"Active Accounts",                color:"#1a6b35",bg:"#e8f8ee"},
  {key:"traction", label:"Building Traction — In Progress",color:"#7d5a00",bg:"#fef9e7"},
  {key:"opps",     label:"Opportunities — No Contact Yet", color:"#7b4500",bg:"#fef5ec"},
];

const emptyRepData = () => ({active:[],traction:[],opps:[]});

const INITIAL_REPS = {
  frozen: [
    {id:"arnie",  name:"Arnie",   division:"frozen", data: emptyRepData()},
    {id:"brad",   name:"Brad",    division:"frozen", data: {active:[{...EMPTY_ACCOUNT,company:"Chili's",products:"4.5\" HB Bun, Slider Buns",volume:"~143,000 cs/yr",stage:"Samples Sent",notes:"1,800 cs/wk HB | 950 cs/wk Slider. Waiting on R&D samples and pricing.",priority:"High",orders:mkOrders()},{...EMPTY_ACCOUNT,company:"Bread Zeppelin",products:"8\" Baguette",volume:"850,000 baguettes/yr",stage:"Samples Sent",notes:"Getting pricing from Ben E Keith.",priority:"High",distributor:"Ben E Keith",orders:mkOrders()},{...EMPTY_ACCOUNT,company:"Sun Holdings (Taco Bueno)",products:"4\" Brioche Bun",volume:"607,392 buns/yr",stage:"Awaiting Feedback",distributor:"US Foods Dallas & Oklahoma",notes:"Samples sent. Awaiting performance update.",priority:"High",orders:mkOrders()},{...EMPTY_ACCOUNT,company:"Lotaburger",products:"4.5\" & 3.75\" Brioche HB Bun",volume:"6,000,000 buns/yr",units:"80 (NM)",stage:"Samples Sent",notes:"Self-distribution. Samples sent.",priority:"High",orders:mkOrders()},{...EMPTY_ACCOUNT,company:"Brookshires",products:"12\" Hoagie, Focaccia, Challah Brioche, Deli Thin",stage:"Lead",distributor:"GFI via DOT",notes:"1 store → 5 in 3 months → 200+ if successful.",priority:"High",orders:mkOrders()}],traction:[{...EMPTY_ACCOUNT,company:"Dairy Queen",contact:"Sarah Schultz",products:"Brioche Bun upgrade",volume:"30M+ buns",stage:"Lead",notes:"Seeking new supplier within 18 months. Pay $0.18/bun.",priority:"High",orders:mkOrders()},{...EMPTY_ACCOUNT,company:"Charley's",contact:"Ian Snyder",products:"8\" Hoagie",stage:"Contacted",notes:"Difficult to reach. Having problems with Epi.",priority:"High",orders:mkOrders()},{...EMPTY_ACCOUNT,company:"Jason's Deli",contact:"Ed Wahlenmaier",title:"Director of Purchasing",products:"8\" Hoagies, Deli Loafs, Onion Buns",units:"256 (TX)",stage:"Contacted",notes:"Called and emailed multiple times.",priority:"High",orders:mkOrders()}],opps:[{...EMPTY_ACCOUNT,company:"Wingstop",units:"1,534",orders:mkOrders()},{...EMPTY_ACCOUNT,company:"Dickey's BBQ",units:"507",orders:mkOrders()},{...EMPTY_ACCOUNT,company:"Which Wich",units:"438",orders:mkOrders()},{...EMPTY_ACCOUNT,company:"Cinemark Theatre",units:"321",orders:mkOrders()},{...EMPTY_ACCOUNT,company:"Dairy Queen Texas",units:"525",orders:mkOrders()},{...EMPTY_ACCOUNT,company:"Top Golf",units:"71",orders:mkOrders()}]}},
    {id:"george",  name:"George",  division:"frozen", data: emptyRepData()},
    {id:"mervyn",  name:"Mervyn",  division:"frozen", data: {active:[{...EMPTY_ACCOUNT,company:"Panera",products:"12\" Hoagies",volume:"132,000 units/wk",stage:"Awaiting Feedback",notes:"Following up on revised samples.",priority:"High",orders:mkOrders()},{...EMPTY_ACCOUNT,company:"QuikTrip",products:"Vienna Sourdough, Fresh Brioche Bun (28-day)",stage:"Samples Sent",notes:"Sample shipment June 8. R&D complete this week.",priority:"High",orders:mkOrders()},{...EMPTY_ACCOUNT,company:"Publix",products:"Revised Brioche, Hamburger Buns",stage:"Contacted",notes:"Appointment 5/27 — Marsha and Arnie to attend.",priority:"High",orders:mkOrders()}],traction:[{...EMPTY_ACCOUNT,company:"Safeway (Denver & Utah)",contact:"Adriene Stagliano (Broker)",products:"Sliced Breads, 6\" & 12\" Hoagies",stage:"Samples Sent",notes:"Volume TBD. Teams call before customer appt.",priority:"High",orders:mkOrders()},{...EMPTY_ACCOUNT,company:"Piggly Wiggly",products:"12\" Hoagies, Brioche Buns, 6\" Hoagies",distributor:"C&S Wholesale",stage:"Contacted",notes:"Teams call requested ASAP.",priority:"High",orders:mkOrders()},{...EMPTY_ACCOUNT,company:"Harris Teeter",products:"Hoagies, Brioche",units:"250+",stage:"Lead",notes:"Reaching out to Bakery Category Director.",priority:"High",orders:mkOrders()}],opps:[]}},
    {id:"linnette",name:"Linnette", division:"frozen", data: emptyRepData()},
  ],
  fresh: [
    {id:"kathy",    name:"Kathy",    division:"fresh", data: emptyRepData()},
    {id:"rolando",  name:"Rolando",  division:"fresh", data: emptyRepData()},
    {id:"jimmy",    name:"Jimmy",    division:"fresh", data: emptyRepData()},
    {id:"david_h",  name:"David H",  division:"fresh", data: emptyRepData()},
    {id:"david_s",  name:"David S",  division:"fresh", data: emptyRepData()},
    {id:"david_r",  name:"David R",  division:"fresh", data: emptyRepData()},
    {id:"bryan",    name:"Bryan",    division:"fresh", data: emptyRepData()},
    {id:"yady",     name:"Yady",     division:"fresh", data: emptyRepData()},
    {id:"yanko",    name:"Yanko",    division:"fresh", data: emptyRepData()},
    {id:"leonardo", name:"Leonardo", division:"fresh", data: emptyRepData()},
    {id:"jessica",  name:"Jessica",  division:"fresh", data: emptyRepData()},
    {id:"chase",    name:"Chase",    division:"fresh", data: emptyRepData()},
    {id:"william",  name:"William",  division:"fresh", data: emptyRepData()},
    {id:"adrian",   name:"Adrian",   division:"fresh", data: emptyRepData()},
    {id:"dylan",    name:"Dylan",    division:"fresh", data: emptyRepData()},
  ]
};

const USERS = {
  "admin@cusanos.com": {password:"admin2025", name:"Admin", role:"admin", repId:null},
  "brad@cusanos.com":  {password:"brad2025",  name:"Brad",  role:"rep",   repId:"brad",   division:"frozen"},
  "mervyn@cusanos.com":{password:"mervyn2025",name:"Mervyn",role:"rep",   repId:"mervyn", division:"frozen"},
};

const css = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@300;400;500;600&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Inter',sans-serif;background:#f5f2ee}

/* ── LOGIN ─────────────────────────────────────── */
.login-wrap{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0e0600}
.login-box{background:#1a0a00;border:1px solid #3a2010;border-radius:16px;padding:48px 40px;width:400px;box-shadow:0 20px 60px rgba(0,0,0,.6)}
.login-logo{display:flex;justify-content:center;margin-bottom:24px}
.login-logo img{width:90px;height:90px;object-fit:contain;border-radius:50%;border:3px solid #c9a84c;box-shadow:0 0 30px rgba(201,168,76,.3)}
.login-title{text-align:center}
.login-title h1{font-family:'Playfair Display',serif;font-size:24px;color:#f5e6c8}
.login-title p{font-size:11px;color:#806050;letter-spacing:1.5px;text-transform:uppercase;margin-top:4px}
.login-form{margin-top:32px;display:flex;flex-direction:column;gap:16px}
.lf-label{display:block;font-size:11px;color:#a08060;margin-bottom:6px;letter-spacing:1px;text-transform:uppercase}
.lf-input{width:100%;background:#0e0600;border:1px solid #3a2010;border-radius:8px;padding:12px 14px;color:#f5e6c8;font-size:14px;font-family:'Inter',sans-serif;outline:none;transition:border-color .2s}
.lf-input:focus{border-color:#c9a84c}
.login-btn{background:#8B1A1A;color:#fff;border:none;border-radius:8px;padding:14px;font-size:14px;font-weight:700;cursor:pointer;font-family:'Inter',sans-serif;transition:background .2s}
.login-btn:hover{background:#a02020}
.login-err{background:#2a0808;border:1px solid #5a1010;border-radius:6px;padding:10px 14px;font-size:12px;color:#e08080;text-align:center}

/* ── APP SHELL ──────────────────────────────────── */
.app{min-height:100vh;display:flex;flex-direction:column}
.topbar{background:#1a0a00;padding:0 28px;display:flex;align-items:center;gap:16px;height:68px;border-bottom:3px solid #8B1A1A;box-shadow:0 2px 20px rgba(0,0,0,.5);flex-shrink:0}
.topbar img{height:52px;width:52px;object-fit:contain;border-radius:50%;border:2px solid #c9a84c}
.topbar-title h1{font-family:'Playfair Display',serif;font-size:19px;color:#f5e6c8;letter-spacing:.5px}
.topbar-title span{font-size:10px;color:#a08060;letter-spacing:1.5px;text-transform:uppercase}
.topbar-right{margin-left:auto;display:flex;align-items:center;gap:12px}
.user-pill{background:#2a1500;border:1px solid #5a3010;border-radius:20px;padding:5px 13px;font-size:12px;color:#c9a084}
.tb-btn{background:transparent;border:1px solid #5a3010;border-radius:6px;padding:6px 13px;color:#c9a084;cursor:pointer;font-size:12px;font-family:'Inter',sans-serif;transition:all .2s}
.tb-btn:hover{background:#8B1A1A;color:#fff;border-color:#8B1A1A}
.tb-btn.active-div{background:#8B1A1A;color:#fff;border-color:#8B1A1A;font-weight:600}

/* ── DIV SWITCHER ────────────────────────────────── */
.div-bar{background:#2a1500;display:flex;align-items:center;gap:0;padding:0 28px;border-bottom:1px solid #3a2010}
.div-tab{padding:12px 28px;font-size:13px;font-weight:600;color:#a08060;cursor:pointer;border-bottom:3px solid transparent;letter-spacing:.5px;text-transform:uppercase;transition:all .2s}
.div-tab:hover{color:#f5e6c8}
.div-tab.active{color:#c9a84c;border-bottom-color:#c9a84c}

/* ── LAYOUT ─────────────────────────────────────── */
.main{display:flex;flex:1;overflow:hidden}
.sidebar{width:196px;background:#1a0a00;padding:20px 0;border-right:1px solid #2a1500;flex-shrink:0;overflow-y:auto}
.sb-section{margin-bottom:4px}
.sb-label{font-size:10px;color:#6a5040;letter-spacing:2px;text-transform:uppercase;padding:10px 18px 6px}
.rep-btn{display:flex;align-items:center;width:100%;text-align:left;padding:10px 18px;background:transparent;border:none;border-left:3px solid transparent;color:#a09080;font-size:13px;font-family:'Inter',sans-serif;cursor:pointer;transition:all .15s}
.rep-btn:hover{color:#f5e6c8;background:#2a1500}
.rep-btn.active{color:#f5e6c8;background:#2a1500;border-left-color:#c9a84c;font-weight:600}
.rep-count{margin-left:auto;background:#3a2010;border-radius:10px;padding:1px 7px;font-size:10px;color:#c9a084}
.sb-add-btn{display:flex;align-items:center;gap:6px;width:calc(100% - 36px);margin:6px 18px 0;background:transparent;border:1px dashed #3a2010;border-radius:6px;color:#6a5040;font-size:11px;font-family:'Inter',sans-serif;cursor:pointer;padding:7px 10px;transition:all .2s}
.sb-add-btn:hover{color:#c9a084;border-color:#c9a084}

.content{flex:1;overflow-y:auto;padding:24px 28px;background:#f5f2ee}

/* ── OVERVIEW ────────────────────────────────────── */
.ov-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:14px;margin-bottom:28px}
.ov-card{background:#fff;border-radius:10px;padding:16px 18px;box-shadow:0 1px 8px rgba(0,0,0,.07);border-left:4px solid #8B1A1A;cursor:pointer;transition:transform .15s,box-shadow .15s}
.ov-card:hover{transform:translateY(-2px);box-shadow:0 4px 16px rgba(0,0,0,.12)}
.ov-card h3{font-size:11px;color:#999;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px}
.ov-card .num{font-family:'Playfair Display',serif;font-size:32px;color:#1a0a00;line-height:1}
.ov-card .sub{font-size:11px;color:#aaa;margin-top:4px}
.div-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px}
.div-header h2{font-family:'Playfair Display',serif;font-size:22px;color:#1a0a00}

/* ── REP VIEW ────────────────────────────────────── */
.ch-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}
.ch-header h2{font-family:'Playfair Display',serif;font-size:22px;color:#1a0a00}
.ch-stats{display:flex;gap:12px}
.ch-stat{background:#fff;border-radius:8px;padding:10px 16px;text-align:center;box-shadow:0 1px 6px rgba(0,0,0,.07)}
.ch-stat .n{font-family:'Playfair Display',serif;font-size:22px;color:#1a0a00}
.ch-stat .l{font-size:10px;color:#aaa;text-transform:uppercase;letter-spacing:.8px}

/* ── SECTION BLOCK ───────────────────────────────── */
.section-block{margin-bottom:22px;border-radius:10px;overflow:hidden;box-shadow:0 1px 10px rgba(0,0,0,.07);border:1px solid rgba(0,0,0,.07)}
.sec-hdr{padding:11px 18px;display:flex;align-items:center;gap:10px;cursor:pointer;user-select:none}
.sec-hdr-dot{width:9px;height:9px;border-radius:50%;flex-shrink:0}
.sec-hdr-title{font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase}
.sec-hdr-ct{font-size:11px;opacity:.65;margin-left:auto;margin-right:6px}
.sec-chevron{font-size:12px;transition:transform .2s}
.sec-chevron.open{transform:rotate(90deg)}

/* ── COL HEADERS ─────────────────────────────────── */
.col-hdr,.order-hdr{display:grid;grid-template-columns:200px 140px 90px 90px 130px 80px 120px 110px 1fr;background:#2a1500;padding:5px 10px;border-top:1px solid rgba(0,0,0,.08)}
.col-hdr-cell,.order-hdr-cell{font-size:10px;color:#c9a084;font-weight:700;letter-spacing:1px;text-transform:uppercase;padding:0 6px}
.order-hdr{grid-template-columns:22px 110px 100px 160px 80px 110px 1fr;background:#1a0a00}

/* ── ACCOUNT ROW ─────────────────────────────────── */
.acc-block{border-top:1px solid rgba(0,0,0,.05)}
.acc-block:nth-child(even) .acc-row{background:#eae6e0}
.acc-block:nth-child(even) .ord-row{background:#e0dcd5}
.acc-block:nth-child(odd) .acc-row{background:#f5f2ee}
.acc-block:nth-child(odd) .ord-row{background:#ece8e2}
.acc-row{display:grid;grid-template-columns:200px 140px 90px 90px 130px 80px 120px 110px 1fr;cursor:pointer;transition:filter .12s}
.acc-row:hover{filter:brightness(.96)}
.cell{padding:9px 10px;font-size:12px;border-right:1px solid rgba(0,0,0,.05);display:flex;flex-direction:column;justify-content:center;min-height:42px;overflow:hidden}
.cell:last-child{border-right:none}
.cell-lbl{font-size:9px;color:#bbb;margin-bottom:1px;font-weight:600;letter-spacing:.5px;text-transform:uppercase}
.cell-val{font-size:12px;color:#1a0a00;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
.cell-co{font-weight:700;font-size:13px}
.badge{display:inline-block;border-radius:10px;padding:2px 9px;font-size:10px;font-weight:700}

/* ── DETAIL PANEL ────────────────────────────────── */
.detail-panel{padding:14px 18px;background:rgba(255,255,255,.55);border-top:1px dashed rgba(0,0,0,.1);display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
.df{display:flex;flex-direction:column;gap:4px}
.df label{font-size:9px;color:#999;font-weight:700;letter-spacing:.8px;text-transform:uppercase}
.df input,.df select,.df textarea{border:1px solid #ddd;border-radius:6px;padding:6px 9px;font-size:12px;font-family:'Inter',sans-serif;background:#fff;color:#1a0a00;outline:none;transition:border-color .15s;width:100%}
.df input:focus,.df select:focus,.df textarea:focus{border-color:#8B1A1A}
.df.full{grid-column:1/-1}
.df.half{grid-column:span 2}
.det-actions{grid-column:1/-1;display:flex;gap:8px;justify-content:flex-end;padding-top:4px}
.save-btn{background:#8B1A1A;color:#fff;border:none;border-radius:6px;padding:7px 16px;font-size:12px;font-weight:700;cursor:pointer;font-family:'Inter',sans-serif}
.del-btn{background:transparent;border:1px solid #ccc;border-radius:6px;padding:7px 16px;font-size:12px;color:#999;cursor:pointer;font-family:'Inter',sans-serif}

/* ── ORDER ROWS ──────────────────────────────────── */
.ord-row{display:grid;grid-template-columns:22px 110px 100px 160px 80px 110px 1fr;border-top:1px solid rgba(0,0,0,.04)}
.ord-cell{padding:6px 8px;font-size:11px;color:#3a2a1a;border-right:1px solid rgba(0,0,0,.04)}
.ord-cell:last-child{border-right:none}
.ord-cell input{width:100%;background:transparent;border:none;font-size:11px;color:#3a2a1a;font-family:'Inter',sans-serif;outline:none}
.ord-cell input:focus{background:rgba(255,255,255,.7);border-radius:3px;padding:1px 3px}
.ord-idx{font-size:9px;color:#ccc;display:flex;align-items:center;justify-content:center}
.ord-add-row{padding:7px 14px;border-top:1px dashed rgba(0,0,0,.08);display:flex;justify-content:flex-end}

/* ── ADD ACCOUNT ROW ─────────────────────────────── */
.add-acc-row{padding:9px 14px;border-top:1px dashed rgba(0,0,0,.08);display:flex;align-items:center;gap:7px;cursor:pointer;color:#8B1A1A;font-size:11px;font-weight:700;background:rgba(139,26,26,.03);transition:background .15s}
.add-acc-row:hover{background:rgba(139,26,26,.1)}

/* ── MODAL ───────────────────────────────────────── */
.modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.55);display:flex;align-items:center;justify-content:center;z-index:1000}
.modal{background:#fff;border-radius:14px;padding:32px;width:380px;box-shadow:0 20px 60px rgba(0,0,0,.3)}
.modal h3{font-family:'Playfair Display',serif;font-size:20px;color:#1a0a00;margin-bottom:20px}
.modal-field{margin-bottom:14px}
.modal-field label{display:block;font-size:11px;color:#888;font-weight:700;letter-spacing:.8px;text-transform:uppercase;margin-bottom:5px}
.modal-field input,.modal-field select{width:100%;border:1px solid #ddd;border-radius:8px;padding:10px 12px;font-size:13px;font-family:'Inter',sans-serif;outline:none;color:#1a0a00}
.modal-field input:focus,.modal-field select:focus{border-color:#8B1A1A}
.modal-actions{display:flex;gap:10px;justify-content:flex-end;margin-top:20px}
.m-cancel{background:transparent;border:1px solid #ddd;border-radius:8px;padding:9px 18px;font-size:13px;cursor:pointer;font-family:'Inter',sans-serif;color:#888}
.m-save{background:#8B1A1A;color:#fff;border:none;border-radius:8px;padding:9px 18px;font-size:13px;font-weight:700;cursor:pointer;font-family:'Inter',sans-serif}
.m-danger{background:#922B21;color:#fff;border:none;border-radius:8px;padding:9px 18px;font-size:13px;font-weight:700;cursor:pointer;font-family:'Inter',sans-serif}
.modal-warn{font-size:13px;color:#555;line-height:1.6;margin-bottom:8px}
`;

/* ═══════════════════════════════════════════════════════
   SMALL COMPONENTS
═══════════════════════════════════════════════════════ */

function Modal({title, children, onClose}) {
  return (
    <div className="modal-overlay" onClick={e=>{if(e.target===e.currentTarget)onClose()}}>
      <div className="modal">
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );
}

function AccountBlock({account, onUpdate, onDelete, stageOptions}) {
  const [open, setOpen] = useState(false);
  const [ed, setEd] = useState({...account});

  const chgOrder = (i,f,v) => {
    const orders = ed.orders.map((o,idx)=>idx===i?{...o,[f]:v}:o);
    setEd(e=>({...e,orders}));
  };
  const save = () => { onUpdate(ed); setOpen(false); };

  const sbg = STAGE_COLORS[ed.stage]||"#eee";
  const stxt = STAGE_TEXT[ed.stage]||"#333";
  const pbg = PRIORITY_COLORS[ed.priority]||"#eee";

  return (
    <div className="acc-block">
      <div className="acc-row" onClick={()=>setOpen(o=>!o)}>
        <div className="cell"><span className="cell-val cell-co">{account.company||<span style={{color:"#ccc"}}>New Account</span>}</span></div>
        <div className="cell"><span className="cell-lbl">Contact</span><span className="cell-val">{account.contact||"—"}</span></div>
        <div className="cell"><span className="cell-lbl">Units</span><span className="cell-val">{account.units||"—"}</span></div>
        <div className="cell"><span className="cell-lbl">GPO</span><span className="cell-val">{account.gpo||"—"}</span></div>
        <div className="cell"><span className="cell-lbl">Distributor</span><span className="cell-val" style={{fontSize:11}}>{account.distributor||"—"}</span></div>
        <div className="cell"><span className="cell-lbl">Priority</span><span className="badge" style={{background:pbg,color:"#333"}}>{account.priority}</span></div>
        <div className="cell"><span className="cell-lbl">Stage</span><span className="badge" style={{background:sbg,color:stxt}}>{account.stage}</span></div>
        <div className="cell"><span className="cell-lbl">Follow Up</span><span className="cell-val" style={{fontSize:11}}>{account.next_followup||"—"}</span></div>
        <div className="cell" style={{flex:1}}><span className="cell-lbl">Notes</span><span style={{fontSize:11,color:"#555",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"}}>{account.notes||"—"}</span></div>
      </div>

      {open && (
        <>
          <div className="detail-panel">
            {[["Company","company"],["Contact","contact"],["Title","title"],["Phone","phone"]].map(([l,k])=>(
              <div className="df" key={k}><label>{l}</label><input value={ed[k]||""} onChange={e=>setEd(v=>({...v,[k]:e.target.value}))} /></div>
            ))}
            <div className="df half"><label>Email</label><input value={ed.email||""} onChange={e=>setEd(v=>({...v,email:e.target.value}))} /></div>
            <div className="df half"><label>Website / URL</label><input value={ed.url||""} onChange={e=>setEd(v=>({...v,url:e.target.value}))} /></div>
            {[["Distributor","distributor"],["# Units","units"],["GPO","gpo"],["Est. Volume / Year","volume"]].map(([l,k])=>(
              <div className="df" key={k}><label>{l}</label><input value={ed[k]||""} onChange={e=>setEd(v=>({...v,[k]:e.target.value}))} /></div>
            ))}
            <div className="df"><label>Stage</label><select value={ed.stage} onChange={e=>setEd(v=>({...v,stage:e.target.value}))}>{STAGE_OPTIONS.map(s=><option key={s}>{s}</option>)}</select></div>
            <div className="df"><label>Priority</label><select value={ed.priority} onChange={e=>setEd(v=>({...v,priority:e.target.value}))}>{PRIORITY_OPTIONS.map(p=><option key={p}>{p}</option>)}</select></div>
            <div className="df"><label>Last Contact</label><input type="date" value={ed.last_contact||""} onChange={e=>setEd(v=>({...v,last_contact:e.target.value}))} /></div>
            <div className="df"><label>Next Follow Up</label><input type="date" value={ed.next_followup||""} onChange={e=>setEd(v=>({...v,next_followup:e.target.value}))} /></div>
            <div className="df full"><label>Products Interested In</label><input value={ed.products||""} onChange={e=>setEd(v=>({...v,products:e.target.value}))} /></div>
            <div className="df full"><label>Notes</label><textarea rows={3} value={ed.notes||""} onChange={e=>setEd(v=>({...v,notes:e.target.value}))} style={{resize:"vertical"}} /></div>
            <div className="det-actions">
              <button className="del-btn" onClick={onDelete}>Delete Account</button>
              <button className="save-btn" onClick={save}>Save Changes</button>
            </div>
          </div>

          <div className="order-hdr">
            {["#","Date","Order #","Product","Qty / Cases","Status","Order Notes"].map(h=><div className="order-hdr-cell" key={h}>{h}</div>)}
          </div>
          {ed.orders.map((o,i)=>(
            <div className="ord-row" key={i}>
              <div className="ord-cell ord-idx">{i+1}</div>
              {["date","order_num","product","qty","status","notes"].map(f=>(
                <div className="ord-cell" key={f}><input value={o[f]||""} onChange={e=>chgOrder(i,f,e.target.value)} onBlur={()=>onUpdate({...ed})} placeholder="—" /></div>
              ))}
            </div>
          ))}
          <div className="ord-add-row">
            <button className="save-btn" style={{fontSize:11,padding:"5px 12px"}} onClick={()=>setEd(e=>({...e,orders:[...e.orders,{date:"",order_num:"",product:"",qty:"",status:"",notes:""}]}))}>+ Add Order Row</button>
          </div>
        </>
      )}
    </div>
  );
}

function SectionBlock({meta, accounts, onUpdateAcc, onDeleteAcc, onAddAcc, stageOptions}) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="section-block">
      <div className="sec-hdr" style={{background:meta.bg}} onClick={()=>setCollapsed(c=>!c)}>
        <span className="sec-hdr-dot" style={{background:meta.color}} />
        <span className="sec-hdr-title" style={{color:meta.color}}>{meta.label}</span>
        <span className="sec-hdr-ct" style={{color:meta.color}}>{accounts.length}</span>
        <span className={`sec-chevron${collapsed?"":" open"}`} style={{color:meta.color}}>▶</span>
      </div>
      {!collapsed && (
        <>
          <div className="col-hdr">
            {["Company","Contact","Units","GPO","Distributor","Priority","Stage","Follow Up","Notes"].map(h=><div className="col-hdr-cell" key={h}>{h}</div>)}
          </div>
          {accounts.length===0 && <div style={{padding:"20px",textAlign:"center",fontSize:12,color:"#bbb"}}>No accounts yet</div>}
          {accounts.map((acc,i)=>(
            <AccountBlock key={i} account={acc} onUpdate={u=>onUpdateAcc(i,u)} onDelete={()=>onDeleteAcc(i)} stageOptions={stageOptions} />
          ))}
          <div className="add-acc-row" onClick={onAddAcc}><span style={{fontSize:15}}>+</span> Add Account</div>
        </>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN APP
═══════════════════════════════════════════════════════ */

export default function App() {
  const [user, setUser]         = useState(null);
  const [email, setEmail]       = useState("");
  const [pass, setPass]         = useState("");
  const [loginErr, setLoginErr] = useState("");
  const [division, setDivision] = useState("frozen"); // frozen | fresh
  const [stageOptions, setStageOptions] = useState(DEFAULT_STAGES);
  const [showSettings, setShowSettings] = useState(false);
  const [newStageName, setNewStageName] = useState("");
  const [editStageIdx, setEditStageIdx] = useState(null);
  const [editStageName, setEditStageName] = useState("");
  const [delStageIdx, setDelStageIdx] = useState(null);
  const [settingsPw, setSettingsPw] = useState("");
  const [settingsPwErr, setSettingsPwErr] = useState("");
  const [settingsUnlocked, setSettingsUnlocked] = useState(false);
  const [reps, setReps]         = useState(INITIAL_REPS);
  const [activeId, setActiveId] = useState("overview");

  // Modals
  const [addRepModal, setAddRepModal]   = useState(false); // {division}
  const [editRepModal, setEditRepModal] = useState(null);  // rep obj
  const [delRepModal, setDelRepModal]   = useState(null);  // rep obj
  const [delRepPw, setDelRepPw]         = useState("");
  const [delRepErr, setDelRepErr]       = useState("");
  // account delete confirmation
  const [delAccModal, setDelAccModal]   = useState(null); // {sec, idx, onConfirm}
  const [delAccPw, setDelAccPw]         = useState("");
  const [delAccErr, setDelAccErr]       = useState("");
  const [newRepName, setNewRepName]     = useState("");
  const [newRepDiv, setNewRepDiv]       = useState("frozen");

  /* ── LOGIN ─────────────────────────────────── */
  const handleLogin = () => {
    const u = USERS[email.toLowerCase()];
    if (u && u.password === pass) {
      setUser(u);
      if (u.role === "rep") {
        setDivision(u.division);
        setActiveId(u.repId);
      } else {
        setActiveId("overview");
      }
    } else setLoginErr("Invalid email or password.");
  };
  const handleLogout = () => { setUser(null); setEmail(""); setPass(""); setLoginErr(""); setActiveId("overview"); };

  /* ── REP MGMT ──────────────────────────────── */
  const allReps = (div) => reps[div] || [];
  const activeReps = allReps(division);

  const addRep = () => {
    if (!newRepName.trim()) return;
    const id = newRepName.trim().toLowerCase().replace(/\s+/g,"_") + "_" + Date.now();
    const newRep = {id, name:newRepName.trim(), division:newRepDiv, data:emptyRepData()};
    setReps(r=>({...r,[newRepDiv]:[...r[newRepDiv],newRep]}));
    setNewRepName(""); setAddRepModal(false);
  };

  const saveRepEdit = () => {
    if (!editRepModal || !editRepModal.name.trim()) return;
    setReps(r=>({
      ...r,
      [editRepModal.division]: r[editRepModal.division].map(rp=>rp.id===editRepModal.id?{...rp,name:editRepModal.name}:rp)
    }));
    setEditRepModal(null);
  };

  const deleteRep = () => {
    if (!delRepModal) return;
    if (delRepPw !== "admin2025") { setDelRepErr("Incorrect password. Try again."); return; }
    setReps(r=>({...r,[delRepModal.division]:r[delRepModal.division].filter(rp=>rp.id!==delRepModal.id)}));
    if (activeId===delRepModal.id) setActiveId("overview");
    setDelRepModal(null); setDelRepPw(""); setDelRepErr("");
  };

  const updateRepData = (repId, div, newData) => {
    setReps(r=>({...r,[div]:r[div].map(rp=>rp.id===repId?{...rp,data:newData}:rp)}));
  };

  /* ── ACCOUNT OPS ────────────────────────────── */
  const getRepObj = () => activeReps.find(r=>r.id===activeId);

  const updateSectionAcc = (sec, idx, updated) => {
    const rep = getRepObj();
    if (!rep) return;
    const newData = {...rep.data, [sec]: rep.data[sec].map((a,i)=>i===idx?updated:a)};
    updateRepData(rep.id, division, newData);
  };
  const deleteSectionAcc = (sec, idx) => {
    const rep = getRepObj();
    if (!rep) return;
    updateRepData(rep.id, division, {...rep.data,[sec]:rep.data[sec].filter((_,i)=>i!==idx)});
  };
  const addSectionAcc = (sec) => {
    const rep = getRepObj();
    if (!rep) return;
    updateRepData(rep.id, division, {...rep.data,[sec]:[...rep.data[sec],{...EMPTY_ACCOUNT,orders:mkOrders()}]});
  };

  /* ── COUNTS ─────────────────────────────────── */
  const repTotal = (r) => r.data.active.length + r.data.traction.length + r.data.opps.length;

  /* ── OVERVIEW ───────────────────────────────── */
  const OverviewPage = () => (
    <div>
      {["frozen","fresh"].map(div=>(
        <div key={div} style={{marginBottom:32}}>
          <div className="div-header">
            <h2 style={{color: div==="frozen"?"#1a4a8a":"#1a6b35", fontFamily:"'Playfair Display',serif"}}>
              {div==="frozen" ? "❄️  Frozen Sales" : "🥖  Fresh Sales"}
            </h2>
            <span style={{fontSize:12,color:"#aaa"}}>{reps[div].length} reps · {reps[div].reduce((s,r)=>s+repTotal(r),0)} total accounts</span>
          </div>
          <div className="ov-grid">
            {reps[div].map(rep=>(
              <div className="ov-card" key={rep.id}
                style={{borderLeftColor: div==="frozen"?"#1a4a8a":"#1a6b35"}}
                onClick={()=>{setDivision(div);setActiveId(rep.id)}}>
                <h3 style={{color: div==="frozen"?"#1a4a8a":"#1a6b35"}}>{rep.name}</h3>
                <div className="num">{repTotal(rep)}</div>
                <div className="sub">{rep.data.active.length} active · {rep.data.traction.length} in progress</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  /* ── REP PAGE ───────────────────────────────── */
  const RepPage = () => {
    const rep = getRepObj();
    if (!rep) return <div style={{padding:40,color:"#aaa"}}>Select a rep from the sidebar.</div>;
    return (
      <div>
        <div className="ch-header">
          <h2>{rep.name}'s Accounts</h2>
          <div className="ch-stats">
            {SECTION_META.map(m=>(
              <div className="ch-stat" key={m.key}>
                <div className="n" style={{color:m.color}}>{rep.data[m.key].length}</div>
                <div className="l">{m.key}</div>
              </div>
            ))}
          </div>
        </div>
        {SECTION_META.map(m=>(
          <SectionBlock
            key={m.key} meta={m}
            accounts={rep.data[m.key]}
            onUpdateAcc={(i,u)=>updateSectionAcc(m.key,i,u)}
            onDeleteAcc={(i)=>setDelAccModal({sec:m.key,idx:i,onConfirm:()=>{deleteSectionAcc(m.key,i);setDelAccModal(null);setDelAccPw("");setDelAccErr("");}})}
            onAddAcc={()=>addSectionAcc(m.key)}
            stageOptions={stageOptions}
          />
        ))}
      </div>
    );
  };

  /* ── SIDEBAR ─────────────────────────────────── */
  const divColor = division==="frozen"?"#4a90d9":"#1a9a50";

  const Sidebar = () => (
    <div className="sidebar">
      <div className="sb-section">
        <div className="sb-label">Views</div>
        <button className={`rep-btn${activeId==="overview"?" active":""}`} onClick={()=>setActiveId("overview")}>
          Overview
        </button>
      </div>

      {["frozen","fresh"].map(div=>{
        const isDivActive = division===div;
        const divLabel = div==="frozen"?"❄️  Frozen Sales":"🥖  Fresh Sales";
        return (
          <div className="sb-section" key={div}>
            <div className="sb-label" style={{cursor:"pointer",color:isDivActive?"#c9a084":"#6a5040"}}
              onClick={()=>{setDivision(div);setActiveId("overview")}}>
              {divLabel}
            </div>
            {reps[div].map(rep=>(
              <div key={rep.id} style={{display:"flex",alignItems:"center",position:"relative"}}>
                <button
                  className={`rep-btn${activeId===rep.id&&division===div?" active":""}`}
                  style={{flex:1,paddingRight:60}}
                  onClick={()=>{setDivision(div);setActiveId(rep.id)}}>
                  {rep.name}
                  <span className="rep-count">{repTotal(rep)}</span>
                </button>
                {user?.role==="admin" && (
                  <span style={{position:"absolute",right:6,display:"flex",gap:3}}>
                    <button onClick={e=>{e.stopPropagation();setEditRepModal({...rep})}}
                      style={{background:"none",border:"none",cursor:"pointer",color:"#6a5040",fontSize:12,padding:"2px 3px"}} title="Edit">✏️</button>
                    <button onClick={e=>{e.stopPropagation();setDelRepModal(rep)}}
                      style={{background:"none",border:"none",cursor:"pointer",color:"#922B21",fontSize:12,padding:"2px 3px"}} title="Delete">🗑</button>
                  </span>
                )}
              </div>
            ))}
            {user?.role==="admin" && (
              <button className="sb-add-btn" onClick={()=>{setNewRepDiv(div);setNewRepName("");setAddRepModal(true)}}>
                <span style={{fontSize:14}}>+</span> Add Rep
              </button>
            )}
          </div>
        );
      })}
    </div>
  );

  /* ── LOGIN SCREEN ───────────────────────────── */
  if (!user) return (
    <>
      <style>{css}</style>
      <div className="login-wrap">
        <div className="login-box">
          <div className="login-logo"><img src={LOGO} alt="Cusano's" /></div>
          <div className="login-title">
            <h1>Cusano's Italian Bakery</h1>
            <p>Cusano's Italian Bakery — Sales CRM</p>
          </div>
          <div className="login-form">
            <div><label className="lf-label">Email</label><input className="lf-input" type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@cusanos.com" onKeyDown={e=>e.key==="Enter"&&handleLogin()} /></div>
            <div><label className="lf-label">Password</label><input className="lf-input" type="password" value={pass} onChange={e=>setPass(e.target.value)} placeholder="••••••••" onKeyDown={e=>e.key==="Enter"&&handleLogin()} /></div>
            {loginErr && <div className="login-err">{loginErr}</div>}
            <button className="login-btn" onClick={handleLogin}>Sign In</button>
          </div>
        </div>
      </div>
    </>
  );

  /* ── MAIN APP ────────────────────────────────── */
  return (
    <>
      <style>{css}</style>
      <div className="app">
        {/* TOPBAR */}
        <div className="topbar">
          <img src={LOGO} alt="Cusano's" />
          <div className="topbar-title">
            <h1>Cusano's Italian Bakery</h1>
            <span>Cusano's Italian Bakery — Sales CRM</span>
          </div>
          <div className="topbar-right">
            <div className="user-pill">{user.name}</div>
            {user.role==="admin" && <button className="tb-btn" onClick={()=>{setShowSettings(true);setSettingsPw("");setSettingsPwErr("");setSettingsUnlocked(false);}} title="Settings">⚙️ Settings</button>}
            <button className="tb-btn" onClick={handleLogout}>Sign Out</button>
          </div>
        </div>

        {/* DIV TABS */}
        <div className="div-bar">
          <div className={`div-tab${activeId==="overview"?" active":""}`} onClick={()=>setActiveId("overview")}>Overview</div>
          <div className={`div-tab${division==="frozen"&&activeId!=="overview"?" active":""}`}
            onClick={()=>{setDivision("frozen");const first=reps.frozen[0];if(first)setActiveId(first.id);}}>
            ❄️ Frozen Sales
          </div>
          <div className={`div-tab${division==="fresh"&&activeId!=="overview"?" active":""}`}
            onClick={()=>{setDivision("fresh");const first=reps.fresh[0];if(first)setActiveId(first.id);}}>
            🥖 Fresh Sales
          </div>
        </div>

        <div className="main">
          <Sidebar />
          <div className="content">
            {activeId==="overview" ? <OverviewPage /> : <RepPage />}
          </div>
        </div>
      </div>

      {/* ADD REP MODAL */}
      {addRepModal && (
        <Modal title="Add New Sales Rep" onClose={()=>setAddRepModal(false)}>
          <div className="modal-field">
            <label>Rep Name</label>
            <input value={newRepName} onChange={e=>setNewRepName(e.target.value)} placeholder="First Last" onKeyDown={e=>e.key==="Enter"&&addRep()} autoFocus />
          </div>
          <div className="modal-field">
            <label>Division</label>
            <select value={newRepDiv} onChange={e=>setNewRepDiv(e.target.value)}>
              <option value="frozen">❄️ Frozen Sales</option>
              <option value="fresh">🥖 Fresh Sales</option>
            </select>
          </div>
          <div className="modal-actions">
            <button className="m-cancel" onClick={()=>setAddRepModal(false)}>Cancel</button>
            <button className="m-save" onClick={addRep}>Add Rep</button>
          </div>
        </Modal>
      )}

      {/* EDIT REP MODAL */}
      {editRepModal && (
        <Modal title="Edit Rep" onClose={()=>setEditRepModal(null)}>
          <div className="modal-field">
            <label>Name</label>
            <input value={editRepModal.name} onChange={e=>setEditRepModal(r=>({...r,name:e.target.value}))} autoFocus />
          </div>
          <div className="modal-actions">
            <button className="m-cancel" onClick={()=>setEditRepModal(null)}>Cancel</button>
            <button className="m-save" onClick={saveRepEdit}>Save</button>
          </div>
        </Modal>
      )}

      {/* DELETE ACCOUNT MODAL */}
      {delAccModal && (
        <Modal title="Delete Account?" onClose={()=>{setDelAccModal(null);setDelAccPw("");setDelAccErr("");}}>
          <p className="modal-warn">This will permanently delete this account and all its order data. This cannot be undone.</p>
          <p className="modal-warn" style={{marginTop:10}}>Enter the admin password to confirm:</p>
          <div className="modal-field" style={{marginTop:14}}>
            <label>Admin Password</label>
            <input type="password" value={delAccPw} onChange={e=>setDelAccPw(e.target.value)} placeholder="••••••••" autoFocus
              onKeyDown={e=>{if(e.key==="Enter"){if(delAccPw==="admin2025"){delAccModal.onConfirm();}else{setDelAccErr("Incorrect password. Try again.");}}}}
              style={{borderColor:delAccErr?"#922B21":"#ddd"}} />
            {delAccErr && <div style={{color:"#922B21",fontSize:12,marginTop:6}}>{delAccErr}</div>}
          </div>
          <div className="modal-actions">
            <button className="m-cancel" onClick={()=>{setDelAccModal(null);setDelAccPw("");setDelAccErr("");}}>Cancel</button>
            <button className="m-danger" onClick={()=>{if(delAccPw==="admin2025"){delAccModal.onConfirm();}else{setDelAccErr("Incorrect password. Try again.");}}}>Delete Account</button>
          </div>
        </Modal>
      )}

      {/* DELETE REP MODAL */}
      {delRepModal && (
        <Modal title="Delete Rep?" onClose={()=>{setDelRepModal(null);setDelRepPw("");setDelRepErr("");}}>
          <p className="modal-warn">You are about to permanently remove <strong>{delRepModal.name}</strong> and all their account data. This cannot be undone.</p>
          <p className="modal-warn" style={{marginTop:10}}>Enter the admin password to confirm:</p>
          <div className="modal-field" style={{marginTop:14}}>
            <label>Admin Password</label>
            <input type="password" value={delRepPw} onChange={e=>setDelRepPw(e.target.value)} placeholder="••••••••" autoFocus
              onKeyDown={e=>e.key==="Enter"&&deleteRep()}
              style={{borderColor:delRepErr?"#922B21":"#ddd"}} />
            {delRepErr && <div style={{color:"#922B21",fontSize:12,marginTop:6}}>{delRepErr}</div>}
          </div>
          <div className="modal-actions">
            <button className="m-cancel" onClick={()=>{setDelRepModal(null);setDelRepPw("");setDelRepErr("");}}>Cancel</button>
            <button className="m-danger" onClick={deleteRep}>Delete Rep</button>
          </div>
        </Modal>
      )}
      {/* SETTINGS MODAL */}
      {showSettings && (
        <Modal title="⚙️ Settings" onClose={()=>{setShowSettings(false);setSettingsUnlocked(false);setSettingsPw("");setSettingsPwErr("");}}>
          {!settingsUnlocked ? (
            <>
              <p className="modal-warn">Enter the admin password to access settings.</p>
              <div className="modal-field" style={{marginTop:14}}>
                <label>Admin Password</label>
                <input type="password" value={settingsPw} onChange={e=>setSettingsPw(e.target.value)} placeholder="••••••••" autoFocus
                  onKeyDown={e=>{if(e.key==="Enter"){if(settingsPw==="admin2025"){setSettingsUnlocked(true);setSettingsPwErr("");}else setSettingsPwErr("Incorrect password.");}}}
                  style={{borderColor:settingsPwErr?"#922B21":"#ddd"}} />
                {settingsPwErr && <div style={{color:"#922B21",fontSize:12,marginTop:6}}>{settingsPwErr}</div>}
              </div>
              <div className="modal-actions">
                <button className="m-cancel" onClick={()=>setShowSettings(false)}>Cancel</button>
                <button className="m-save" onClick={()=>{if(settingsPw==="admin2025"){setSettingsUnlocked(true);setSettingsPwErr("");}else setSettingsPwErr("Incorrect password.");}}>Unlock</button>
              </div>
            </>
          ) : (
            <>
              <p style={{fontSize:12,color:"#888",marginBottom:16}}>Add, rename, reorder, or remove pipeline stages. Changes apply across the entire CRM.</p>

              {/* Current stages list */}
              <div style={{border:"1px solid #eee",borderRadius:8,overflow:"hidden",marginBottom:16}}>
                {stageOptions.map((stage,i)=>(
                  <div key={i} style={{display:"flex",alignItems:"center",padding:"9px 12px",borderBottom:i<stageOptions.length-1?"1px solid #f0f0f0":"none",background:i%2===0?"#fff":"#fafafa",gap:8}}>
                    {editStageIdx===i ? (
                      <>
                        <input value={editStageName} onChange={e=>setEditStageName(e.target.value)}
                          style={{flex:1,border:"1px solid #8B1A1A",borderRadius:5,padding:"4px 8px",fontSize:13,fontFamily:"'Inter',sans-serif",outline:"none"}}
                          autoFocus onKeyDown={e=>{if(e.key==="Enter"){const s=[...stageOptions];s[i]=editStageName.trim()||s[i];setStageOptions(s);setEditStageIdx(null);}}} />
                        <button onClick={()=>{const s=[...stageOptions];s[i]=editStageName.trim()||s[i];setStageOptions(s);setEditStageIdx(null);}}
                          style={{background:"#8B1A1A",color:"#fff",border:"none",borderRadius:5,padding:"4px 10px",fontSize:12,cursor:"pointer"}}>Save</button>
                        <button onClick={()=>setEditStageIdx(null)}
                          style={{background:"none",border:"1px solid #ddd",borderRadius:5,padding:"4px 10px",fontSize:12,cursor:"pointer",color:"#888"}}>Cancel</button>
                      </>
                    ) : (
                      <>
                        <span style={{flex:1,fontSize:13,color:"#1a0a00",fontWeight:500}}>{stage}</span>
                        <button onClick={()=>{if(i>0){const s=[...stageOptions];[s[i-1],s[i]]=[s[i],s[i-1]];setStageOptions(s);}}}
                          style={{background:"none",border:"none",cursor:i===0?"not-allowed":"pointer",color:i===0?"#ddd":"#888",fontSize:14,padding:"2px 4px"}} title="Move up">↑</button>
                        <button onClick={()=>{if(i<stageOptions.length-1){const s=[...stageOptions];[s[i],s[i+1]]=[s[i+1],s[i]];setStageOptions(s);}}}
                          style={{background:"none",border:"none",cursor:i===stageOptions.length-1?"not-allowed":"pointer",color:i===stageOptions.length-1?"#ddd":"#888",fontSize:14,padding:"2px 4px"}} title="Move down">↓</button>
                        <button onClick={()=>{setEditStageIdx(i);setEditStageName(stage);}}
                          style={{background:"none",border:"1px solid #ddd",borderRadius:5,padding:"3px 9px",fontSize:11,cursor:"pointer",color:"#555"}}>Rename</button>
                        <button onClick={()=>setDelStageIdx(i)}
                          style={{background:"none",border:"1px solid #fcc",borderRadius:5,padding:"3px 9px",fontSize:11,cursor:"pointer",color:"#922B21"}}>Remove</button>
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* Confirm remove stage */}
              {delStageIdx !== null && (
                <div style={{background:"#fff5f5",border:"1px solid #fcc",borderRadius:8,padding:"12px 14px",marginBottom:14}}>
                  <p style={{fontSize:12,color:"#922B21",marginBottom:10}}>Remove stage <strong>"{stageOptions[delStageIdx]}"</strong>? Accounts using this stage will keep their current value but it won't appear as a dropdown option.</p>
                  <div style={{display:"flex",gap:8,justifyContent:"flex-end"}}>
                    <button onClick={()=>setDelStageIdx(null)} style={{background:"none",border:"1px solid #ddd",borderRadius:5,padding:"5px 12px",fontSize:12,cursor:"pointer"}}>Cancel</button>
                    <button onClick={()=>{setStageOptions(s=>s.filter((_,idx)=>idx!==delStageIdx));setDelStageIdx(null);}}
                      style={{background:"#922B21",color:"#fff",border:"none",borderRadius:5,padding:"5px 12px",fontSize:12,cursor:"pointer",fontWeight:700}}>Remove</button>
                  </div>
                </div>
              )}

              {/* Add new stage */}
              <div style={{display:"flex",gap:8,alignItems:"center"}}>
                <input value={newStageName} onChange={e=>setNewStageName(e.target.value)} placeholder="New stage name..."
                  style={{flex:1,border:"1px solid #ddd",borderRadius:7,padding:"8px 11px",fontSize:13,fontFamily:"'Inter',sans-serif",outline:"none"}}
                  onKeyDown={e=>{if(e.key==="Enter"&&newStageName.trim()){setStageOptions(s=>[...s,newStageName.trim()]);setNewStageName("");}}} />
                <button onClick={()=>{if(newStageName.trim()){setStageOptions(s=>[...s,newStageName.trim()]);setNewStageName("");}}}
                  style={{background:"#8B1A1A",color:"#fff",border:"none",borderRadius:7,padding:"8px 16px",fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"'Inter',sans-serif"}}>+ Add</button>
              </div>

              <div className="modal-actions" style={{marginTop:20}}>
                <button className="m-save" onClick={()=>setShowSettings(false)}>Done</button>
              </div>
            </>
          )}
        </Modal>
      )}

    </>
  );
}
