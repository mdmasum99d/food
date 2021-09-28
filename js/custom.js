$(function(){
    $(window).scroll(function(){
      var scrolling = $(this).scrollTop();
      if(scrolling > 10){
        $("header").addClass("bg");
      }
      else{
        $("header").removeClass("bg");
      }
    });
    var typed = new Typed('.type', {
      strings: [
        'Always Choose Good'],
        typeSpeed: 100,
        loop:true,
    });
});