document.addEventListener('DOMContentLoaded', function () {
  let icons = document.querySelectorAll('ion-icon');
  
  icons.forEach(function(icon) {
    icon.onclick = function() {
      icon.classList.toggle('active');
    }
  });
});
