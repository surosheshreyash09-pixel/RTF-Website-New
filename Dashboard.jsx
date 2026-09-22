import React, { useState } from "react";
import {
  Activity,
  ArrowUpRight,
  Bell,
  Bot,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CircleUserRound,
  Cpu,
  FolderKanban,
  Gauge,
  Lightbulb,
  Menu,
  MoreHorizontal,
  Package,
  Settings,
  ShieldCheck,
  Users,
  Wrench,
  X,
} from "lucide-react";

const stats = [
  ["Active Members", "248", "+12%", Users],
  ["Active Projects", "18", "+4", FolderKanban],
  ["Upcoming Events", "07", "+2", CalendarDays],
  ["Pending Requests", "14", "+6", Bell],
];

const events = [
  ["24", "SEP", "Robotics Workshop", "10:00 AM", "RTF Lab", "Workshop"],
  ["28", "SEP", "Project Showcase", "02:00 PM", "Innovation Hall", "Showcase"],
  ["04", "OCT", "Tech Talk 2026", "11:30 AM", "Seminar Hall", "Talk"],
];

const projects = [
  ["Autonomous Rover", "Rover Team", 78, "In Progress"],
  ["Line Following Bot", "Embedded Team", 62, "In Progress"],
  ["Smart Agriculture Robot", "AI & Robotics", 45, "Development"],
  ["Vision-Based Sorting Bot", "Computer Vision", 91, "Testing"],
];

const requests = [
  ["Aarav Patil", "New Member", "10 min ago", "AP"],
  ["Riya Sharma", "Project Access", "32 min ago", "RS"],
  ["Aditya Joshi", "Workshop Request", "1 hr ago", "AJ"],
];

const resources = [
  ["Arduino Kits", "18 / 25", Cpu],
  ["Robotic Arms", "04 / 06", Bot],
  ["3D Printers", "02 / 03", Package],
];

const css = `
*{box-sizing:border-box} body{margin:0;background:#070b12;color:#e8edf5;font-family:Inter,system-ui,-apple-system,"Segoe UI",sans-serif}.rtf{min-height:100vh;display:flex}.sidebar{width:250px;min-width:250px;position:fixed;inset:0 auto 0 0;background:#0b1018;border-right:1px solid #ffffff12;display:flex;flex-direction:column;z-index:10}.logo{height:88px;padding:0 22px;display:flex;align-items:center;gap:12px;border-bottom:1px solid #ffffff0f}.logo-icon,.stat-icon,.resource-icon,.project-icon{display:flex;align-items:center;justify-content:center}.logo-icon{width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,#00b7ff,#1769ff);color:#fff}.logo h2{margin:0;font-size:20px}.logo span{font-size:10px;color:#78869a}.label{padding:28px 22px 10px;color:#536174;font-size:10px;font-weight:700;letter-spacing:1.4px}.nav{padding:0 12px}.nav button{width:100%;height:44px;margin-bottom:5px;border:0;border-radius:10px;background:transparent;color:#7f8da0;display:flex;align-items:center;gap:13px;padding:0 12px;cursor:pointer;text-align:left}.nav button:hover,.nav button.active{background:#00b7ff12;color:#20bfff}.nav button.active{border-left:2px solid #11b9ff}.count{margin-left:auto;background:#00b7ff15;color:#1dbfff;border-radius:10px;padding:4px 7px;font-size:10px}.admin{margin-top:auto;padding:18px 14px}.admin-card{padding:11px;border:1px solid #ffffff0f;border-radius:12px;display:flex;align-items:center;gap:9px;color:#68778a}.avatar{width:34px;height:34px;border-radius:50%;background:#121c29;color:#27bfff;display:flex;align-items:center;justify-content:center}.admin-info{flex:1}.admin-info strong{display:block;font-size:11px;color:#dfe6ef}.admin-info span{font-size:9px}.main{margin-left:250px;width:calc(100% - 250px)}.header{height:88px;padding:0 34px;border-bottom:1px solid #ffffff0f;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;background:#070b12e8;backdrop-filter:blur(14px);z-index:5}.breadcrumb{font-size:10px;color:#566478;margin-bottom:4px}.header h1{margin:0;font-size:22px}.profile{display:flex;align-items:center;gap:10px}.profile-text strong{display:block;font-size:11px}.profile-text span{font-size:9px;color:#637184}.content{padding:30px 34px;max-width:1700px;margin:auto}.welcome{min-height:205px;padding:30px 35px;margin-bottom:20px;border:1px solid #00b7ff1a;border-radius:18px;background:radial-gradient(circle at 80% 40%,#00b7ff1f,transparent 28%),linear-gradient(115deg,#0c1b2af5,#090f18f5);position:relative;overflow:hidden}.small{color:#17bfff;font-size:9px;font-weight:700;letter-spacing:2px}.welcome h2{margin:10px 0 8px;font-size:30px}.welcome p{max-width:520px;margin:0;color:#6e7d91;font-size:12px;line-height:1.7}.robot{position:absolute;right:10%;top:50%;transform:translateY(-50%);width:145px;height:145px;display:flex;align-items:center;justify-content:center;color:#20bfff}.orbit{position:absolute;border:1px solid #00b7ff2e;border-radius:50%;width:145px;height:72px}.o1{transform:rotate(30deg)}.o2{transform:rotate(-30deg)}.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:15px;margin-bottom:20px}.card,.panel{background:#0b111a;border:1px solid #ffffff0f;border-radius:14px}.card{padding:19px;min-height:135px}.stat-top{display:flex;justify-content:space-between}.stat-icon{width:37px;height:37px;border-radius:10px;background:#00b7ff14;color:#16baff}.change{color:#1dc78b;font-size:9px;display:flex;align-items:center}.value{margin-top:15px;font-size:25px;font-weight:750}.muted{color:#68778a;font-size:10px;margin-top:3px}.grid{display:grid;grid-template-columns:minmax(0,1.7fr) minmax(320px,1fr);gap:15px}.panel{overflow:hidden}.panel-head{padding:20px 21px;display:flex;justify-content:space-between}.panel-label{display:block;color:#566578;font-size:8px;font-weight:700;letter-spacing:1.3px;margin-bottom:5px}.panel h3{margin:0;font-size:14px}.view{border:0;background:none;color:#16baff;font-size:9px;display:flex;align-items:center;cursor:pointer}.event{min-height:77px;padding:12px 21px;display:flex;align-items:center;gap:15px;border-top:1px solid #ffffff0a}.date{width:43px;height:50px;background:#111a26;border:1px solid #ffffff0d;border-radius:9px;display:flex;flex-direction:column;align-items:center;justify-content:center}.date strong{font-size:17px}.date span{color:#15baff;font-size:7px;font-weight:700}.event-info{flex:1}.event-info strong{display:block;font-size:11px;margin-bottom:5px}.event-info span{color:#5f6e80;font-size:9px}.tag{color:#5e7084;border:1px solid #ffffff12;border-radius:5px;padding:5px 7px;font-size:8px}.lab{padding:8px 21px 18px;display:flex;align-items:center;gap:18px}.circle{width:105px;height:105px;border-radius:50%;border:7px solid #122436;outline:2px solid #00b7ff66;outline-offset:-9px;display:flex;flex-direction:column;align-items:center;justify-content:center}.circle b{font-size:22px}.circle small{color:#617083;font-size:8px}.lab-detail{flex:1}.lab-detail .line{display:flex;justify-content:space-between;color:#647488;font-size:9px;margin-bottom:9px}.progress{height:5px;background:#151e29;border-radius:10px;overflow:hidden}.progress span{display:block;height:100%;background:linear-gradient(90deg,#087dcc,#12c3ff)}.lab-detail p{font-size:8px;color:#657487}.resource{min-height:44px;padding:0 21px;display:flex;align-items:center;gap:10px;border-top:1px solid #ffffff0a;color:#788698;font-size:9px}.resource strong{margin-left:auto;color:#bfc9d5}.resource-icon,.project-icon{width:27px;height:27px;border-radius:7px;background:#101925;color:#14baff}.project-heading,.project-row{display:grid;grid-template-columns:1.6fr 1fr 1.2fr .8fr;align-items:center;gap:14px;padding:0 21px}.project-heading{min-height:39px;color:#526174;font-size:7px;letter-spacing:1px}.project-row{min-height:65px;border-top:1px solid #ffffff0a}.project-name{display:flex;align-items:center;gap:9px}.project-name strong{font-size:10px}.project-progress{display:flex;align-items:center;gap:8px}.project-progress .progress{flex:1}.project-progress strong{font-size:8px;color:#9caabb}.status{width:max-content;padding:5px 7px;border-radius:5px;color:#19bf8c;background:#19bf8c12;font-size:7px}.request{min-height:65px;padding:10px 21px;display:flex;align-items:center;gap:10px;border-top:1px solid #ffffff0a}.request-avatar{width:32px;height:32px;border-radius:50%;background:#132237;color:#20baff;display:flex;align-items:center;justify-content:center;font-size:8px;font-weight:700}.request-info{flex:1}.request-info strong{display:block;font-size:9px}.request-info span{color:#596a7d;font-size:7px}.approve{border:0;background:#1bc98f12;color:#1bc98f;border-radius:7px;padding:7px;cursor:pointer}.full{width:100%;height:45px;border:0;background:#0d151f;color:#14baff;font-size:8px;cursor:pointer}.bottom{display:grid;grid-template-columns:repeat(3,1fr);gap:15px;margin-top:15px}.mini{min-height:70px;padding:13px 15px;background:#0b111a;border:1px solid #ffffff0f;border-radius:12px;display:flex;align-items:center;gap:11px}.mini-icon{width:35px;height:35px;border-radius:9px;background:#101a26;color:#13b9ff;display:flex;align-items:center;justify-content:center}.mini div:nth-child(2){flex:1}.mini span{display:block;color:#5e6e81;font-size:8px;margin-bottom:4px}.mini strong{font-size:9px}@media(max-width:1150px){.stats{grid-template-columns:repeat(2,1fr)}.grid{grid-template-columns:1fr}.bottom{grid-template-columns:1fr}}@media(max-width:850px){.sidebar{transform:translateX(-100%);transition:.25s}.sidebar.open{transform:translateX(0)}.main{margin-left:0;width:100%}.content{padding:22px 20px}.stats{grid-template-columns:repeat(2,1fr)}}@media(max-width:600px){.header{padding:0 16px}.content{padding:18px 13px}.stats{grid-template-columns:1fr}.robot{opacity:.3}.project-heading,.project-row{grid-template-columns:1fr 1fr}.project-heading span:nth-child(2),.project-row .team,.project-heading span:nth-child(3),.project-row .project-progress,.project-heading span:nth-child(4),.project-row .status{display:none}.tag{display:none}.bottom{grid-template-columns:1fr}}
`;

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");
  const menus = [
    ["Dashboard", Gauge], ["Members", Users], ["Projects", FolderKanban],
    ["Events", CalendarDays], ["Competitions", ShieldCheck],
    ["Resources", Package], ["Blogs", Lightbulb],
  ];

  return (
    <>
      <style>{css}</style>
      <div className="rtf">
        {open && <div className="overlay" onClick={() => setOpen(false)} />}
        <aside className={`sidebar ${open ? "open" : ""}`}>
          <div className="logo"><div className="logo-icon"><Bot size={27}/></div><div><h2>RTF</h2><span>Robo Tech Forum</span></div><button onClick={()=>setOpen(false)} style={{marginLeft:"auto",background:"none",border:0,color:"#aaa"}}><X size={19}/></button></div>
          <div className="label">MAIN MENU</div>
          <nav className="nav">
            {menus.map(([name, Icon]) => <button key={name} className={active===name?"active":""} onClick={()=>{setActive(name);setOpen(false)}}><Icon size={19}/><span>{name}</span>{name==="Events"&&<span className="count">7</span>}</button>)}
          </nav>
          <div className="label">SYSTEM</div>
          <nav className="nav"><button><Bell size={19}/><span>Notifications</span></button><button><Settings size={19}/><span>Settings</span></button></nav>
          <div className="admin"><div className="admin-card"><div className="avatar"><CircleUserRound size={24}/></div><div className="admin-info"><strong>RTF Admin</strong><span>Administrator</span></div><MoreHorizontal size={18}/></div></div>
        </aside>
        <main className="main">
          <header className="header"><div><div className="breadcrumb">RTF / Dashboard</div><h1>Dashboard</h1></div><div className="profile"><Bell size={20}/><div className="avatar"><CircleUserRound size={22}/></div><div className="profile-text"><strong>RTF Admin</strong><span>Admin</span></div></div></header>
          <div className="content">
            <section className="welcome"><span className="small">ROBO TECH FORUM</span><h2>Welcome back,<br/><span>RTF Admin</span></h2><p>Monitor your forum, projects, events and robotics activities from one place.</p><div className="robot"><div className="orbit o1"/><div className="orbit o2"/><Bot size={82} strokeWidth={1.2}/></div></section>
            <section className="stats">{stats.map(([title,value,change,Icon])=><div className="card" key={title}><div className="stat-top"><div className="stat-icon"><Icon size={21}/></div><span className="change">{change}<ArrowUpRight size={14}/></span></div><div className="value">{value}</div><div className="muted">{title}</div></div>)}</section>
            <section className="grid">
              <div className="panel"><div className="panel-head"><div><span className="panel-label">SCHEDULE</span><h3>Upcoming Events</h3></div><button className="view">View all <ChevronRight size={15}/></button></div>{events.map(e=><div className="event" key={e[2]}><div className="date"><strong>{e[0]}</strong><span>{e[1]}</span></div><div className="event-info"><strong>{e[2]}</strong><span>{e[3]} • {e[4]}</span></div><span className="tag">{e[5]}</span></div>)}</div>
              <div className="panel"><div className="panel-head"><div><span className="panel-label">RESOURCES</span><h3>Lab Status</h3></div><Activity size={19} color="#1dbbff"/></div><div className="lab"><div className="circle"><b>86%</b><small>Available</small></div><div className="lab-detail"><div className="line"><span>Lab Capacity</span><strong>24 / 28</strong></div><div className="progress"><span style={{width:"86%"}}/></div><p>● Lab is currently operational</p></div></div>{resources.map(([name,available,Icon])=><div className="resource" key={name}><div className="resource-icon"><Icon size={16}/></div><span>{name}</span><strong>{available}</strong></div>)}</div>
              <div className="panel"><div className="panel-head"><div><span className="panel-label">DEVELOPMENT</span><h3>Active Projects</h3></div><button className="view">View all <ChevronRight size={15}/></button></div><div className="project-heading"><span>PROJECT</span><span>TEAM</span><span>PROGRESS</span><span>STATUS</span></div>{projects.map(p=><div className="project-row" key={p[0]}><div className="project-name"><div className="project-icon"><Bot size={16}/></div><strong>{p[0]}</strong></div><span className="team muted">{p[1]}</span><div className="project-progress"><div className="progress"><span style={{width:`${p[2]}%`}}/></div><strong>{p[2]}%</strong></div><span className="status">{p[3]}</span></div>)}</div>
              <div className="panel"><div className="panel-head"><div><span className="panel-label">ACTION REQUIRED</span><h3>Pending Requests</h3></div><span className="count">14</span></div>{requests.map(r=><div className="request" key={r[0]}><div className="request-avatar">{r[3]}</div><div className="request-info"><strong>{r[0]}</strong><span>{r[1]} • {r[2]}</span></div><button className="approve"><CheckCircle2 size={15}/></button></div>)}<button className="full">Manage all requests <ArrowUpRight size={14}/></button></div>
            </section>
            <section className="bottom"><div className="mini"><div className="mini-icon"><Wrench size={19}/></div><div><span>Equipment Maintenance</span><strong>3 items need attention</strong></div><ChevronRight size={17}/></div><div className="mini"><div className="mini-icon"><Lightbulb size={19}/></div><div><span>Latest Announcement</span><strong>Project submissions open now</strong></div><ChevronRight size={17}/></div><div className="mini"><div className="mini-icon"><Activity size={19}/></div><div><span>Forum Activity</span><strong>42 new activities today</strong></div><ChevronRight size={17}/></div></section>
          </div>
        </main>
      </div>
    </>
  );
}
