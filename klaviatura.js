function showKeyboard() {
  // Создаем элементы клавиатуры
  const keys = Array.from(Array(40)).map((_, i) => `<button class="key" id="key_${i+1}">${String.fromCharCode(i+65)}</button>`);
  document.getElementById('keyboard').innerHTML = keys.join('');

  // Обрабатываем нажатия клавиш
  document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
      const keyValue = key.id.slice(4); // Получаем значение нажатой клавиш
      console.log(keyValue); // Выводим значение в консоли
    });
  });
}

// Вызываем функцию showKeyboard при загрузке страницы
document.addEventListener("DOMContentLoaded", () => showKeyboard());
