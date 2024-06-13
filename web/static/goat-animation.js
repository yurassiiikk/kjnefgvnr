document.addEventListener("DOMContentLoaded", function() {
    const goatElement = document.getElementById("goat");
  
    // Show G.O.A.T. initially
    goatElement.style.opacity = 1;
  
    setTimeout(() => {
      // Transition to the full phrase
      goatElement.innerHTML = "Galactic<br>Outreach<br>And<br>Terraforming";
    }, 3000); // 3 seconds delay
  });
  