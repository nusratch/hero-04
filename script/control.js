var currentTab = "all";

var jobs = [
  {
    id: 1,
    company: "Mobile First Corp",
    position: "React Developer",
    location: "Remote",
    type: "Full Time",
    salary: "$130k",
    description: "Build mobile applications",
    status: "all"
  },
  {
    id: 2,
    company: "WebFlow Agency",
    position: "UI Designer",
    location: "USA",
    type: "Part Time",
    salary: "$90k",
    description: "Design beautiful interfaces",
    status: "all"
  },
  {
    id: 3,
    company: "Google",
    position: "Frontend Engineer",
    location: "Remote",
    type: "Full Time",
    salary: "$120k",
    description: "Work on modern web apps",
    status: "all"
  },
  {
    id: 4,
    company: "Amazon",
    position: "Backend Developer",
    location: "Canada",
    type: "Full Time",
    salary: "$110k",
    description: "Build scalable APIs",
    status: "all"
  },
  {
    id: 5,
    company: "Meta",
    position: "Product Designer",
    location: "Remote",
    type: "Contract",
    salary: "$95k",
    description: "Design user experiences",
    status: "all"
  },
  {
    id: 6,
    company: "Netflix",
    position: "Software Engineer",
    location: "USA",
    type: "Full Time",
    salary: "$140k",
    description: "Develop streaming features",
    status: "all"
  },
  {
    id: 7,
    company: "Microsoft",
    position: "Cloud Engineer",
    location: "UK",
    type: "Full Time",
    salary: "$125k",
    description: "Work with Azure cloud",
    status: "all"
  },
  {
    id: 8,
    company: "Spotify",
    position: "Mobile Developer",
    location: "Remote",
    type: "Part Time",
    salary: "$85k",
    description: "Build music apps",
    status: "all"
  }
];
function setTab(tab) {
  currentTab = tab;

  var tabs = document.getElementsByClassName("tab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("tab-active");
  }

  event.target.classList.add("tab-active");
  render();
}

function render() {
  var jobList = document.getElementById("jobList");
  var html = "";

  var interviewCount = 0;
  var rejectedCount = 0;
  var shown = 0;

  for (var i = 0; i < jobs.length; i++) {

    if (jobs[i].status === "interview") interviewCount++;
    if (jobs[i].status === "rejected") rejectedCount++;

    if (currentTab === "all" || jobs[i].status === currentTab) {

      shown++;

      html += `
      <div class="card bg-base-100 shadow p-5 relative">

        <button onclick="deleteJob(${jobs[i].id})"
        class="btn btn-sm btn-ghost absolute top-3 right-3">
        🗑
        </button>

        <h3 class="font-bold text-lg">${jobs[i].company}</h3>
        <p class="font-medium">${jobs[i].position}</p>

        <p class="text-sm opacity-70">
        ${jobs[i].location} • ${jobs[i].type} • ${jobs[i].salary}
        </p>

        <p class="text-sm mt-2 opacity-80">
        ${jobs[i].description}
        </p>

        <div class="flex gap-3 mt-4">
          <button class="btn btn-outline btn-success btn-sm"
          onclick="setStatus(${jobs[i].id},'interview')">
          Interview
          </button>

          <button class="btn btn-outline btn-error btn-sm"
          onclick="setStatus(${jobs[i].id},'rejected')">
          Rejected
          </button>
        </div>

      </div>
      `;
    }
  }

  if (shown === 0) {
    html = `
    <div class="text-center mt-10">
      <p class="text-lg font-semibold">No jobs available</p>
      <p class="text-sm opacity-60">Please try another tab</p>
    </div>
    `;
  }

  jobList.innerHTML = html;

  document.getElementById("totalCount").innerText = jobs.length;
  document.getElementById("interviewCount").innerText = interviewCount;
  document.getElementById("rejectedCount").innerText = rejectedCount;
  document.getElementById("jobCount").innerText = jobs.length + " jobs";
}

function setStatus(id, status) {
  for (var i = 0; i < jobs.length; i++) {
    if (jobs[i].id === id) {
      jobs[i].status = status;
    }
  }
  render();
}

function deleteJob(id) {
  var newJobs = [];
  for (var i = 0; i < jobs.length; i++) {
    if (jobs[i].id !== id) {
      newJobs.push(jobs[i]);
    }
  }
  jobs = newJobs;
  render();
}

render();