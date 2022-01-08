$(document).ready(function(){ 
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  console.log(width);
  var scroll_pos = 0;
  $(document).scroll(function() { 
      scroll_pos = $(this).scrollTop();
      if(scroll_pos < 290 && width < 420) {
          $('.language-right-text').css('color', '#2e0092');
      } else {
          $('.language-right-text').css('color', '#ff1d25');
      }
  });
});