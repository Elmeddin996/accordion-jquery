(function($) {
    
    var allPanels = $('.accordion > dd').hide();
      
    $('.accordion > dt > a').click(function() {
      allPanels.slideUp();
      $(this).parent().next().slideDown();
      return false;
    });
  
  })(jQuery);






  const acc = document.getElementsByClassName("accordion2");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}