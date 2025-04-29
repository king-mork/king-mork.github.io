function checkDarkMode() {
    // On page load, check and apply appropriate theme
    let darkMode = (localStorage.getItem("darkmode") === 'true');

    let body = document.body;

    (darkMode) ? body.classList.add("dark-mode") : body.classList.remove("dark-mode");
}

window.checkDarkMode = checkDarkMode;