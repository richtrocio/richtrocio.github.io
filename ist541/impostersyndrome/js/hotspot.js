// JavaScript Document
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "one") {
         $("#feedback").css("color","green");
         $("#feedback").html("1. Know the signs. We often overlook the signs of impostor syndrome that come up in our day-to-day lives. However, recognizing these signs is the first step toward overcoming them.");
      }

      if ($(this).attr("id") == "two") {
         $("#feedback").css("color","green");
         $("#feedback").html("2. Know you're not alone.When you have impostor syndrome, some of the most important encouragement comes from realizing how many hugely successful people, both male and female, have built amazing careers even while regularly coping with it.");
      }

      if ($(this).attr("id") == "three") {
         $("#feedback").css("color","green");
         $("#feedback").html("3. Distinguish humility and fear. There's taking humility in your hard work and accomplishments, and then there's feeling overcome with fear because of them.");
      }
	   
	   if ($(this).attr("id") == "four") {
         $("#feedback").css("color","green");
         $("#feedback").html("4. Let go of your inner perfectionist. I recently wrote about how perfectionism, while helpful in certain contexts, can be a major roadblock for productivity. Turns out it can be a major roadblock for overcoming impostor syndrome, too.");
      }
   if ($(this).attr("id") == "five") {
         $("#feedback").css("color","green");
         $("#feedback").html("5. Be kind to yourself. Negative self-talk is a bad habit, and it can heavily influence our stress and anxiety levels.Being kind to yourself simply means changing the way you talk to yourself in your head by practicing positive self-talk.");
      }
	
   if ($(this).attr("id") == "six") {
         $("#feedback").css("color","green");
         $("#feedback").html("6. Track and measure your successes. When you feel like an impostor, one of the hardest things to grasp is how much of a role you have in your own successes. You might default them to luck or others' hard work, when in fact, your own work, knowledge, and preparation had a lot to do with it.");
      }
	   
   if ($(this).attr("id") == "seven") {
         $("#feedback").css("color","green");
         $("#feedback").html("7. Talk about it with a mentor and your manager. No one should suffer in silence. Sharing your thoughts and experiences with someone else will make you better equipped to deal with your impostor syndrome.");
      }
	   
 	if ($(this).attr("id") == "eight") {
         $("#feedback").css("color","green");
         $("#feedback").html("8. Say "yes" to new opportunities. It's impossible to say "yes" to everything, especially when you're feeling stressed or spread thin. But it's all too common for people who have impostor syndrome to turn down career-making opportunities because they don't feel like they'd do a good job.");
      }
	   
   	if ($(this).attr("id") == "nine") {
         $("#feedback").css("color","green");
         $("#feedback").html("9. Embrace the feeling, and use it. It's really hard to get rid of impostor syndrome completely -- especially if you've had it for years and years. That's why the best angle from which to tackle your impostor syndrome isn't getting rid of it completely; it's stopping it from hindering your success.");
      }
	    
  $("#feedback").css("backgroundColor","white");
	   $('#myModal').modal("show");

$('#myModal').modal("show");

   });
});