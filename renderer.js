$('a').click(async function (event) {
// Cancel event
event.preventDefault();
// Load page content
if(!$(this).attr("href").startsWith("https://")) {
	await $('body').load($(this).attr('href'));
	window.history.pushState("", "", $(this).attr("href"));
	console.log("Loaded")
} else {
	window.open($(this).attr('href'));
}
}); 