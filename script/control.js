let currentTab = "all";

const jobs = [
 {id:1,company:"Mobile First Corp",position:"React Developer",location:"Remote",type:"Full Time",salary:"$130k",desc:"Build mobile apps",status:"all"},
 {id:2,company:"WebFlow Agency",position:"UI Designer",location:"USA",type:"Part Time",salary:"$90k",desc:"Design interfaces",status:"all"},
 {id:3,company:"TechWave",position:"Frontend Dev",location:"Remote",type:"Full Time",salary:"$110k",desc:"Build UI",status:"all"},
 {id:4,company:"PixelSoft",position:"Backend Dev",location:"UK",type:"Full Time",salary:"$120k",desc:"API work",status:"all"},
 {id:5,company:"CodeLab",position:"JS Dev",location:"Remote",type:"Contract",salary:"$100k",desc:"JS projects",status:"all"},
 {id:6,company:"DesignPro",position:"UX Designer",location:"Canada",type:"Part Time",salary:"$85k",desc:"UX work",status:"all"},
 {id:7,company:"NextGen",position:"Fullstack",location:"Remote",type:"Full Time",salary:"$140k",desc:"Full stack apps",status:"all"},
 {id:8,company:"SoftTech",position:"QA Engineer",location:"India",type:"Full Time",salary:"$70k",desc:"Testing apps",status:"all"}
];

function renderJobs(){
 const list=document.getElementById("jobList");
 const empty=document.getElementById("emptyState");
 list.innerHTML="";

 let filtered=currentTab==="all"?jobs:jobs.filter(j=>j.status===currentTab);

 document.getElementById("jobCount").innerText=filtered.length+" jobs";

 if(filtered.length===0){
   empty.classList.remove("hidden");
   return;
 }else{
   empty.classList.add("hidden");
 }

 filtered.forEach(j=>{
 list.innerHTML+=`
 <div class="card bg-base-100 shadow p-4 relative">
 <button onclick="removeJob(${j.id})" class="absolute right-3 top-3 btn btn-xs btn-circle">🗑</button>
 <h2 class="font-bold">${j.company}</h2>
 <p>${j.position}</p>
 <p>${j.location} • ${j.type} • ${j.salary}</p>
 <p class="text-sm text-gray-500">${j.desc}</p>
 <div class="mt-3 flex gap-2">
 <button class="btn btn-sm btn-info" onclick="setStatus(${j.id},'interview')">Interview</button>
 <button class="btn btn-sm btn-error" onclick="setStatus(${j.id},'rejected')">Rejected</button>
 </div>
 </div>`;
 });

 updateCounts();
}

function setStatus(id,status){
 const job=jobs.find(j=>j.id===id);
 job.status=status;
 renderJobs();
}

function removeJob(id){
 const index=jobs.findIndex(j=>j.id===id);
 jobs.splice(index,1);
 renderJobs();
}

function setTab(tab){
 currentTab=tab;
 document.querySelectorAll(".tab").forEach(t=>t.classList.remove("tab-active"));
 event.target.classList.add("tab-active");
 renderJobs();
}

function updateCounts(){
 document.getElementById("totalCount").innerText=jobs.length;
 document.getElementById("interviewCount").innerText=jobs.filter(j=>j.status==="interview").length;
 document.getElementById("rejectedCount").innerText=jobs.filter(j=>j.status==="rejected").length;
}

renderJobs();