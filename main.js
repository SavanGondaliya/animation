import Lottie from "lottie-web";

Lottie.loadAnimation({
    container: document.getElementById("lottie"), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'waves.json' // the path to the animation json
  });