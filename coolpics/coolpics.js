const menuButton = document.getElementById("menu-button");
const nav = document.getElementById("main-nav");
const gallery = document.querySelector(".gallery");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("hide");
});

function handleResize() {
  if (window.innerWidth > 1000) {
    nav.classList.remove("hide");
  } else {
    nav.classList.add("hide");
  }
}

window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);

gallery.addEventListener("click", (event) => {
  const clickedImage = event.target.closest("img");
  if (!clickedImage) return;

  const smallSrc = clickedImage.getAttribute("src");
  const altText = clickedImage.getAttribute("alt");
  const largeSrc = smallSrc.split("-")[0] + "-full.jpeg";

  const modal = document.createElement("dialog");
  modal.innerHTML = `
    <img src="${largeSrc}" alt="${altText}">
    <button class="close-viewer">X</button>
  `;
  document.body.appendChild(modal);
  modal.showModal();

  modal.querySelector(".close-viewer").addEventListener("click", () => {
    modal.close();
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });

  modal.addEventListener("close", () => modal.remove());
});
