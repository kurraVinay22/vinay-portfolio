
  // Smooth scrolling for navigation links
  document.addEventListener('DOMContentLoaded', function() {
    var scrollLinks = document.querySelectorAll('.w3-bar-item a');

    for (var scrollLink of scrollLinks) {
      scrollLink.addEventListener('click', function(e) {
        e.preventDefault();
        var targetId = this.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);

        window.scroll({
          top: targetElement.offsetTop - 50,
          behavior: 'smooth'
        });
      });
    }
  });

  // Form validation
  function validateForm() {
    var name = document.forms['contactForm']['Name'].value;
    var email = document.forms['contactForm']['Email'].value;
    var subject = document.forms['contactForm']['Subject'].value;
    var message = document.forms['contactForm']['Message'].value;

    if (name === '' || email === '' || subject === '' || message === '') {
      alert('All fields must be filled out');
      return false;
    }

    // Add more complex validation if needed

    return true;
  }

  
