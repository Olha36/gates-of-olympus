document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".hero, #about, #features, #play");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("hero")) {
            entry.target.classList.add("fly-up");
          }
          if (entry.target.id === "about") {
            entry.target.classList.add("zoom-in");
          }
          if (entry.target.id === "features") {
            entry.target.classList.add("fly-up");
          }
          if (entry.target.id === "play") {
            entry.target.classList.add("fly-up");
          }
        } else {
          if (entry.target.classList.contains("hero")) {
            entry.target.classList.remove("fly-up");
          }
          if (entry.target.id === "about") {
            entry.target.classList.remove("zoom-in");
          }
          if (entry.target.id === "features") {
            entry.target.classList.remove("fly-up");
          }
          if (entry.target.id === "play") {
            entry.target.classList.remove("fly-up");
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});
