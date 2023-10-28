var tl = gsap.timeline();
tl.from("ul li",{
    y: 80,
  duration: 0.9,
  delay: 0.5,
  opacity: 0,
  stagger:0.1,
})
tl.from(".all",{
    y: 1000,
    duration: 0.5,
    delay: 0.2,
    stagger:0.2,
       
})
tl.from(".heading",{
    x: 1000,
  duration: 0.9,
  delay: 1,
  

})

function imgSlider(e) {
  console.log(e);
  document.querySelector(".heading").src = e;
}
const btn = document.querySelectorAll(".btn");
const display = document.querySelector(".number");

btn.forEach((button) =>
  button.addEventListener("click", () => {
    display.innerHTML = "0" + button.value;
  })
);

