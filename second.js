document.addEventListener("DOMContentLoaded", function() {
    var submitButton = document.getElementById("submit-button");
    var submitStatus = document.getElementById("submit-status");
    var complaintInput = document.getElementById("complaint-input");
  
    submitButton.addEventListener("click", function() {
      var complaint = complaintInput.value.trim();
  
      if (complaint !== "") {
        submitStatus.textContent = "Submitted";
        submitStatus.classList.add("submitted");
  
        // Clear input after 2 seconds
        setTimeout(function() {
          submitStatus.textContent = "";
          submitStatus.classList.remove("submitted");
          complaintInput.value = "";
        }, 2000);
      }
    });
  });
  