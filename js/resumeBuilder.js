/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var bio={
  "name" : "Aswathy Anilkumar",
  "role" : "Web-Develepor",
  "contacts" : {
        "mobile" : "+9100119002",
        "email" : "aswathy.anilkumar@gmail.com",
        "github" : "aswathy-anilkumar",
        "location" : "India"
        },
  "welcomeMessage" : "If hardwork is weapon, then success will be your slave",
  "skills" : ["Positve", "Flexible nature", "Good organizer", "Programming"],
  "bioPic" : "images/fry.jpg"
};

bio.display=function(){

  var formattedName = HTMLheaderName.replace("%data%" , bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%" , bio.role);
  var formattedBioPic = HTMLbioPic.replace("%data%" , bio.bioPic);

  var formattedMobile = HTMLmobile.replace("%data%" , bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%" , bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%" , bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%" , bio.contacts.location);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%" , bio.welcomeMessage);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $('#header').append(formattedBioPic);

  $('#topContacts').append(formattedMobile);
  $('#footerContacts').append(formattedMobile);
  $('#topContacts').append(formattedEmail);
  $('#footerContacts').append(formattedEmail);
  $('#topContacts').append(formattedGithub);
  $('#footerContacts').append(formattedGithub);
  $('#header').append(formattedWelcomeMsg);
  $("#header").append(HTMLskillsStart);

  bio.skills.forEach(function(skills) {
    var formattedSkill = HTMLskills.replace("%data%", skills);
    $("#skills").append(formattedSkill);
});

};

bio.display();

var education = {
  "schools": [
    {    "name": "Marian Engineering College",
          "dates": "2013-2017",
         "location": "Kazhakutton",
         "degree": "B.Tech",
         "majors": "Computer Sciecne and Engineering",
         "url": "http://marian.ac.in" },

    {    "name": "The School of the Good Shepherd",
          "dates": "2011-2013",
         "location": "Aakulam",
         "degree": "Higher Secondary",
         "majors": "Science stream",
         "url": "http://goodshepherdtvm.org"}
    ],

  "onlineCourses": [
    {    "title": "Front-End Developer Nano-degree program",
         "school": "Udacity.",
         "dates": "2017",
         "url": "http://www.udacity.com/nanodegrees/nd001"}
    ]

};

education.display = function(){
    education.schools.forEach(function(school){
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLschoolName.replace("%data%",school.name)+HTMLschoolDegree.replace("%data%",school.degree));
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%",school.dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%",school.location));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%",school.majors));
    });
    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course){
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLonlineTitle.replace("%data%",course.title)+HTMLonlineSchool.replace("%data%",course.school));
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%",course.dates));
        $(".education-entry:last").append(HTMLonlineURL.replace("%data%",course.url));
    });
};
education.display();


var work = {
  "jobs": [
    {    "employer": "Infosys",
         "title": "Systems Engineer",
         "location": "Mysore",
         "dates": "in progress",
         "description": "As a systems engineer"
    },
    {    "employer": "Devu's Kitchen",
         "title": "Program Director and Video-editor",
         "location": "Kerala",
         "dates": "2015-2017",
         "description": "Schedules the episodes and edit the videos for each episode."
    }
    ]

};

function displayWork() {

	if(work.jobs.length > 0) {

		$("#workExperience").append(HTMLworkStart);

		for (var i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formatteddates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formatteddates);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

}

displayWork();

 var projects ={
   "projects": [
    {     "title": "Smart Car Parking system using IoT",
          "dates": "2016-2017",
          "description": "Allows users to check the availability of parking slots in the parking area and pre-book the slot using an android application",
          "images" : ["images/1.png"],
     	  "url" : ""
    },

    {     "title": "Payroll System for employees",
          "dates": "2015",
          "description": "Allows to keep track of employee deatils and calculates salary for each employee.",
          "url" : "",
    }
    ]
   //display function()
};

projects.display = function() {
	if(projects.projects.length > 0) {
		for (var i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for (var img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}


		}
	}
};

projects.display();


$("#mapDiv").append(googleMap);

    
    
    
    
    
    
