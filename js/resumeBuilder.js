var = "Matt Marzillo";
var formattedName = HTMLheaderName.replace("%data%",name);
var role = "Data Scientist";
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var bio = {
  "name" : "Matt Marzillo",
  "Role" : "Advanced Analytics Consultant",
  "Contacts":{
  "Phone" : "708-837-1631",
  "E-mail" : "mmarzillo@gmail.com"},
  "Picture" : "NA",
  "Welcome Message" : "Hello!",
  "Skills" : ["Full Stack BI Developer (ETL, Report Development, Architecture)","Advanced Analytics (R, Python and SAS)","Strong Healthcare Experience"
]};
$("#header").prepend(bio);
