const titles = [
  "Future Software Developer",
  "Problem Solver",
  "Programmer",
  "Future AI Engineer"
];

const rotatingTitle = document.getElementById("rotating-title");

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentTitle = titles[titleIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  rotatingTitle.textContent = currentTitle.substring(0, charIndex);

  let typingSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentTitle.length) {
    typingSpeed = 1500;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    titleIndex = (titleIndex + 1) % titles.length;
    typingSpeed = 300;
  }

  setTimeout(typeEffect, typingSpeed);
}

typeEffect();