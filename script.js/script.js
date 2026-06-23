document.addEventListener("DOMContentLoaded", () => {

  const image = document.querySelector(".landing-left");
  const heading = document.querySelector(".intro-heading");
  const paragraphs = document.querySelectorAll(".landing-copy p");

  // IMAGE STARTS HIDDEN ABOVE SCREEN
  image.style.opacity = "0";
  image.style.transform = "translateY(-80px)";
  image.style.transition = "all 2s cubic-bezier(.22,1,.36,1)";

  // HEADING STARTS HIDDEN TO THE RIGHT
  heading.style.opacity = "0";
  heading.style.transform = "translateX(50px)";
  heading.style.transition = "all 0.8s ease";

  // PARAGRAPHS START HIDDEN TO THE RIGHT
  paragraphs.forEach((p) => {
    p.style.opacity = "0";
    p.style.transform = "translateX(50px)";
    p.style.transition = "all 0.8s ease";
  });

  // IMAGE DROPS IN
  setTimeout(() => {
    image.style.opacity = "1";
    image.style.transform = "translateY(0)";
  }, 300);

  // HEADING COMES IN AFTER IMAGE HAS STARTED
  setTimeout(() => {
    heading.style.opacity = "1";
    heading.style.transform = "translateX(0)";
  }, 1200);

  // PARAGRAPHS FOLLOW ONE BY ONE
  paragraphs.forEach((p, index) => {
    setTimeout(() => {
      p.style.opacity = "1";
      p.style.transform = "translateX(0)";
    }, 1500 + (index * 250));
  });

});