$('a').click(function (event) {
// Cancel event
event.preventDefault();
// Load page content
window.history.pushState("", "", $(this).attr("href"));
$('body').load($(this).attr('href'));
}); 