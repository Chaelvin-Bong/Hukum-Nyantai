function toggleMenu() {
  const nav = document.querySelector('.navbarGroup');
  nav.classList.toggle('active');
}

document.querySelectorAll('.navbarText').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.navbarGroup').classList.remove('active');
  });
});

const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.card');

searchInput.addEventListener('keyup', function () {
  const keyword = this.value.toLowerCase();

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();

    if (text.includes(keyword)) {
      card.parentElement.style.display = 'block'; // show
    } else {
      card.parentElement.style.display = 'none'; // hide
    }
  });
});