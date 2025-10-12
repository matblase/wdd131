const menuButton = document.getElementById("menu-button");
const nav = document.getElementById("main-nav");
const gallery = document.querySelector(".gallery");

// 1️⃣ Toggle menu visibility on small screens
menuButton.addEventListener("click", () => {
  nav.classList.toggle("hide");
});

// 2️⃣ Handle window resize so menu shows/hides correctly
function handleResize() {
  if (window.innerWidth > 1000) {
    nav.classList.remove("hide");
  } else {
    nav.classList.add("hide");
  }
}

window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);

// 3️⃣ Image viewer modal
gallery.addEventListener("click", (event) => {
  const clickedImage = event.target.closest("img");
  if (!clickedImage) return;

  const smallSrc = clickedImage.getAttribute("src");
  const altText = clickedImage.getAttribute("alt");
  const largeSrc = smallSrc.split("-")[0] + "-full.jpeg";

  // Create and show dialog
  const modal = document.createElement("dialog");
  modal.innerHTML = `
    <img src="${largeSrc}" alt="${altText}">
    <button class="close-viewer">X</button>
  `;
  document.body.appendChild(modal);
  modal.showModal();

  // Close modal on button click
  modal.querySelector(".close-viewer").addEventListener("click", () => {
    modal.close();
  });

  // Close modal if clicked outside the image
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });

  // Remove modal when closed
  modal.addEventListener("close", () => modal.remove());
});
