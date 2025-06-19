// Show More button
document.addEventListener("DOMContentLoaded", function () {
    const showMoreBtn = document.getElementById("showMoreBtn");
    const moreContent = document.getElementById("more-content");
  
    showMoreBtn.addEventListener("click", function () {
      if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
        showMoreBtn.textContent = "Show Less";
      } else {
        moreContent.style.display = "none";
        showMoreBtn.textContent = "Show More";
      }
    });
  
    // Theme Switcher
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    themeToggleBtn.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
      document.body.classList.toggle("light-mode");
    });
  });
  
  function updateCard() {
    document.getElementById("dynamicTitle").textContent = "Updated Project";
    document.getElementById("dynamicText").textContent = "This card has been updated dynamically using JavaScript!";
    document.getElementById("dynamicImg").src = "images/project4.jpg"; // Ensure this image exists
  }
  
  // Wait until DOM is ready
$(document).ready(function () {
    // Slide toggle box
    $("#toggleBoxBtn").click(function () {
      $("#funBox").slideToggle();
    });
  
    // Fade image
    $("#fadeBtn").click(function () {
      $("#funImage").fadeToggle();
    });
  
    // Load content from quote.txt
    $("#loadQuoteBtn").click(function () {
      $("#quoteContainer").load("quote.txt");
    });
  });
  
  $(document).ready(function () {
    // Live Greeting
    $("#nameInput").on("keyup", function () {
      const name = $(this).val();
      $("#greeting").text(name ? `Hello, ${name}! 👋` : "");
    });
  
    // Hover to change background
    $("#hoverBox").hover(
      function () {
        $(this).css("background-color", "#28a745");
      },
      function () {
        $(this).css("background-color", "#007bff");
      }
    );
  
    // Animate box on click
    $("#animateBox").click(function () {
      $(this).slideUp(300).slideDown(300);
    });
  
    // Theme toggle
    $("#themeToggleBtn").click(function () {
      $("body").toggleClass("dark-mode light-mode");
    });
  });
  