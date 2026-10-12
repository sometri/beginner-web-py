const toggleButton = document.getElementById('toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark');
});
