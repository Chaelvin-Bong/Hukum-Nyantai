function toggleMenu() {
  const nav = document.querySelector('.navbarGroup');
  nav.classList.toggle('active');
}

document.querySelectorAll('.navbarText').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.navbarGroup').classList.remove('active');
  });
});