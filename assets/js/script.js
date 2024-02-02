// BACKTOTOP
function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', function() {
    const backButton = document.querySelector('.back-to-Top');
    if (window.scrollY > 0) {
        backButton.style.display = 'block';
    } else {
        backButton.style.display = 'none';
    }
});

// Side bar
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

document.addEventListener("DOMContentLoaded", () => {
    if(window.innerWidth <= 950) {
        const navList = document.getElementById("nav-ul");

        navList.addEventListener("click", () => {
            document.getElementById("mySidenav").style.width = "0";
        });
    }
});

// Adjust the scroll position when clicking on the navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionID = this.getAttribute('href');
        const section = document.querySelector(sectionID);

        let headerOffset = document.querySelector('header').offsetHeight;
        let aosOffset = 85.5;

        if (window.innerWidth < 950) {
            headerOffset = 0;
        }
        if (section) {
            const offsetTop = section.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: offsetTop - headerOffset - aosOffset,
                behavior: 'smooth'
            });
        }
    });
});

// Checking if the user changing the width by inspecting: Mobile to deskopt mode
let isMobile = window.innerWidth <= 950;
let hasReloaded = false;

window.addEventListener('resize', reloadPageOnResize);

function reloadPageOnResize() {
    const newIsMobile = window.innerWidth <= 950;

    if (isMobile !== newIsMobile && !hasReloaded) {
        location.reload();
        hasReloaded = true;
    } else if (isMobile !== newIsMobile) {
        hasReloaded = false;
    }
    isMobile = newIsMobile;
}

reloadPageOnResize();