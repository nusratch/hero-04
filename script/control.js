let currentTab = "all";

let jobs = [
  {
    id: 1,
    company: "Mobile First Corp",
    position: "React Developer",
    location: "Remote",
    type: "Full Time",
    salary: "$130K",
    description: "Build mobile applications",
    status: "all"
  },
  {
    id: 2,
    company: "WebFlow Agency",
    position: "UI Designer",
    location: "USA",
    type: "Part Time",
    salary: "$90K",
    description: "Design beautiful interfaces",
    status: "all"
  },
  {
    id: 3,
    company: "Google",
    position: "Frontend Developer",
    location: "Remote",
    type: "Full Time",
    salary: "$150K",
    description: "Create web experiences",
    status: "all"
  },
  {
    id: 4,
    company: "Amazon",
    position: "Backend Developer",
    location: "UK",
    type: "Full Time",
    salary: "$140K",
    description: "Server side development",
    status: "all"
  },
  {
    id: 5,
    company: "Meta",
    position: "Software Engineer",
    location: "Remote",
    type: "Full Time",
    salary: "$160K",
    description: "Build scalable apps",
    status: "all"
  },
  {
    id: 6,
    company: "Netflix",
    position: "UX Designer",
    location: "Canada",
    type: "Part Time",
    salary: "$95K",
    description: "User experience design",
    status: "all"
  },
  {
    id: 7,
    company: "Microsoft",
    position: "Cloud Engineer",
    location: "Remote",
    type: "Full Time",
    salary: "$155K",
    description: "Cloud infrastructure",
    status: "all"
  },
  {
    id: 8,
    company: "Apple",
    position: "iOS Developer",
    location: "USA",
    type: "Full Time",
    salary: "$145K",
    description: "iOS applications",
    status: "all"
  }
];

function updateDashboard() {
  document.getElementById("totalCount").innerText = jobs.length;
  document.getElementById("interviewCount").innerText = jobs.filter(j => j.status === "interview").length;
  document.getElementById("rejectedCount").innerText = jobs.filter(j => j.status === "rejected").length;
}

function setTab(tab) {
  currentTab = tab;

  document.querySelectorAll(".tab").forEach(t => t.classList.remove("tab-active"));
  event.target.classList.add("tab-active");

  renderJobs();
}

function setStatus(id, status) {
  const job = jobs.find(j => j.id === id);

  if (job.status === status) {
    job.status = "all";
  } else {
    job.status = status;
  }

  updateDashboard();
  renderJobs();
}

function deleteJob(id) {
  jobs = jobs.filter(j => j.id !== id);
  updateDashboard();
  renderJobs();
}

function renderJobs() {
  const list = document.getElementById("jobList");
  list.innerHTML = "";

  const filtered =
    currentTab === "all"
      ? jobs
      : jobs.filter(j => j.status === currentTab);

  document.getElementById("jobCount").innerText = filtered.length + " jobs";

  if (filtered.length === 0) {
    list.className = "max-w-4xl mx-auto bg-white rounded-xl shadow min-h-[350px] flex flex-col items-center justify-center text-center";

    list.innerHTML = `
      <img src="jobs.png" class="w-20 mb-4">
      <h3 class="text-lg font-bold">No jobs available</h3>
      <p class="text-gray-500 text-sm">Check back later or add new applications</p>
    `;
    return;
  }

  list.className = "grid grid-cols-1 gap-4";

  filtered.forEach(job => {
    list.innerHTML += `
      <div class="card bg-base-100 shadow p-4 relative">

        <button onclick="deleteJob(${job.id})" class="absolute top-3 right-3 btn btn-xs btn-circle">🗑</button>

        <h3 class="font-bold">${job.company}</h3>
        <p>${job.position}</p>
        <p class="text-sm text-gray-500">${job.location} • ${job.type} • ${job.salary}</p>

        <p class="text-sm mt-2">${job.description}</p>

        <div class="mt-3 flex gap-2">
          <button class="btn btn-xs btn-info" onclick="setStatus(${job.id},'interview')">Interview</button>
          <button class="btn btn-xs btn-error" onclick="setStatus(${job.id},'rejected')">Rejected</button>
        </div>

      </div>
    `;
  });
}

updateDashboard();
renderJobs();