$('a').click(function (event) {
// Cancel event
event.preventDefault();
// Load page content
if(!$(this).attr("href").startsWith("https://")) {
	window.history.pushState("", "", $(this).attr("href"));
	$('body').load($(this).attr('href'));
} else {
	location.href = ($(this).attr('href'));
}
}); 