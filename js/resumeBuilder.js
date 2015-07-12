//var name = "Matt Marzillo";
//var formattedName = HTMLheaderName.replace("%data%",name);
//var role = "Data Scientist";
//var formattedRole = HTMLheaderRole.replace("%data%",role);
//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);
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
            "url": "https://www.udacity.com/"
        }
    ]
}
var work = {
    "jobs": [
        {
            "employer": "Slalom Consulting",
            "city": "Chicago,IL,US",
            "position": "Advanced Analytics Consultant",
            "years": 1,
            "url": "http://www.slalom.com/"
        },
        {
            "name": "Advocate Health Care",
            "city": "Oak Brook, IL, US",
            "position": "Sr Business Intelligence Consultant",
            "years": 2,
            "url": "http://www.advocatehealth.com/"
        },
        {
            "name": "Northwestern University",
            "city": "Evanston, IL, US",
            "position": "Procurement Administrator",
            "years": 4,
            "url": "http://www.northwestern.edu/"
        }
    ]
}
var projects = {
    "project": [
        {
            "industry": "Healthcare - Pharmaceutical",
            "city": "Chicago,IL,US",
            "position": "Report Developer/Programmer",
            "shortdesc": "Microsoft report development",
            "longdesc": "Convert 100+ reports from IBM Cognos reporting system to Microsoft Reporting system. This required writing complex SQL queries and developing SSRS reports"
        },
        {
            "industry": "Healthcare - Payor",
            "city": "Chicago,IL,US",
            "position": "BI Architect",
            "shortdesc": "BI assessment and architecture development",
            "longdesc": "Assess current data needs and sources, develop future state and path required to get meet the future needs of business"
        },
        {
            "industry": "Healthcare - Provider",
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
