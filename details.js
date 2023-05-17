const darkBtn = document.getElementById('dark-mode-btn');
darkBtn.onclick = () => {
  document.body.classList.toggle('dark-theme');
};

const openMainPage = () => {
  document.location.href = 'index.html';
};