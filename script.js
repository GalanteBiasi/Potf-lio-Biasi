const mobileMenu = document.getElementById('mobile-menu');

  // Ativa/desativa o menu ao clicar no botão
  document.getElementById('menu-toggle').addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

 const track = document.querySelector('.carousel-track');
  const items = document.querySelectorAll('.carousel-item');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  let index = 0;

  function updateCarousel() {
    const width = items[0].clientWidth;
    track.style.transform = `translateX(-${index * width}px)`;
  }

  prevBtn.addEventListener('click', () => {
    index = (index === 0) ? items.length - 1 : index - 1;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % items.length;
    updateCarousel();
  });

  window.addEventListener('resize', updateCarousel);