var emailIcon = document.querySelector(".email-btn");
var envOpen = 'Submit <i class="fa fa-envelope-open" aria-hidden="true">'
var envClosed = 'Submit <i class="fa fa-envelope" aria-hidden="true">'

// Displays open envelope icon when mouse is hovering button
emailIcon.addEventListener('mouseover', function(event) {
  emailIcon.innerHTML = envOpen;
});
// Displays closed envelope icon when mouse is anywhere else
emailIcon.addEventListener('mouseout', function(event) {
  emailIcon.innerHTML = envClosed;
});

   window.onscroll = function(){myFunction()};
    var navbar = document.getElementById("navBar");
    var sticky = navbar.offsetTop;

    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");

      }
    }

    function navFunction() {
      var x = document.querySelector(".navContent");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    };
