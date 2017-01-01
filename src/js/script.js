$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            var hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
    
    /*$('.portfolio-modal').on("show.bs.modal", function () {
        $('.lazy-load').each(function(){
            var img = $(this);
            img.attr('src', img.data('src'));
        });
    });*/
    
    /*$("#submit").click(function() {
       $.ajax({
           type: "POST",
           url: "sendmail.php",
           data: $("form").serialize(),
           success: function() {
               $("#error").fadeOut(1000);
               $("form").fadeOut(1000);
               $("#messages").fadeIn(1000);
               $("#success").fadeIn(1000).css("display", "block");
           },
           error: function() {
               $("#error").fadeIn(1000);
           }
       });
       return false;
   });*/
});