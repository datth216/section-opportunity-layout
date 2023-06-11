function animateDesc() {
  let string =
    "We enable you to explore new markets, operate and grow your business in Southeast Asia, through:";
  let str = string.split("");
  let el = document.getElementById("description");
  (function animate() {
    let running = setTimeout(animate, 90);
    return str.length > 0
      ? (el.innerHTML += str.shift())
      : clearTimeout(running);
  })();
}

animateDesc();
