// JavaScript Document
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "College of Engineering Building") {
         $("#feedback").css("color","red");
         $("#feedback").html("Yes, faculty and academic advisors are located in the College of Engineering building");
      }

      if ($(this).attr("id") == "Student Services Center") {
         $("#feedback").css("color","green");
         $("#feedback").html("Yes, you may find financial aid, advising, and tutoring at the Student Services Center");
      }

      if ($(this).attr("id") == "Student Wellness Center") {
         $("#feedback").css("color","red");
         $("#feedback").html("Yes, you may find the health center and other wellness support at the Student Wellness Center");
      }
	   
	   if ($(this).attr("id") == "Student Recreation and Aquatic Center") {
         $("#feedback").css("color","red");
         $("#feedback").html("Yes, you may find the gym and other wellness services at the Student Recreation and Aquatic Center");
      }


  $("#feedback").css("backgroundColor","yellow");
	   $('#myModal').modal("show");

$('#myModal').modal("show");

   });
}); //end main jQuery function