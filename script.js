// Fade-in animation on scroll
const sections = document.querySelectorAll(".fade-section");

function revealSections() {
  const triggerBottom = window.innerHeight * 0.8;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < triggerBottom) {
      section.classList.add("show");
    }
  });
}
window.addEventListener("scroll", revealSections);
revealSections();

// Typing animation for name
document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".typing-text");
  const text = textElement.getAttribute("data-text");
  let index = 0;

  function type() {
    if (index < text.length) {
      textElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }
  setTimeout(type, 500);
});
