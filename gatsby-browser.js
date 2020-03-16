// custom typefaces
import "typeface-montserrat";
import "typeface-merriweather";
import "./src/built/screen.css";

export const onInitialClientRender = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty(`--vh`, `${vh}px`);
};
