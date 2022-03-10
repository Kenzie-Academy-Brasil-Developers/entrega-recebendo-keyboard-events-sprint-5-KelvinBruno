let boxTop = 200;
let boxLeft = 200;


document.addEventListener("keydown", (event) => {

  const keyName = event.key;
  console.log(keyName);
  if (keyName == "ArrowDown") {
    boxTop = boxTop + 10;
    document.getElementById("box").style.top = boxTop + "px";
  }
  if (keyName == "ArrowUp") {
    boxTop = boxTop - 10;
    document.getElementById("box").style.top = boxTop + "px";
  }
  if (keyName == "ArrowLeft") {
    boxLeft = boxLeft - 10;
    document.getElementById("box").style.left = boxLeft + "px";
  }
  if (keyName == "ArrowRight") {
    boxLeft = boxLeft + 10;
    document.getElementById("box").style.left = boxLeft + "px";
  }
});
