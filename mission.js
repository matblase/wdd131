// Select elements
const themeSelector = document.querySelector('#theme-select');
const body = document.body;
const logo = document.querySelector('footer img');

// Function to change theme
function changeTheme() {
  if (themeSelector.value === 'dark') {
    body.classList.add('dark');
    logo.src = 'byui-logo_white.webp'; // white logo for dark background
  } else {
    body.classList.remove('dark');
    logo.src = 'byui-logo_blue.webp'; // blue logo for light background
  }
}

// Event listener
themeSelector.addEventListener('change', changeTheme);
