document.getElementById("customer-register-btn").addEventListener("click", function() {
    if (document.getElementById("customer-register-form").style.display === "block") {
      document.getElementById("customer-register-form").style.display = "none";
    } else {
      document.getElementById("customer-register-form").style.display = "block";
    }
  });
  
  document.getElementById("company-register-btn").addEventListener("click", function() {
    if (document.getElementById("company-register-form").style.display === "block") {
      document.getElementById("company-register-form").style.display = "none";
    } else {
      document.getElementById("company-register-form").style.display = "block";
    }
  });
  document.getElementById("customer-register-close-btn").addEventListener("click", function() {
    document.getElementById("customer-register-form").style.display = "none";
  });
  
  document.getElementById("company-register-close-btn").addEventListener("click", function() {
    document.getElementById("company-register-form").style.display = "none";
  });
    