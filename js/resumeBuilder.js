//Skills and Bio
var bio = {
	"name" : "Jesse Hill",
	"role" : "Beginnning Web Developer",
	"contacts" : {
		"mobile" :4803230885,
		"github" : "https://github.com/darksear",
		"email" : "djhjcs@gmail.com",
		"location" : "Gilbert, AZ"
	},
	"welcomeMessage": "This resume is more or less interactive.  Have fun.",
	"skills" : ["Awesome Abilities in Microsoft Office", "Amazing at Troubleshooting", "Programming", "Knows How to Work Smarter and Harder"],
	"bioPic": "http://loremflickr.com/197/148/dog",
	"display" : function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
		var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

		$("#header").append(formattedName, formattedRole, formattedMessage, formattedPic, formattedMobile, formattedEmail, formattedLocation);

		if(bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			bio.skills.forEach (function(skill) {
				var formattedSkill = HTMLskills.replace("%data%", skill);
				$("#skills").append(formattedSkill);
			});
		}
	}
};

bio.display();

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
	],
	"display" : function() {
		if (work.jobs.length > 0) {
			work.jobs.forEach(function(job) {
				$("#workExperience").append(HTMLworkStart);

				var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
				var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
				var formattedEmployerTitle = formattedEmployer + formattedTitle;
				var formattedWorkdates = HTMLworkDates.replace("%data%", job.dates);
				var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
				var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);

				$(".work-entry:last").append(formattedEmployerTitle);
				$(".work-entry:last").append(formattedWorkdates);
				$(".work-entry:last").append(formattedWorkLocation);
				$(".work-entry:last").append(formattedWorkDescription);
			});
		}
	}
};

work.display();

//Projects
var projects = {
	"projects" : [
		{
			"title" : "Sample Project 1",
			"dates" : "2014",
			"description" : "blah blah blah blah blah blah blah blah blah blah blah blather some more",
			"images" : [
				"http://loremflickr.com/400/375/dog",
				"http://loremflickr.com/400/375/dog"
				]
		}
	],
	"display" : function() {
	if (projects.projects.length > 0) {
		projects.projects.forEach (function (project) {
				$("#projects").append(HTMLprojectStart);

				var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
				$(".project-entry:last").append(formattedTitle);

				var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
				$(".project-entry:last").append(formattedDates);

				var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
				$(".project-entry:last").append(formattedDescription);

				if (project.images.length > 0) {
					project.images.forEach(function(image) {
						var formattedImage = HTMLprojectImage.replace("%data%", image);
						$(".project-entry:last").append(formattedImage);
					});
				}
			});
		}
	}
};

projects.display();

//Education
var education = { 
	"schools" : [
	{
		"name" : "Collins College",
		"degrees" : "Associates",
		"location" : "Tempe, AZ",
		"major" : "Network and PC Technology",
		"dates" : "2003-2005",
		"url" : "http://www.collinscollege.edu"
	},
	{
		"name" : "Gilbert High School",
		"degrees" : "High School Diploma",
		"location" : "Gilbert, AZ",
		"major" : "None",
		"dates" : "1998-2002",
		"url" : "http://www.gilbertschools.net/Domain/11"
	}
	],
	"onlineCourses" : [{
		"title" : "JavaScript Basics",
		"school" : "Udacity",
		"dates" : "12/15 - 1/16",
		"url" : "https://www.udacity.com/course/viewer#!/c-ud804-nd"
	}],

	"display" : function() {
		if (education.schools.length > 0) {
			$("#education").append(HTMLschoolStart);

			education.schools.forEach (function(school) {
				var formattedName = HTMLschoolName.replace("%data%", school.name);
				var formattedDegree = HTMLschoolDegree.replace("%data%", school.degrees);
				$(".education-entry:last").append(formattedName + " - " + formattedDegree);

				var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
				$(".education-entry:last").append(formattedDates);

				var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
				$(".education-entry:last").append(formattedLocation);

				var formattedMajor = HTMLschoolMajor.replace("%data%", school.major);
				$(".education-entry:last").append(formattedMajor);
			});
		}

		if (education.onlineCourses.length > 0) {
			$(".education-entry:last").append(HTMLonlineClasses);
			education.onlineCourses.forEach (function(course) {
				var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
				var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
				$(".education-entry:last").append(formattedTitle + " - " + formattedSchool);

				var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
				$(".education-entry:last").append(formattedDates);

				var formattedUrl = HTMLonlineURL.replace("%data%", course.url);
				$(".education-entry:last").append(formattedUrl);
			});
		}
	}
};

education.display();


$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.

function main() {
  return 'Hello, World!';
}

main();