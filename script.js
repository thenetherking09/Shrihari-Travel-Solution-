// --- DARK MODE LOGIC ---
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

// Check local storage for saved theme, or use system preference as fallback
const currentTheme = localStorage.getItem('theme');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Function to apply theme
function setTheme(isDark) {
    if (isDark) {
        document.body.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun'); // Show sun icon in dark mode
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.removeAttribute('data-theme');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon'); // Show moon icon in light mode
        localStorage.setItem('theme', 'light');
    }
}

// Initialize theme on load
if (currentTheme === 'dark') {
    setTheme(true);
} else if (currentTheme === 'light') {
    setTheme(false);
} else if (prefersDarkScheme.matches) {
    // If no saved preference, follow system preference
    setTheme(true);
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const isCurrentlyDark = document.body.getAttribute('data-theme') === 'dark';
    setTheme(!isCurrentlyDark);
});

// Automatically listen for system theme changes (e.g. phone goes into dark mode at sunset)
prefersDarkScheme.addEventListener('change', (e) => {
    // Only auto-switch if the user hasn't manually forced a preference
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches);
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

// --- STICKY HEADER EFFECT ---
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

// --- WHATSAPP FORM SUBMISSION LOGIC ---
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
