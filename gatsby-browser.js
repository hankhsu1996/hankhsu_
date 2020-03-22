// custom typefaces
import './src/styles/screen.css';

export const onInitialClientRender = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty(`--vh`, `${vh}px`);
};
