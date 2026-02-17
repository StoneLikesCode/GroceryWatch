$(document).ready(function(){ 
    // load header first
    $('#header').load("header.html", function(){

        // once header is loaded, load nav inside it
        $('#nav').load("nav.html", function(){

            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector("#nav ul");

            if (hamburger && navMenu) {
                hamburger.addEventListener("click", function(){
                    hamburger.classList.toggle("active");
                    navMenu.classList.toggle("active");
                });
            }

        });

    });

    // load footer normally
    $('#footer').load("footer.html");
});