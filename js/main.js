var burger = document.getElementById("burger_menu");
var menu = document.getElementById("pop_up");
burger.addEventListener("click" , function(){
    menu.style.left = "0" ;
    // menu.style.display = "block" ;
})

var back = document.getElementById("back") ;
back.addEventListener("click" , function(){
    menu.style.left = "-390px" ;
    // menu.style.display = "block" ;
});
