// Add event listener to love-text element
document.addEventListener("DOMContentLoaded", function() {
    let loveText = document.querySelector(".love-text");
   
    // Add mouseover event listener
    loveText.addEventListener("mouseover", function() {
     this.style.animation = "heartbeat 1s infinite";
     this.style.color = "#00ff00";
    });
   
    // Add mouseout event listener
    loveText.addEventListener("mouseout", function() {
     this.style.animation = "heartbeat 2s infinite";
     this.style.color = "#ff0000";
    });
   });
   