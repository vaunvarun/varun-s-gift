window.onload = function() {
    const loveText = document.querySelector('.love-text');
    const proposalText = document.querySelector('.proposal-text');
  
    // Adding a slight delay to reveal the message after the heart pulse animation
    setTimeout(() => {
      loveText.style.opacity = 1;
    }, 1000);  // Wait for 1 second before showing "I Love You"
  
    setTimeout(() => {
      proposalText.style.opacity = 1;
    }, 2000);  // Wait for 2 seconds before showing "Will You Marry Me?"
  };
  