var bio = {
	"name" : "Al Darwiche",
	"role" : "WebMiddleWare Engineer",
	"contacts" : {
		"mobile" : "313-333-3333",
		"email" : "al.darwiche@gmail.com",
		"location" : "Detroit, MI",
		"twitter" : "ADarwiche",
		"github" : "aldarwiche"
			   },
	"welcomeMessage" : "Hi there I love javaScript",
	"skills" : [
		"Web Developer", "Certified Linux Admin", "Adobe Enterprise Manager", "Fishing"
				],
	"bioPic" : "images/me.jpg",
// object bio diplay function
	 displayBio:function() {
//format all variables and replace them 
	    var formattedName = HTMLheaderName.replace("%data%", bio.name);	
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
//Iterate thru the contact and replace 
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedAddress = HTMLlocation.replace("%data%", bio.contacts.location);
		var formatedPic = HTMLbioPic.replace("%data%", bio.bioPic);
		var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
//apprend or prepend the formatted data to the page				
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#header").append(formattedMobile);
		$("#header").append(formattedEmail);
		$("#header").append(formattedGitHub);
		$("#header").append(formattedTwitter);
		$("#header").append(formattedAddress);
		$("#header").append(formatedPic);
		$("#header").append(formattedWelcome);
		$("#header").append(HTMLskillsStart);
// Iterate through skills format them and append them to the page		
		for (var i=0; i<bio.skills.length; i++){
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
			};
		}
	};
	
var education = {
	"school": [
			{ 
			"name" : "My First School",
			"location" : "Boise, ID",
			"degree" : "BS",
			"major" : [
					"cs1", 
					"Math1"
					],
			"dates" : "02-2010"
			},
			{
			"name" : "My Second School",
			"location" : "Salt Lake City, UT",
			"degree" : "MS",
			"major" : [
					"cs2", 
					"Math2"
					],
			"dates" : "03-2003"
			}
				],
				
	"onlineCourses" : [
			{
			"title" : "javaScript syntax",
			"school" : "Udacity",
			"dates" : "05-2014",
			"url" : "https://udacity.com"
			}
				],
// education display function
		displaySchool:function () {
// iterate thru school array
			for (var i=0; i<education.school.length; i++) {
				$("#education").append(HTMLschoolStart);
			     var formattedSchoolName = HTMLschoolName.replace("%data%", education.school[i].name);
				 var formattedDegree = HTMLschoolDegree.replace("%data%", education.school[i].degree);
// add both strings school name and degree
				 var formattedSchoolDegree = formattedSchoolName + formattedDegree;
				$(".education-entry:last").append(formattedSchoolDegree);
				
				var formattedDates = HTMLschoolDates.replace("%data%", education.school[i].dates);
				$(".education-entry:last").append(formattedDates);
				var formattedLocation = HTMLschoolLocation.replace("%data%", education.school[i].location);
				$(".education-entry:last").append(formattedLocation);
// go thru every school and retrieve all majors				
				 if (education.school.length != 0) {
					for (var j=0; j<education.school[i].major.length; j++) {
					var formattedMajor = HTMLschoolMajor.replace("%data%", education.school[i].major[j]);
					$(".education-entry:last").append(formattedMajor);
													};
												}
											};
				},
// display course works 
		displayCourses:function () {
			for (var i=0; i<education.onlineCourses.length; i++) {
				$(".education-entry:last").append(HTMLonlineClasses);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineCourse = formattedOnlineTitle + formattedOnlineSchool;
				$(".education-entry:last").append(formattedOnlineCourse);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
				$(".education-entry:last").append(formattedOnlineDates);
				var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
				$(".education-entry:last").append(formattedOnlineUrl)
														};
				
				}
		};
			
var work = {
	"jobs": [
		{
		"employer" : "employer1",
		"title" : "title1",
		"location" : "Mountain View, CA",
		"dates" : "June 2008 - May 2012",
		"description" : "blahhhhh1 blah1 blah1"
		},
		{
		"employer" : "employer2",
		"title" : "title2",
		"location" : "Dearborn, MI",
		"dates" : "June 2012 - Present",
		"description" : "blahhhhh2 blah2 blah2"
		},
		{
		"employer" : "employer3",
		"title" : "title3",
		"location" : "Nashvile, TN",
		"dates" : "date3",
		"description" : "blahhhhh3 blah3 blah3"
		}
		],
//display function for object work
		displayWork:function () {
//iterate over jobs array
		for (var i=0; i<work.jobs.length; i++) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			$(".work-entry:last").append(formattedLocation);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
			$(".work-entry:last").append(formattedDescription);
			};
		}
	};
 
var projects = {
	"projects": [
		{
		"title": "sample project1",
		"dates": 2014,
		"description" : "hello this is my project1",
		"images": [
			"images/project11.jpg",
			"images/project12.jpg"
				]
			},
		{
		"title": "sample project2",
		"dates": 2012,
		"description" : "hello this is my project2",
		"images": [
			"images/project21.jpg",
			"images/project22.jpg"
				]
			}
			],
// display function for projects object
		displayProjects:function() {
// Iterate over the projects array
			for (var i=0; i<projects.projects.length; i++) {
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			$(".project-entry:last").append(formattedDates);
			var formattedDescription= HTMLprojectDescription.replace("%data%", projects.projects[i].description);
			$(".project-entry:last").append(formattedDescription);
// display images for every project
			if (projects.projects[i].images.length != 0) {
				//for (image in projects.projects[i].images ) {
					for (var j=0; j<projects.projects[i].images.length; j++) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
					$(".project-entry:last").append(formattedImage);
									}
								}
							}
						}
					};
					
bio.displayBio();
work.displayWork();
projects.displayProjects();
education.displaySchool();
education.displayCourses();
$("#mapDiv").append(googleMap);