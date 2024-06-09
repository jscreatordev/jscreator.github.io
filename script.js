window.transitionToPage = function(href) {
  document.querySelector('body').style.opacity = 0
  setTimeout(function() {
    window.location.href = href
  }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
  document.querySelector('body').style.opacity = 1
})


colors = [
  0x7B8693,
  0xA5ADB7,
  0xFFD159,
  0xFFAD52,
  0xF8814D,
  0xED6544
]

chosenColor = colors[Math.floor(Math.random() * colors.length)];

VANTA.DOTS({
  el: "#bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  showLines: true,
  color: chosenColor,
  color2: chosenColor
})


document.body.onload = function () {
  var text = document.getElementById("main_text");
  text.classList.add("animate__animated", "animate__rubberBand");
}


const typewriter = (text, speed) => {
  let index = 0;
  const type = () => {
    if (index < text.length) {
      document.getElementById("main_text").innerHTML += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  };
  type();
};
typewriter("jscreator", 100);
