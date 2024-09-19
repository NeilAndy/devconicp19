// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Dynamic greeting message based on the time of day
function setGreeting() {
    const currentTime = new Date().getHours();
    let greetingMessage = "Welcome to My Portfolio";

    if (currentTime < 12) {
        greetingMessage = "Good Morning!";
    } else if (currentTime < 18) {
        greetingMessage = "Good Afternoon!";
    } else {
        greetingMessage = "Good Evening!";
    }

    document.querySelector('.home h2').innerHTML = `<b>${greetingMessage}</b>`;
}

// Toggle visibility of contact info
function toggleContactInfo() {
    const contactSection = document.getElementById('contact');
    contactSection.classList.toggle('hidden');
}

document.addEventListener('DOMContentLoaded', function () {
    setGreeting();

    // Add toggle functionality to contact section
    const contactToggleBtn = document.createElement('button');
    contactToggleBtn.textContent = 'Show/Hide Contact Info';
    contactToggleBtn.style.margin = '20px';
    contactToggleBtn.addEventListener('click', toggleContactInfo);
    
    const contactSection = document.getElementById('contact');
    contactSection.parentNode.insertBefore(contactToggleBtn, contactSection);
});
