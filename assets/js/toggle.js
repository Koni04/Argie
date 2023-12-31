document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const toggleImg = document.getElementById('toggle-img');

    function updateDarkMode() {
        body.classList.add("transition");
        body.classList.add("dark-mode"); // Set dark mode by default themekj,h yt hr2e1dw1
        const isDarkMode = body.classList.contains("dark-mode");
        toggleImg.src = isDarkMode ? 'https://uploads-ssl.webflow.com/655cd88e6249ce66bb02cfbc/655da2e5d85dfa7bc6a65215_moon.svg' : 'https://assets-global.website-files.com/655cd88e6249ce66bb02cfbc/655d0474630f5c8d9e34d057_sun.svg';
    }

    updateDarkMode();

    function toggleMode() {
        body.classList.add("transition");
        body.classList.toggle("dark-mode");
        const isDarkMode = body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isDarkMode);
        toggleImg.src = isDarkMode ? 'https://uploads-ssl.webflow.com/655cd88e6249ce66bb02cfbc/655da2e5d85dfa7bc6a65215_moon.svg' : 'https://assets-global.website-files.com/655cd88e6249ce66bb02cfbc/655d0474630f5c8d9e34d057_sun.svg';
    }

    const toggleButton = document.getElementById('toggle-mode');
    toggleButton.addEventListener('click', toggleMode);
});
