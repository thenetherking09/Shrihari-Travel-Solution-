// --- DARK MODE LOGIC ---
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const icon = darkModeToggle.querySelector('i');

// Check LocalStorage to see if the user previously enabled dark mode
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

// Toggle Dark Mode when the button is clicked
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        // Turn Dark Mode ON
        localStorage.setItem('darkMode', 'enabled');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        // Turn Dark Mode OFF
        localStorage.setItem('darkMode', 'disabled');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// --- MOBILE MENU LOGIC ---
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

function closeMenu() {
    const navLinks = document.getElementById('nav-links');
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
}

// --- STICKY HEADER SHRINK EFFECT ---
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.style.padding = '5px 20px';
    } else {
        header.style.padding = '10px 20px';
    }
});

// --- FAQ ACCORDION LOGIC ---
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        question.classList.toggle('active');
        const answer = question.nextElementSibling;
        
        if (question.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = null;
        }
    });
});

// --- WHATSAPP FORM SUBMISSION ---
function submitFormToWhatsApp(event) {
    event.preventDefault();

    const name = document.getElementById('q-name').value;
    const dest = document.getElementById('q-dest').value;
    const dates = document.getElementById('q-dates').value;
    const style = document.getElementById('q-style').value;
    const adults = document.getElementById('q-adults').value;
    const kids = document.getElementById('q-kids').value;

    const message = `Hello Shrihari Travel Solution!%0A%0A` + 
                    `I would like to request a custom travel quote. Here are my details:%0A%0A` +
                    `*Name:* ${name}%0A` +
                    `*Destination:* ${dest}%0A` +
                    `*Travel Dates:* ${dates}%0A` +
                    `*Travel Style:* ${style}%0A` +
                    `*Number of Adults:* ${adults}%0A` +
                    `*Number of Children:* ${kids}%0A%0A` +
                    `Please let me know the next steps to start planning. Thank you!`;

    const phoneNumber = "919371104629";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappUrl, '_blank');
        }
