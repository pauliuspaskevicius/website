$(document).ready (function(){
  $("#subscribe-step-1").on("click", function (){
    ga('send', 'event', 'users', 'subscribe', 'landing-page', '1');
  })

  $("#subscribe-step-2").on("click", function (){
    ga('send', 'event', 'users', 'subscribe', 'landing-page', '2');
  });
});
