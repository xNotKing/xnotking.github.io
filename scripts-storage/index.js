document.addEventListener("DOMContentLoaded", () => {
    let theme = localStorage.getItem("theme")
    if (!theme) {
        localStorage.setItem("theme", "white")
    }
    if (theme === "dark") {
        document.querySelector(":root").style.setProperty("--nav-color", "#282936")
        document.querySelector(":root").style.setProperty("--nav-hover-color", "#15161c")
        document.querySelector(":root").style.setProperty("--body-color", "#35374a")
        document.querySelector("body").style.color = "#fff"
        document.querySelector("nav img").src = "/cat.jpg"
        document.querySelector("nav img").style.height = "100px"
        document.querySelector("nav img").style.borderRadius = "50%"
        document.querySelector("nav .githubsvg").src = "/images/github-dark.svg"
        document.querySelectorAll("a").forEach(element => {
            element.style.color = "#fff"
        })
    }
    if (theme === "custom") {
        document.querySelector(":root").style.setProperty("--nav-color", "rgba(183, 134, 29, 0.1)")
        document.querySelector(":root").style.setProperty("--nav-hover-color", "rgba(183, 134, 29, 0.3)")
        document.querySelector(":root").style.setProperty("--body-color", "rgb(251, 245, 233)")
    }
    const changeThemeButton = document.querySelector(".theme-change")
    changeThemeButton.addEventListener("click", () => {
        if (theme == "dark") {
            theme = "custom"
            localStorage.setItem("theme", "custom")
            document.querySelector(":root").style.setProperty("--nav-color", "rgba(183, 134, 29, 0.1)")
            document.querySelector(":root").style.setProperty("--nav-hover-color", "rgba(183, 134, 29, 0.3)")
            document.querySelector(":root").style.setProperty("--body-color", "rgb(251, 245, 233)")
            document.querySelector("body").style.color = "#000"
            document.querySelectorAll("a").forEach(element => {
                element.style.color = "#000"
            })
            document.querySelector("nav img").src = "/logo.png"
            document.querySelector("nav img").style.height = "120px"
            document.querySelector("nav img").style.borderRadius = "0%"
            document.querySelector("nav .githubsvg").src = "/github.svg"
            return
        }
        if (theme == "white") {
            theme = "dark"
            localStorage.setItem("theme", "dark")
            document.querySelector(":root").style.setProperty("--nav-color", "#282936")
            document.querySelector(":root").style.setProperty("--nav-hover-color", "#15161c")
            document.querySelector(":root").style.setProperty("--body-color", "#35374a")
            document.querySelector("body").style.color = "#fff"
            document.querySelector("nav img").src = "/cat.jpg"
            document.querySelector("nav img").style.height = "100px"
            document.querySelector("nav img").style.borderRadius = "50%"
            document.querySelector("nav .githubsvg").src = "/images/github-dark.svg"
            document.querySelectorAll("a").forEach(element => {
                element.style.color = "#fff"
            })
            return
        }
        if (theme == "custom") {
            theme = "white"
            localStorage.setItem("theme", "white")
            document.querySelector(":root").style.setProperty("--nav-color", "#ededed")
            document.querySelector(":root").style.setProperty("--nav-hover-color", "#e3e3e3")
            document.querySelector(":root").style.setProperty("--body-color", "#fafafa")
            document.querySelector("body").style.color = "#000"
            document.querySelectorAll("a").forEach(element => {
                element.style.color = "#000"
            })
            document.querySelector("nav img").src = "/logo.png"
            document.querySelector("nav img").style.height = "120px"
            document.querySelector("nav img").style.borderRadius = "0%"
            document.querySelector("nav .githubsvg").src = "/github.svg"
            return
        }
        
    })
    
})