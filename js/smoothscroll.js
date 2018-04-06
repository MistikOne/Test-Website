$("#navbar ul li a[href^='#']").on('click', function(e) {
    // prevent default anchor click behavior
    e.preventDefault();
    // store hash
    var hash = this.hash;
   // animate
    $('html, body').animate({
        scrollTop: $(hash).offset().top 
      }, 500, function(){
        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = hash;
      });
 });

 $("a.navbar-brand[href^='#']").on('click', function(e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
        scrollTop: $(hash).offset().top 
      }, 500, function(){
        window.location.hash = hash;
      });
 });