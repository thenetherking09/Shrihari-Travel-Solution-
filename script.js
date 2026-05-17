// --- DARK MODE LOGIC ---
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

const currentTheme = localStorage.getItem('theme');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(isDark) {
    if (isDark) {
        document.body.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun'); 
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.removeAttribute('data-theme');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon'); 
        localStorage.setItem('theme', 'light');
    }
}

if (currentTheme === 'dark') {
    setTheme(true);
} else if (currentTheme === 'light') {
    setTheme(false);
} else if (prefersDarkScheme.matches) {
    setTheme(true);
}

themeToggle.addEventListener('click', () => {
    const isCurrentlyDark = document.body.getAttribute('data-theme') === 'dark';
    setTheme(!isCurrentlyDark);
});

prefersDarkScheme.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches);
    }
});

// --- SMART VIBE / PACKAGE SELECTION LOGIC ---
function selectVibe(vibeName) {
    document.getElementById('quote-section').scrollIntoView({ behavior: 'smooth' });
    const destInput = document.getElementById('q-dest');
    
    // Automatically fill the destination box
    destInput.value = vibeName;
    
    // Highlight effect
    destInput.style.transition = "background-color 0.5s ease";
    if (document.body.getAttribute('data-theme') === 'dark') {
        destInput.style.backgroundColor = "#4a3b22"; 
    } else {
        destInput.style.backgroundColor = "#fff3cd"; 
    }
    
    setTimeout(() => {
        destInput.style.backgroundColor = "var(--input-bg)";
    }, 1500);
}

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

// --- WHATSAPP BUBBLE LOGIC ---
function closeWaBubble() {
    document.getElementById('wa-bubble').classList.add('hidden');
}

// Auto-hide the bubble after 10 seconds to not be intrusive
setTimeout(() => {
    closeWaBubble();
}, 10000);

// --- WHATSAPP FORM SUBMISSION LOGIC ---
function submitFormToWhatsApp(event) {
    event.preventDefault();

    const name = document.getElementById('q-name').value;
    const dest = document.getElementById('q-dest').value;
    const dates = document.getElementById('q-dates').value; // Now a Date picker
    const budget = document.getElementById('q-budget').value; // New Budget field
    const adults = document.getElementById('q-adults').value;
    const kids = document.getElementById('q-kids').value;

    const message = `Hello Shrihari Travel Solution!%0A%0A` + 
                    `I would like to request a custom travel quote. Here are my details:%0A%0A` +
                    `*Name:* ${name}%0A` +
                    `*Destination:* ${dest}%0A` +
                    `*Start Date:* ${dates}%0A` +
                    `*Approx Budget:* ${budget}%0A` +
                    `*Number of Adults:* ${adults}%0A` +
                    `*Number of Children:* ${kids}%0A%0A` +
                    `Please let me know the next steps to start planning. Thank you!`;

    const phoneNumber = "919371104629";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappUrl, '_blank');
}
