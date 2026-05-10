// Toggle mobile menu
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

// Close mobile menu on link click
function closeMenu() {
    const navLinks = document.getElementById('nav-links');
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
}

// Simple sticky header shrink effect on scroll
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.style.padding = '5px 20px';
    } else {
        header.style.padding = '10px 20px';
    }
});

// FAQ Accordion Logic
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // Toggle the active class on the button
        question.classList.toggle('active');
        
        // Find the corresponding answer panel
        const answer = question.nextElementSibling;
        
        // Toggle max-height to reveal/hide content smoothly
        if (question.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = null;
        }
    });
});

// Submit Form Data to WhatsApp
function submitFormToWhatsApp(event) {
    // Prevent the form from reloading the page
    event.preventDefault();

    // Gather all the data from the form
    const name = document.getElementById('q-name').value;
    const dest = document.getElementById('q-dest').value;
    const dates = document.getElementById('q-dates').value;
    const style = document.getElementById('q-style').value;
    const adults = document.getElementById('q-adults').value;
    const kids = document.getElementById('q-kids').value;

    // Create the message text
    const message = `Hello Shrihari Travel Solution!%0A%0A` + 
                    `I would like to request a custom travel quote. Here are my details:%0A%0A` +
                    `*Name:* ${name}%0A` +
                    `*Destination:* ${dest}%0A` +
                    `*Travel Dates:* ${dates}%0A` +
                    `*Travel Style:* ${style}%0A` +
                    `*Number of Adults:* ${adults}%0A` +
                    `*Number of Children:* ${kids}%0A%0A` +
                    `Please let me know the next steps to start planning. Thank you!`;

    // The WhatsApp number (Sujal's number)
    const phoneNumber = "919371104629";

    // Create the final WhatsApp API URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
                }
        
