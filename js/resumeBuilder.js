var formattedName = HTMLheaderName.replace("%data%","Matt Marzillo");
var formattedRole = HTMLheaderRole.replace("%data%","Data Scientist");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
