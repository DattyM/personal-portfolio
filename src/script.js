const titles = [
  "Programmer",
  "Future Software Developer",
  "Problem Solver",
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

const timeline = document.querySelector(".timeline");
const timelineProgress = document.querySelector(".timeline-progress");

function updateTimelineProgress() {
  const rect = timeline.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  const scrolledIntoView = viewportHeight - rect.top;
  const progress = scrolledIntoView / rect.height;

  const clampedProgress = Math.min(Math.max(progress, 0), 1);

  timelineProgress.style.height = (clampedProgress * rect.height) + "px";
}

window.addEventListener("scroll", updateTimelineProgress);
updateTimelineProgress();

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  formStatus.textContent = "Thanks for reaching out! I'll get back to you soon.";
  formStatus.style.color = "var(--color-accent)";

  contactForm.reset();
});
