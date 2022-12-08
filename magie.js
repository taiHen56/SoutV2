

function page1(){
document.getElementById("p1").style.visibility = "visible";
document.getElementById("p2").style.visibility = "collapse";

document.getElementById("b1").classList.add("active");
document.getElementById("b2").classList.remove("active");
}

function page2(){
document.getElementById("p2").style.visibility = "visible";
document.getElementById("p1").style.visibility = "collapse";

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