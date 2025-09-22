const playlistItems = document.querySelectorAll('.playlist-item');
const registerBtn = document.getElementById('registerBtn')

playlistItems.forEach(item => {
  item.addEventListener('click', () => {
    const playlistName = item.dataset.name;
    alert(`Ви вибрали: ${playlistName}`);
  });
});

registerBtn.addEventListener('click', () => {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Перевірка на порожні поля
  if (!name || !email || !password) {
    alert('Будь ласка, заповніть усі поля!');
    return;
  }

  // Перевірка валідності email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Введіть правильний email!');
    return;
  }

  // Перевірка довжини пароля
  if (password.length < 6) {
    alert('Пароль повинен містити щонайменше 6 символів!');
    return;
  }

  // Успішна реєстрація
  alert(`Реєстрація успішна!\nІм'я: ${name}\nEmail: ${email}`);
});
