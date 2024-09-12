// Static text typing effect
const staticText = document.getElementById("static-text");
const staticString = "This is typing animation";

// Variables for static text typing
let staticCharIndex = 0;

// Function for static text typing
const staticTypeEffect = () => {
    const currentChar = staticString.substring(0, staticCharIndex);
    staticText.textContent = currentChar;

    if (staticCharIndex < staticString.length) {
        staticCharIndex++;
        setTimeout(staticTypeEffect, 100); // Adjust speed as necessary
    } else {
        // Remove the blinking cursor from the static text
        staticText.classList.remove("blinking");

        // Start dynamic text typing after static text is fully typed
        setTimeout(typeEffect, 500);
    }
};

staticTypeEffect();

// Dynamic text typing effect
const dynamicText = document.getElementById("dynamic-text");
const words = ["Content", "Subject Matter", "Information", "Details"];

// Variables for dynamic text typing
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

// Function for dynamic text typing
const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 100); // Typing speed
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100); // Deleting speed
    } else {
        // Toggle the isDeleting state
        isDeleting = !isDeleting;
        if (!isDeleting) {
            wordIndex = (wordIndex + 1) % words.length; // Go to the next word
        }
        setTimeout(typeEffect, 1200); // Pause before typing the next word
    }
};
