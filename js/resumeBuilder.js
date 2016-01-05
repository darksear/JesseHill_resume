

//Skills and Bio
var bio = {
	"name" : "Jesse Hill",
	"age" : 32,
	"role" : "Beginnning Web Developer",
	"contacts" : {
		"cellNumber" :4803230885,
		"github" : "https://github.com/darksear",
		"email" : "djhjcs@gmail.com",
		"location" : "Gilbert, AZ"
	},
	"welcomMessage": "This resume is more or less interactive.  Have fun.",
	"skills" : ["Awesome Abilities in Microsoft Office", "Amazing at Troubleshooting", "Programming"],
	"bioPic": "/images/fry.jpg"
};

//Work Experience
var work = {
	"jobs" : [
	{
		"employer" : "Papa John's",
		"title" : "Shift Manager",
		"dates" : "2001-2006",
		"supervisor" : "Tom Larsen"
	},
	{
		"employer" : "Garlic Jim's",
		"title" : "Shift Manager",
		"dates" : "2006-2007",
		"supervisor" : "David Slack"
	},
	{
		"employer" : "2Wire",
		"title" : "Level 1 Support",
		"dates" : "2007-2009",
		"supervisor" : "Scott Mongrain"
	},
	{
		"employer" : "AT&T",
		"title" : "Tier 2 Support",
		"dates" : "2009-2010",
		"supervisor" : "Rick McCallum"
	},
	{
		"employer" : "Sears Outlet",
		"title" : "Merchandise Processor",
		"dates" : "2012-2015",
		"supervisor" : "Shani Rhodes"
	}
	]
};
//Projects


//Education
var education = { 
	"schools" : [
	{
		"name" : "Collins College",
		"city" : "Tempe, AZ",
		"major" : "Network and PC Technology",
		"years" : "2003-2005",
		"website" : "http://www.collinscollege.edu"
	},
	{
		"name" : "Gilbert High School",
		"city" : "Gilbert, AZ",
		"major" : "High School Diploma",
		"years" : "1998-2002",
		"website" : "http://www.gilbertschools.net/Domain/11"
	}
	]
	};
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}

for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);
}