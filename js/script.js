$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop() > 0){
            $('.top').show();
        }
        else{
            $('.top').hidden();
        }
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function(e){

        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        },

        500,
        'linear'

        );
    });

    function createSparkle() {
        let sparkle = $('<div class="sparkle"></div>');
        let posX = Math.random() * $(window).width();  // Random X position
        let posY = Math.random() * $(window).height(); // Random Y position
        let duration = Math.random() * 3 + 1; // Random animation duration (1s - 4s)
    
        sparkle.css({
            left: posX + "px",
            top: posY + "px",
            animationDuration: duration + "s",
        });
    
        $(".sparkle-container").append(sparkle);
    
        // Remove sparkle after animation ends
        setTimeout(() => {
            sparkle.remove();
        }, duration * 1000);
    }
    
    // Generate sparkles at intervals
    setInterval(createSparkle, 20); // Adjust timing for more or fewer sparkles
});    