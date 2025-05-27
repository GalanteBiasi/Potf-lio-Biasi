const mobileMenu = document.getElementById('mobile-menu');

  // Ativa/desativa o menu ao clicar no botão
  document.getElementById('menu-toggle').addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

