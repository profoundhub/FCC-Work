// PS : I Designed the Vitruvian man in Illustrator  -You can see it next to Da Vinci- Then i turned it in to SVG *THE REST OF THE CODE IS HTML/CSS Only *

// Inspeared From Rachouan Rejeb https://dribbble.com/shots/2621163-Leonardo-da-Vinci

// +600 CSS LINES
// 200 HTML LINES

$(document).ready(function() {   
  $("button").click(function() {
    $(".holder-black").slideUp("500");
    $("#m").slideUp("900");
    $(".mouth").animate({
      'height': '46px',
    });
        $(".Eyelashes-right").animate({
      'height': '12px'
    });
  });   
}); 
$(document).ready(function(){
   $("span").mouseenter(function(){
   	 var id = $(this).attr('id');
   	 $('a').removeClass('active');
   	 $("[href=#"+id+"]").addClass('active');
   });
});