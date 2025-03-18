const taskInput = document.getElementById('taskInput');
  const taskType = document.getElementById('taskType');
  const addTaskBtn = document.getElementById('addTask');
  const taskList = document.getElementById('taskList');

  const taskImages = {
    work: 'https://cdn-icons-png.flaticon.com/512/295/295128.png',
    personal: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png',
    shopping: 'https://cdn-icons-png.flaticon.com/512/3144/3144456.png',
    others: 'https://cdn-icons-png.flaticon.com/512/1828/1828961.png'
  };


  function addTask() {
    const taskText = taskInput.value.trim();
    const taskCategory = taskType.value;

    if (taskText === '') {
      alert('กรุณากรอกชื่อรายการ');
      return;
    }

  
    const li = document.createElement('li');

    li.innerHTML = `
      <div class="task-content">
        <img src="${taskImages[taskCategory]}" alt="${taskCategory}" class="task-img">
        <span>${taskText}</span>
      </div>
      <button class="delete-btn">ลบ</button>
    `;

  
    li.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    
    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      if (confirm(`คุณต้องการลบ "${taskText}" หรือไม่?`)) {
        li.remove();
      }
    });

   
    taskList.appendChild(li);

   
    taskInput.value = '';
  }

  
  addTaskBtn.addEventListener('click', addTask);

  
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  });