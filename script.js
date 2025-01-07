// Add event listener to heart element
document.addEventListener("DOMContentLoaded", function() {
    let heart = document.querySelector(".heart");

    heart.addEventListener("animationend", function() {
        // Add animation to text element
        let text = document.querySelector(".text");
        text.style.animation = "text-appear 2s forwards";
    });
});
