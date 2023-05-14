const progressBar = document.querySelector('.scroll-progress');
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const windowHeight = window.innerHeight;
  const fullHeight = document.body.clientHeight;
  const progress = (scrolled / (fullHeight - windowHeight)) * 100;
  progressBar.style.height = `${progress}%`;
});
