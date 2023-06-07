/* durata schimbare sectiune */

window.addEventListener(
  "wheel",
  function (e) {
    e.preventDefault();
    window.scrollBy({
      top: e.deltaY / 3, // viteza de derulare
      behavior: "smooth",
    });
  },
  { passive: false }
);

/* schimbare tema */

document
  .getElementById("theme__switcher")
  .addEventListener("click", function () {
    document.body.classList.toggle("light__theme");
    document.body.classList.toggle("dark__theme");
  });
