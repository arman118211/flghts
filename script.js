document.addEventListener("DOMContentLoaded", function() {
    // Typed text animation
    const typedText = ["Find Your Perfect Flight", "Explore New Destinations", "Travel the World"];
    let textIndex = 0;
    let charIndex = 0;
    const element = document.getElementById("typed");

    function type() {
        if (charIndex < typedText[textIndex].length) {
            element.innerHTML += typedText[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            element.innerHTML = element.innerHTML.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            textIndex = (textIndex + 1) % typedText.length;
            setTimeout(type, 500);
        }
    }

    setTimeout(type, 500);

    // Responsive Menu Toggle
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar ul');

    menuIcon.addEventListener('click', () => {
        navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
    });
});
