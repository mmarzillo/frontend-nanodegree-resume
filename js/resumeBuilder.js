var name = "Matt Marzillo";
var formattedName = HTMLheaderName.replace("%data%",name);
var role = "Data Scientist";
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
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
var work = {};
work.position = "Advance Analytics Consultant";
work.employer = "Slalom";
work.years = 1;
var education = {};
education["name"] = "Northwestern University";
education["years"] = "2012-2015";
education["city"] = "Evanston, IL, US";
$("#main").append(work["position"]);
$("#main").append(education.name);
