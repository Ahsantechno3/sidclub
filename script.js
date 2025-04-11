document.querySelector("body").addEventListener("mousemove", (targrt) => {
  let x_way = targrt.clientX - 15 + "px";
  let y_way = targrt.clientY - 15 + "px";
  let circle = document.querySelector(".circle");
  circle.style.top = y_way;
  circle.style.left = x_way;
});

// food page dots
let dotbox = document.querySelectorAll(".dotbox");
let imgbox = document.querySelectorAll(".imgbox img");

let index = 0;

dotbox.forEach((dot) => {
  // dot.classList.remove("active");
  dot.addEventListener("click", () => {
    setdots(dot);
  });
});

function setdots(dot) {
  dotbox.forEach((d) => d.classList.remove("active"));
  dot.classList.toggle("active");
  let activedot = dot.getAttribute("data-content");
  index = activedot - 1;
  activedot = ".img" + activedot;
  setimg(activedot);
}

function setimg(target) {
  // console.log(target);
  imgbox.forEach((ele) => {
    ele.classList.remove("active");
  });
  document.querySelector(target).classList.add("active");
}

setInterval(() => {
  if (index == 3) {
    index = 0;
  }
  setdots(dotbox[index]);
  index++;
}, 2000);
/* bg scroll triger */
let slider = document.querySelector(".slider");
document.addEventListener("wheel", () => {
  let scroll = window.scrollY / 220;
  document.querySelector(
    ".page1"
  ).style.backgroundColor = `rgba(0, 0, 0,${scroll})`;
  document.querySelector(
    ".scroller"
  ).style.backgroundColor = `rgba(0, 0, 0,${scroll})`;
  document.querySelector(
    "header"
  ).style.backgroundColor = `rgba(0, 0, 0,${scroll})`;
  if (window.scrollY >= 3500) {
    document.querySelector(".cardtitle").style.animation =
      "slideup 1s linear 1 forwards";
  } else {
    document.querySelector(".cardtitle").style.animation = "none";
  }
});
