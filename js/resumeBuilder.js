var name = "Matt Marzillo";
var formattedName = HTMLheaderName.replace("%data%",name);
var role = "Data Scientist";
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var bio = {
  "name": "Matt Marzillo",
  "Role": "Advanced Analytics Consultant",
  "Contacts": {
    "Phone": "708-837-1631",
    "email": "mmarzillo@gmail.com"
  },
  "Welcome Message": "Hello!",
  "Skills": ["Full Stack BI Developer ETL Report Development Architecture","Advanced Analytics R Python and SAS","Strong Healthcare Experience"
],
"Picture": "NA"
};
$("#header").prepend(bio.Role);
