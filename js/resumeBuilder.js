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

//var formattedContactGeneric = HTMLcontactGeneric.replace("%contact%" , bio.contacts);
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
         "location": "Kazhakutton",
         "degree": "B.Tech",
         "majors": "Computer Sciecne and Engineering",
         "dates": "2013-2017",
         "url": "http://marian.ac.in" },
    
    {    "name": "The School of the Good Shepherd",
         "location": "Aakulam",
         "degree": "Higher Secondary",
         "majors": "Science stream",
         "dates": "2011-2013",
         "url": "http://goodshepherdtvm.org"} 
    ],
  
  "onlineCourses": [
    {    "title": "Front-End Developer Nano-degree program",
         "school": "Udacity.",
         "dates": "2017",
         "url": "http://www.udacity.com/nanodegrees/nd001"}
    ]
    
};


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
    ],    
 // display :function ();
}
for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
//var formattedWorkStart = HTMLworkStart.replace("%data%" , work.jobs);
//$("#main").append(formattedWorkStart);
var formattedWorkEmployer = HTMLworkEmployer.replace("%data%" , work.jobs[job].employer);
//$("#main").append(formattedWorkEmployer);
var formattedWorkTitle = HTMLworkTitle.replace("%data%" , work.jobs[job].title);
//$("#main").append(formattedWorkTitle);
var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
$(".work-entry:last").append(formattedWorkEmployerTitle);

var formattedWorkDates = HTMLworkDates.replace("%data%" , work.jobs[job].dates);
$(".work-entry:last").append(formattedWorkDates);
var formattedWorkDescription = HTMLworkDescription.replace("%data%" , work.jobs[job].description);
$(".work-entry:last").append(formattedWorkDescription);
var formattedWorkLocation = HTMLworkLocation.replace("%data%" , work.jobs[job].location);
$(".location-text:last").append(formattedWorkLocation);
}
  
 var projects ={
   "projects": [
    {     "title": "Smart Car Parking system using IoT", 
          "dates": "2016-2017",  
          "description": "Allows users to check the availability of parking slots in the parking area and pre-book the slot using an android application",
          "url" : ""
    },
         
    {     "title": "Payroll System for employees", 
          "dates": "2015",  
          "description": "Allows to keep track of employee deatils and calculates salary for each employee.",
          "url" : "",
    }
    ],
   //display function()
}
 
 var formattedProjectStart = HTMLprojectStart.replace("%data%" , project.projects);
$("#main").append(formattedProjectStart);
var formattedProjectTitle = HTMLprojectTitle.replace("%data%" , project.projects[0].title);
$("#main").append(formattedProjectTitle);
var formattedProjectYear = HTMLprojectDates.replace("%data%" , project.projects[0].year);
$("#main").append(formattedProjectYear);
var formattedProjectDescription = HTMLprojectDescription.replace("%data%" , project.projects[0].description);
$("#main").append(formattedProjectDescription);
var formattedProjectUrl = HTMLprojectUrl.replace("%data%" , project.projects[0].url);
$("#main").append(formattedProjectUrl);

var formattedProjectTitle = HTMLprojectTitle.replace("%data%" , project.projects[1].title);
$("#main").append(formattedProjectTitle);
var formattedProjectYear = HTMLprojectDates.replace("%data%" , project.projects[1].year);
$("#main").append(formattedProjectYear);
var formattedProjectDescription = HTMLprojectDescription.replace("%data%" , project.projects[1].description);
$("#main").append(formattedProjectDescription);
var formattedProjectUrl = HTMLprojectUrl.replace("%data%" , project.projects[1].url);
$("#main").append(formattedProjectUrl);

    
    
    
    
    
    
