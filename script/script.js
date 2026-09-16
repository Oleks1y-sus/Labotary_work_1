
    // Завдання 1
    const createNameBtn = document.getElementById('create-name-btn');
    const nameList = document.getElementById('name-list');
    createNameBtn.addEventListener('click', () => {
      const firstName = prompt("Введіть ваше ім'я:");
      if (!firstName || !firstName.trim()) {
        return;
      }
      nameList.innerHTML = '';
      for (const char of firstName.trim()) {
        const li = document.createElement('li');
        li.textContent = char;
        li.addEventListener('mouseenter', () => {
          alert(char);
        });
        nameList.appendChild(li);
      }
    });

    // Завдання 2
    
    const startBtn = document.getElementById('start-input-btn');
    const namesOutput = document.getElementById('names-output');

    startBtn.addEventListener('click', () => {
      while (true) {
        const input = prompt("Введіть прізвище та ім'я (або натисніть 'Скасувати' для виходу):");
        if (input === null) {
          break;
        }
        if (input.trim() === "") {
          continue;
        }

        const li = document.createElement('li');
        li.textContent = input;
        namesOutput.appendChild(li);
      }
    });

    
    // Завдання 3
    
    const toggleBtn = document.getElementById('toggle-blocks-btn');
    const lettersContainer = document.getElementById('letters');
    toggleBtn.addEventListener('click', () => {
      if (lettersContainer.children.length > 0) {
        lettersContainer.innerHTML = '';
      } else {
        const lastName = prompt("Введіть ваше прізвище:");
        if (!lastName || !lastName.trim()) {
          return;
        }
        for (const char of lastName.trim()) {
          const div = document.createElement('div');
          div.classList.add('letter-block');
          div.textContent = char;
            
          div.addEventListener('mouseenter', () => {
            alert(`Це літера [ ${char} ]`);
          });

          lettersContainer.appendChild(div);
        }
      }
    });
