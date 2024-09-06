const icon = document.getElementById("icon")

icon.addEventListener("click", () => {
    document.body.classList.toggle('darkTheme')

    if (document.body.classList.contains('darkTheme')) {
        icon.classList = "fa-solid fa-sun fa-2x"
    } else {
        icon.classList = "fa-solid fa-moon fa-2x"
    }

    localStorage.setItem("theme", document.body.classList.contains('darkTheme') ? 'darkTheme' : '')
    localStorage.setItem("icon", icon.classList.contains('fa-sun') ? 'fa-solid fa-sun fa-2x' : 'fa-solid fa-moon fa-2x')
})

if (localStorage.getItem("theme") === 'darkTheme') {
    document.body.classList.add('darkTheme')
    icon.classList = "fa-solid fa-sun fa-2x"
} else {
    icon.classList = "fa-solid fa-moon fa-2x"
}