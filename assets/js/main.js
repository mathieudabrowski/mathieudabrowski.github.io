/*Dark/Light theme */
window.addEventListener('DOMContentLoaded', () => {
    const bodyElement = document.body;
    const toggleCircle = document.querySelector('.toggle-circle');

    const githubLogo = document.getElementById('github-logo');
    const mailLogo = document.getElementById('mail-logo');
    const linkedinLogo = document.getElementById('linkedin-logo');

    // Disable the transition initially to prevent the sliding animation on page load
    toggleCircle.style.transition = 'none';

    // Retrieve the stored theme from localStorage
    const theme = localStorage.getItem('theme');

    // If the stored theme is "light", apply the light mode
    if (theme === 'light') {
        bodyElement.classList.add('light-mode');
        toggleCircle.classList.remove('moon-shape');
        updateLogos('light');
    } else {
        bodyElement.classList.add('dark-mode');
        updateLogos('dark');
        toggleCircle.classList.add('moon-shape');
    }

    // Re-enable the transition after a short delay to allow page load
    setTimeout(() => {
        toggleCircle.style.transition = 'transform 0.3s ease, background-color 0.3s ease';
    }, 100);
});

const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
    const bodyElement = document.body;
    const toggleCircle = document.querySelector('.toggle-circle');

    // Toggle the light-mode and dark-mode classes
    bodyElement.classList.toggle('light-mode');
    bodyElement.classList.toggle('dark-mode');

    // Update logos based on the new theme
    const newTheme = bodyElement.classList.contains('light-mode') ? 'light' : 'dark';
    updateLogos(newTheme);

    // Store the user's theme preference in localStorage
    if (bodyElement.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        toggleCircle.classList.remove('moon-shape');
    } else {
        localStorage.setItem('theme', 'dark');
        toggleCircle.classList.add('moon-shape');
    }
    localStorage.setItem('theme', newTheme);
});

// Function to switch logos based on the theme
function updateLogos(theme) {
    const githubLogo = document.getElementById('github-logo');
    const mailLogo = document.getElementById('mail-logo'); 
    const linkedinLogo = document.getElementById('linkedin-logo');
    if (theme === 'light') {
        githubLogo.src = '/assets/images/github_dark.png';
        mailLogo.src = '/assets/images/mail_dark.png';
        linkedinLogo.src = '/assets/images/linkedin_dark.png';
    } else {
        githubLogo.src = '/assets/images/github_light.png';
        mailLogo.src = '/assets/images/mail_light.png';
        linkedinLogo.src = '/assets/images/linkedin_light.png';
    }
}


/*Automatic footer date */
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
});

/*Hide body until CSS loaded */

/*window.addEventListener('load', function() {
    // Hide the preloader
    document.getElementById('preloader').style.display = 'none';

    // Show the main content
    document.querySelector('body').style.visibility = 'visible';
  });
*/

document.addEventListener('DOMContentLoaded', function () {
    document.body.style.visibility = 'visible';
  });
  /*
window.addEventListener('load', function() {
    document.body.style.visibility = 'visible';
  });*/



