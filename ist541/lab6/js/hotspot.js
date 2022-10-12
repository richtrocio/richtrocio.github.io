// JavaScript Document
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "College of Engineering Building") {
         $("#feedback").css("color","red");
         $("#feedback").html("Yes, faculty and academic advisors are located in this building");
      }

      if ($(this).attr("id") == "Student Services Center") {
         $("#feedback").css("color","green");
         $("#feedback").html("Student Services Center");
      }

      if ($(this).attr("id") == "Student Wellness Center") {
         $("#feedback").css("color","red");
         $("#feedback").html("Student Wellness Center");
      }
	   
	   if ($(this).attr("id") == "Student Recreation Ceneter") {
         $("#feedback").css("color","red");
         $("#feedback").html("Student Recreation Center");
      }


  $("#feedback").css("backgroundColor","yellow");
	   $('#myModal').modal("show");

$('#myModal').modal("show");

   });
}); //end main jQuery function