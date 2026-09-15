 // ==========================================
    // ЗАВДАННЯ 1
    // ==========================================
    const firstName = "Олег"; // Вкажіть своє ім'я
    const nameList = document.getElementById('name-list');

    // Створюємо елемент списку для кожної літери
    for (const char of firstName) {
      const li = document.createElement('li');
      li.textContent = char;
      
      // Подія при наведенні миші (mouseenter)
      li.addEventListener('mouseenter', () => {
        alert(char);
      });

      nameList.appendChild(li);
    }

    // ==========================================
    // ЗАВДАННЯ 2
    // ==========================================
    const startBtn = document.getElementById('start-input-btn');
    const namesOutput = document.getElementById('names-output');

    startBtn.addEventListener('click', () => {
      while (true) {
        // Запитуємо ПІБ або "Прізвище та ім'я"
        const input = prompt("Введіть прізвище та ім'я (або натисніть 'Скасувати'/'Відміна' для виходу):");
        
        // Якщо натиснуто Скасувати/Відміна (prompt повертає null), перериваємо цикл
        if (input === null) {
          break;
        }

        // Якщо введено порожній рядок або лише пробіли — пропускаємо
        if (input.trim() === "") {
          continue;
        }

        // Відображаємо введені дані у вікні браузера
        const li = document.createElement('li');
        li.textContent = input;
        namesOutput.appendChild(li);
      }
    });

    // ==========================================
    // ЗАВДАННЯ 3
    // ==========================================
    const lastName = "Коваль"; // Вкажіть своє прізвище
    const toggleBtn = document.getElementById('toggle-blocks-btn');
    const lettersContainer = document.getElementById('letters');

    toggleBtn.addEventListener('click', () => {
      // Якщо в контейнері вже є блоки — очищаємо його
      if (lettersContainer.children.length > 0) {
        lettersContainer.innerHTML = '';
      } else {
        // Якщо контейнер порожній — створюємо блоки для кожної літери
        for (const char of lastName) {
          const div = document.createElement('div');
          div.classList.add('letter-block');
          div.textContent = char;

          // При наведенні миші показуємо повідомлення
          div.addEventListener('mouseenter', () => {
            alert(`Це літера [ ${char} ]`);
          });

          lettersContainer.appendChild(div);
        }
      }
    });