$(document).ready(function () {
    $(document).on("scroll", () => {
        if (scrollY > 450) {
        $("#aboutme").animate({
            opacity: "1",
            transition: "0.5s"
        }) 
    } else {
        console.log(scrollY)
    }
    })
})