var formattedName = HTMLheaderName.replace("%data%","Matt Marzillo");
var role = "Data Scientist";
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
