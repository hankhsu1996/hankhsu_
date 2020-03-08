// custom typefaces
import "typeface-montserrat";
import "typeface-merriweather";
import "./src/styles/global.css";

export const onInitialClientRender = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty(`--vh`, `${vh}px`);
};

export const onClientEntry = () => {
    window.onload = () => {
        window.onscroll = () => {
            var scrollDistance = window.scrollY;
            var menuList = document.querySelectorAll("nav li");
            document.querySelectorAll("section").forEach((element, index) => {
                if (element.getBoundingClientRect().top <= scrollDistance) {
                    // menuList.classList.remove("active");
                    console.log(index);
                }
            });
        };
    };
};

// $(window)
//     .scroll(function() {
//         var scrollDistance = $(window).scrollTop();

//         // Assign active class to nav links while scolling
//         $("section").each(function(i) {
//             if ($(this).position().top <= scrollDistance) {
//                 $("nav li").removeClass("active");
//                 $("nav li")
//                     .eq(i)
//                     .addClass("active");
//             }
//         });
//     })
//     .scroll();
