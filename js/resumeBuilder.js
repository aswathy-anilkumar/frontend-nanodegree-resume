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
  
  
}

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
    display: function ()
};
  
 var projects ={
   "projects": [
    {     "title": "Smart Car Parking system using IoT", 
          "dates": "2016-2017",  
          "description": "Allows users to check the availability of parking slots in the parking area and pre-book the slot using an android application",
          "url" : ""
    }
         
    {     "title": "Payroll System for employees", 
          "dates": "2015",  
          "description": "Allows to keep track of employee deatils and calculates salary for each employee.",
          "url" : "",
    }
    ],
    display: function()
    };
    
    
    
    
    
    
