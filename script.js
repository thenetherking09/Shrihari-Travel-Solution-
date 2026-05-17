// --- WHATSAPP FORM SUBMISSION LOGIC ---
function submitFormToWhatsApp(event) {
    event.preventDefault();

    const name = document.getElementById('q-name').value;
    const dest = document.getElementById('q-dest').value;
    const dateInput = document.getElementById('q-dates').value; // Now a date picker
    const budget = document.getElementById('q-budget').value;   // New Budget Field
    const adults = document.getElementById('q-adults').value;
    const kids = document.getElementById('q-kids').value;

    // Format the date slightly nicely if provided
    const formattedDate = dateInput ? new Date(dateInput).toLocaleDateString('en-GB') : "Not Specified";

    const message = `Hello Shrihari Travel Solution!%0A%0A` + 
                    `I would like to request a custom travel quote. Here are my details:%0A%0A` +
                    `*Name:* ${name}%0A` +
                    `*Destination:* ${dest}%0A` +
                    `*Start Date:* ${formattedDate}%0A` +
                    `*Approx. Budget:* ${budget}%0A` +
                    `*Adults:* ${adults}%0A` +
                    `*Children:* ${kids}%0A%0A` +
                    `Please let me know the next steps to start planning. Thank you!`;

    const phoneNumber = "919371104629";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappUrl, '_blank');
}

// Ensure selectVibe updates appropriately for the Trending Packages buttons as well
function selectVibe(vibeName) {
    document.getElementById('quote-section').scrollIntoView({ behavior: 'smooth' });
    const destInput = document.getElementById('q-dest');
    destInput.value = vibeName;
    
    destInput.style.transition = "background-color 0.5s ease";
    if (document.body.getAttribute('data-theme') === 'dark') {
        destInput.style.backgroundColor = "#4a3b22"; 
    } else {
        destInput.style.backgroundColor = "#fff3cd"; 
    }
    setTimeout(() => { destInput.style.backgroundColor = "var(--input-bg)"; }, 1500);
}
