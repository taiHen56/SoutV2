

function page1(){
document.getElementById("p1").style.display = "block";
document.getElementById("p2").style.display = "none";

document.getElementById("b1").classList.add("active");
document.getElementById("b2").classList.remove("active");
}

function page2(){
document.getElementById("p2").style.display = "block";
document.getElementById("p1").style.display = "none";

document.getElementById("b2").classList.add("active");
document.getElementById("b1").classList.remove("active");
}

function avancer(){
    var element = document.getElementById("b1");
    if (element.classList.contains("active")){
        page2();
    }else{
        page1();
    }
}

(function($){
    $('.navbar-toggler').click(function(e){
        e.preventDefault();
        
        if($('.nav-overlay').hasClass('actif')){
            $('.nav-overlay').toggleClass('actif');

            $('html, body').css({
    overflow: 'auto',
    height: 'auto'
});
$('.siteNom').css("display", "none");
        }else{
            $('.nav-overlay').toggleClass('actif');
            $('html, body').css({
    overflow: 'hidden',
    height: '100%'
});
 $('.siteNom').css("display", "block");
        }
        /**/
    })
    
})(jQuery);

$(document).ready(function() {
    // Optimalisation: Store the references outside the event handler:
    var $window = $(window);

    function checkTailleEcran() {
        var windowsize = $window.width();
        if (windowsize > 575.98) {
            //if the window is greater than 440px wide then turn on jScrollPane..
            $('.siteNom').css("display", "block");
        }
    }
    // Execute on load
    checkTailleEcran();
    // Bind event listener
    $(window).resize(checkTailleEcran);
})(jQuery);