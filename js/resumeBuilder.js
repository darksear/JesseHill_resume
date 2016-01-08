

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
	"skills" : ["Awesome Abilities in Microsoft Office", "Amazing at Troubleshooting", "Programming", "Knows How to Work Smarter and Harder"],
	"bioPic": "images/197x148.gif"
};

//Work Experience
var work = {
	"jobs" : [
	{
		"employer" : "Papa John's",
		"title" : "Shift Manager",
		"dates" : "2001-2006",
		"location" : "Gilbert, AZ",
		"description" : "Official duties included work flow management, inventory management, and cash management.",
		"supervisor" : "Tom Larsen"
	},
	{
		"employer" : "Garlic Jim's",
		"title" : "Shift Manager",
		"dates" : "2006-2007",
		"location" : "Higley, AZ",
		"description" : "Official duties included cash management, and personnel management.",
		"supervisor" : "David Slack"
	},
	{
		"employer" : "2Wire",
		"title" : "Level 1 Support",
		"dates" : "2007-2009",
		"location" : "Tempe, AZ",
		"description" : "Helped AT&T customers with self installs of 2Wire(now Pace) aDSL modems.  Was a part of the 2Wire email team and helped compose 80% of their response templates for common issues.",
		"supervisor" : "Scott Mongrain"
	},
	{
		"employer" : "AT&T",
		"title" : "Tier 2 Support",
		"dates" : "2009-2010",
		"location" : "Tempe, AZ",
		"description" : "Helped install and repair techs troubleshoot issues that were preventing sync as well as wireless connection problems",
		"supervisor" : "Rick McCallum"
	},
	{
		"employer" : "Sears Outlet",
		"title" : "Merchandise Processor",
		"dates" : "2012-2015",
		"location" : "Gilbert, AZ",
		"description" : "Official duties are to ensure that product meets presentation guidelines, price new product, move new product to the floor and to remove sold products.  Unofficial dutes have been to fix incorrect signs using Word, Excel and even Acrobat.",
		"supervisor" : "Shani Rhodes"
	}
	]
};
//Projects
var projects = {
	"projects" : [
		{
			"title" : "Sample Project 1",
			"dates" : "2014",
			"description" : "blah blah blah blah blah blah blah blah blah blah blah blather some more",
			"images" : [
				"http://loremflickr.com/1757/1080/puppy",
				"http://loremflickr.com/1757/1080/puppy"
				]
		}
	]
}

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
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.cellNumber);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedPic);
$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedLocation);

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

function displayWork()
{
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedWorkdates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);


		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedWorkdates);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();
displayWork();
$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});



function inName(name) {
	name = name.trim.split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);