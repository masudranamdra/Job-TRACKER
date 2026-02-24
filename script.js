        let jobs = [
            {
                id: 1,
                company: "Mobile First Corp",
                role: "React Native Developer",
                location: "Remote",
                type: "Full-time", 
                salary: "$130,000 - $175,000",
                desc: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
                status: "not applied"
            },


            {
                id: 2,
                company: "WebFlow Agency",
                role: "Web Designer & Developer",
                location: "Los Angeles, CA",
                type: "Part-time", 
                salary: "$80,000 - $120,000",
                desc: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends",
                status: "not applied"
            },


            {
                id: 3,
                company: "DataViz Solutions",
                role: "Data Visualization Specialist",
                location: "Boston, MA",
                type: "Full-time", 
                salary: "$115,000 - $145,000",
                desc: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
                status: "not applied"
            },


            {
                id: 4,
                company: "CloudFirst Inc",
                role: "Backend Developer",
                location: "Seattle, WA",
                type: "Full-time",
                salary: "$140,000 - $190,000",
                desc: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
                status: "not applied"
            },


            {
                id: 5,
                company: "Innovation Labs",
                role: "UI/UX Engineer",
                location: "Austin, TX",
                type: "Full-time",
                salary: "$110,000 - $150,000",
                desc: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
                status: "not applied"
            },


            {
                id: 6,
                company: "MegaCorp Solutions",
                role: "JavaScript Developer",
                location: "New York, NY",
                type: "Full-time",
                salary: "$120,000 - $170,000",
                desc: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development.",
                status: "not applied"
            },


            {
                id: 7,
                company: "StartupXYZ",
                role: "Full Stack Engineer",
                location: "Remote",
                type: "Full-time",
                salary: "$120,000 - $160,000", 
                desc: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
                status: "not applied"
            },


            {
                id: 8,
                company: "TechCorp Industries",
                role: "Senior Frontend Developer",
                location: "San Francisco, CA",
                type: "Full-time",
                salary: "$150,000 - $195,000",
                desc: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. Lead a talented team.",
                status: "not applied"
            }
        ];



        // all button ver changing korsi 
        let currentTab = 'all';

        // DOM Elements OR all Id htmal page
        const jobsContainer = document.getElementById('jobs-container');
        const dashTotal = document.getElementById('number-counting-jobs-total');
        const dashInterview = document.getElementById('total-joba-interview-number');
        const dashRejected = document.getElementById('total-joba-rejected-number');
        const sectionCount = document.getElementById('job-count-number');
        const tabBtns = document.querySelectorAll('.tab-btn');



        // logic function using dome elements and 
function render() {

    // array ta j job asa tar change ver 
    let displayJobs = jobs;




    // tab onujai filter lora
    if (currentTab === "interview") {
        displayJobs = jobs.filter(function (job) {
            return job.status === "interview";
        });
    }
    if (currentTab === "rejected") {
        displayJobs = jobs.filter(function (job) {
            return job.status === "rejected";
        });
    }





    // update blank page and function colling kora

    updateBlankPage();
    sectionCount.textContent = displayJobs.length;

    // if job na thaka tahola Blank page thakaba / jodi job thaka tahola job dhakaba ba return korba
    if (displayJobs.length === 0) {
        jobsContainer.innerHTML = `
            <div class="bg-white p-12 rounded-lg shadow-sm border border-slate-200 text-center">
        <img src="./img/assignment_7959593 1.png" class="mx-auto" >
        <h3 class="text-lg font-bold text-slate-800">No jobs available</h3>
        <p class="text-slate-500 mt-1 text-sm">
            Check back soon for new job opportunities.
        </p>
    </div>
        `;
        return;
    }





    // ager content delete korba
    jobsContainer.innerHTML = "";

    // loop babohar kora card make kora

    for (let abal = 0; abal < displayJobs.length; abal++) {

        let job = displayJobs[abal];

        // Badge logic
        let badgeText = "NOT APPLIED";
        let badgeClass = "bg-slate-100 text-slate-600";

        if (job.status === "interview") {
            badgeText = "INTERVIEW";
            badgeClass = "bg-emerald-100 text-emerald-700";
        }

        if (job.status === "rejected") {
            badgeText = "REJECTED";
            badgeClass = "bg-rose-100 text-rose-700";
        }






        // card style kora hoisa abong card ar data ( ver${ job = var / .id = job id} ) ar maddoma add kora hoisa (#ata Bin image asa)

        jobsContainer.innerHTML += `
            <div class="bg-white p-6 rounded-lg shadow-sm border border-slate-200 relative group" data-id="${job.id}">
                    <button class="btn-delete absolute top-4 right-4 text-slate-300 hover:text-rose-500 transition-colors">
                    
                        <img src="./img/litter.png" alt="" class="h-8 mt-2 mx-2.5 border-blue-200 rounded-[90%] p-1 border-[2px]  hover:text-rose-500 hover:border-red-500 ">

                    </button>
                
                <h3 class="font-bold text-lg text-slate-800">${job.company}</h3>
                <p class=" text-slate-500">${job.role}</p>
                <p class="text-slate-500 text-sm mb-2"> ${job.location}  •  ${job.type}  •  ${job.salary}</p>

                <span class="inline-block px-2 py-1 border-blue-600 rounded text-xs font-semibold ${badgeClass}">
                    ${badgeText}
                </span>

                <p class="text-slate-800 text-sm mt-2">${job.desc}</p>






                <div class="flex gap-3 mt-4">
                    <button class="btn-interview border border-emerald-300 px-3 py-1 text-xs rounded">
                        Interview
                    </button>

                    <button class="btn-rejected border border-rose-300 px-3 py-1 text-xs rounded">
                        Rejected
                    </button>
                </div>

            </div>
        `;
    }
}




// card use kora blank page upbate kora ar tona updateBlankPage nama function babohar kora hoisa

function updateBlankPage() {
    dashTotal.textContent = jobs.length;
    dashInterview.textContent = jobs.filter(job => job.status === 'interview').length;
    dashRejected.textContent = jobs.filter(job => job.status === 'rejected').length;
}



// button clack korla akta page thaka arik ta page a neya janba

tabBtns.forEach(btn => {
    btn.addEventListener('click', (changeBlankPage) => {
        tabBtns.forEach(b => {
            b.classList.remove('tab-active');
            b.classList.add('tab-inactive');
        });
        changeBlankPage.target.classList.remove('tab-inactive');
        changeBlankPage.target.classList.add('tab-active');

        currentTab = changeBlankPage.target.dataset.tab;
        render();
    });
});








// Card Actions (Interview, Reject, Delete) kora
// using veriable event in this code


jobsContainer.addEventListener('click', (event) => {
    const card = event.target.closest('div[data-id]');
    if (!card) return;

    const jobId = parseInt(card.dataset.id);
    const jobIndex = jobs.findIndex(job => job.id === jobId);


    if (event.target.closest('.btn-interview')) {
        jobs[jobIndex].status = 'interview';
        render();
    }

    else if (event.target.closest('.btn-rejected')) {
        jobs[jobIndex].status = 'rejected';
        render();
    }

    else if (event.target.closest('.btn-delete')) {
        jobs.splice(jobIndex, 1);
        render();
    }
});

render();
