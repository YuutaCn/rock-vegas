let toTop = document.querySelector('.to-top');
window.addEventListener('scroll', function () {
  if (window.scrollY > 1000) {
    toTop.classList.add('to-top--show');
  } else {
    toTop.classList.remove('to-top--show');
  }
});
