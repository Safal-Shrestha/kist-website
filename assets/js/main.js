document.addEventListener("DOMContentLoaded", function() {
    // Your carousel logic here
    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Function to show specific slide
    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slide");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }

    // Assign globally so they can be used in the HTML `onclick` events
    window.currentSlide = function(n) {
        showSlides(slideIndex = n);
    }

    window.plusSlides = plusSlides; // Also assign plusSlides to the window

    // Counter Animation
    function animate(obj, initVal, lastVal, duration) {
        let startTime = null;

        // Function to update the number on each animation frame
        const step = (currentTime) => {
            if (!startTime) {
                startTime = currentTime;
            }

            const progress = Math.min((currentTime - startTime) / duration, 1);
            obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }

    const text1 = document.getElementById('0001');
    const text2 = document.getElementById('0002');
    const text3 = document.getElementById('0003');
    const text4 = document.getElementById('0004');

    // Start animation when the page is loaded
    animate(text1, 0, 16000, 1500);  // Adjust duration as needed
    animate(text2, 0, 9, 1500);
    animate(text3, 0, 29, 1500);
    animate(text4, 0, 70, 1500);
});
