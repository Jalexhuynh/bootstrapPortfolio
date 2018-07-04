$(document).ready(function(){
	// setBindings();
	toggleResume();
});

// Sets a click event listener for each nav bar link.
// function setBindings() {
// 	$("nav a").click(function(e){
// 		e.preventDefault();
// 		var sectionID = e.currentTarget.id + "Section";
// 		if(sectionID == "contactSection") {
// 			$("html, body").animate({scrollTop: $("#" + sectionID).offset().top -50}, 1000)
// 			} else {
// 			$("html, body").animate({scrollTop: $("#" + sectionID).offset().top -70}, 1000)
// 			};
// 		$("nav a").removeClass("active");
// 		$(this).addClass("active");
// 	})
// }

function toggleResume() {
	$(".section-title").click(function(e){
		$(this).next().slideToggle("slow");
	})
}