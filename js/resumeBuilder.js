var name = "Matt Marzillo";
var formattedName = HTMLheaderName.replace("%data%",name);
var role = "Data Scientist";
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").append(formattedName);
$("#header").append(formattedRole);
var bio = {
  "name": "Matt Marzillo",
  "Role": "Advanced Analytics Consultant",
  "Phone": "708-837-1631",
  "email": "mmarzillo@gmail.com",
  "welcome": "Hello",
  "skills": ["Full Stack BI Developer ETL Report Development Architecture","Advanced Analytics R Python and SAS","Strong Healthcare Experience"
],
"Picture": "NA"
};
//var work = {};
//work.position = "Advanced Analytics Consultant";
//work.employer = "Slalom";
//work.years = 1;
//var education = {};
//education["name"] = "Northwestern University";
//education["years"] = "2012-2015";
//education["city"] = "Evanston, IL, US";
//$("#main").append(work["position"]);
//$("#main").append(education.name);

var education = {
    "schools": [
        {
            "name": "University of Illinois",
            "city": "Urbana,IL,US",
            "degree": "BS",
            "date": 2006,
            "major": [
                "Community Health"
            ],
            "url": "http://www.uiuc.edu/"
        },
        {
            "name": "Northwestern University",
            "city": "Evanston, IL, US",
            "degree": "MS",
            "date": 2015,
            "major": [
                "Predictive Analytics"
            ],
            "url": "http://www.northwestern.edu/"
        }
    ],
    "onlinecourses": [
        {
            "title": "JavaScript Syntax",
            "school": "Udacity",
            "date": 2015,
            "url": "https://www.udacity.com/",
        }
    ]
}
var work = {
    "jobs": [
        {
            "employer": "Slalom Consulting",
            "city": "Chicago,IL,US",
            "position": "Advanced Analytics Consultant",
            "years": "2014-2015",
            "url": "http://www.slalom.com/",
            "description":"Perform advanced analytics consulting works on projects primarily in the healthcare space. Projects include BI report development, BI Architecture, Modern Data Architecture, R and Python development"
        },
        {
            "employer": "Advocate Health Care",
            "city": "Oak Brook, IL, US",
            "position": "Sr Business Intelligence Consultant",
            "years": "2013-2014",
            "url": "http://www.advocatehealth.com/",
            "description":"Developed Predictive models in R and SAS to guide business decitions for Advocate operations and Supply Chain"
        },
        {
            "employer": "Northwestern University",
            "city": "Evanston, IL, US",
            "position": "Procurement Administrator",
            "years": "2009-2013",
            "url": "http://www.northwestern.edu/",
            "description":"Develop simple adhoc reports and analytics, manage contracting process"
        }
    ]
}
var projects = {
    "projects": [
        {
            "year": "2015",
            "city": "Chicago,IL,US",
            "position": "Report Developer/Programmer",
            "shortdesc": "Microsoft report development",
            "longdesc": "Convert 100+ reports from IBM Cognos reporting system to Microsoft Reporting system. This required writing complex SQL queries and developing SSRS reports"
        },
        {
            "year": "2015",
            "city": "Chicago,IL,US",
            "position": "BI Architect",
            "shortdesc": "BI assessment and architecture development",
            "longdesc": "Assess current data needs and sources, develop future state and path required to get meet the future needs of business"
        },
        {
            "year": "2014",
            "city": "Chicago,IL,US",
            "position": "Advanced Analytics Consultant/Developer",
            "shortdesc": "Patient Classification Algorithm",
            "longdesc": "Developed a classification algorithm that analyzes text from physician notes and classifies patients into specific procedural categories"
        }
    ]
}

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
  $("#skills").append(formattedSkill);
}
function displaywork(){
  for (job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].position);
    var formattedEmployerTitle = formattedEmployer + formattedTitle; 
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].years); 
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description); 
    $(".work-entry:last").append(formattedDescription);
  }
}
displaywork();
$(document).click(function(loc){
  var x = loc.pageX;
  var y = loc.pageY;
  
  logClicks(x,y);
});

function projects.display() {
  for (project in projects.projects){
    $("projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].shortdesc);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDate.replace("%data%",projects.projects[project].year);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].longdesc);
    $(".project-entry:last").append(formattedDescription);
    
   // if (projects.projects[project].images.length > 0) {
    //  for (image in projects.projects[project].images)
      //  var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
        //$(".project-entry:last").append(formattedImage);
    //}
  }
}

projects.display();
















