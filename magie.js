

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
        $('.nav-overlay').toggleClass('actif');
    })
    $('.nav-overlay').click(function(e){
        e.preventDefault();
        $('.nav-overlay').toggleClass('actif');
    })
})(jQuery);