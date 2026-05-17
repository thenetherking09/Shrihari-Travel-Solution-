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

// --- LANGUAGE TOGGLE LOGIC ---
function toggleLanguage() {
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn.innerText === 'EN') {
        langBtn.innerText = 'MR';
        // Placeholder: Here you would integrate a translation library (like i18next) 
        // or toggle visibility of elements with data-lang="mr" and data-lang="en".
        alert("Marathi language selection activated. (Translation text to be loaded).");
    } else {
        langBtn.innerText = 'EN';
        alert("English language selection activated.");
    }
}

// --- SMART VIBE & PACKAGE SELECTION LOGIC ---
function selectVibe(vibeName) {
    // 1. Scroll down to the quote form smoothly
    document.getElementById('quote-section').scrollIntoView({ behavior: 'smooth' });
    
    // 2. Find the destination input box
    const destInput = document.getElementById('q-dest');
    
    // 3. Auto-fill it with the vibe/package they clicked
    destInput.value = vibeName;
    
    // 4. Highlight the box briefly so they see it was auto-filled
    destInput.style.transition = "background-color 0.5s ease";
    
    if (document.body.getAttribute('data-theme') === 'dark') {
        destInput.style.backgroundColor = "#4a3b22"; // Dark gold highlight
    } else {
        destInput.style.backgroundColor = "#fff3cd"; // Light yellow highlight
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

// --- WHATSAPP FORM SUBMISSION LOGIC (UPDATED WITH BUDGET) ---
function submitFormToWhatsApp(event) {
    event.preventDefault();

    const name = document.getElementById('q-name').value;
    const dest = document.getElementById('q-dest').value;
    const dateStart = document.getElementById('q-dates').value; // Now grabs from Date Picker
    const style = document.getElementById('q-style').value;
    const adults = document.getElementById('q-adults').value;
    const kids = document.getElementById('q-kids').value;
    const budget = document.getElementById('q-budget').value; // New Budget Field

    const message = `Hello Shrihari Travel Solution!%0A%0A` + 
                    `I would like to request a custom travel quote. Here are my details:%0A%0A` +
                    `*Name:* ${name}%0A` +
                    `*Destination:* ${dest}%0A` +
                    `*Expected Start Date:* ${dateStart}%0A` +
                    `*Travel Style:* ${style}%0A` +
                    `*Budget Per Person:* ${budget}%0A` +
                    `*Number of Adults:* ${adults}%0A` +
                    `*Number of Children:* ${kids}%0A%0A` +
                    `Please let me know the next steps to start planning. Thank you!`;

    const phoneNumber = "919371104629";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappUrl, '_blank');
}
