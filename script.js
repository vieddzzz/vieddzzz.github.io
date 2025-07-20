const state = JSON.parse(localStorage.getItem('courseState') || '{}');

function render() {
  for (let i = 1; i <= 5; i++) {
    const container = document.getElementById('year-' + i);
    container.innerHTML = '';
    container.innerHTML += `<h2>Año ${i}</h2>`;
    const yearData = courseStructure.filter(c => c.year === i);
    yearData.forEach(section => {
      const block = document.createElement('div');
      block.className = 'cycle-block';
      block.innerHTML = `<h3>Ciclo ${section.cycle}</h3>`;
      section.courses.forEach(course => {
        const div = document.createElement('div');
        div.className = 'course';
        div.textContent = course.name;
        const completed = state[course.id];
        const unlocked = course.prerequisites.every(p => state[p]);
        if (completed) div.classList.add('completed');
        else if (unlocked) div.classList.add('unlocked');
        else div.classList.add('blocked');
        div.addEventListener('click', () => {
          if (!div.classList.contains('blocked')) {
            state[course.id] = !state[course.id];
            localStorage.setItem('courseState', JSON.stringify(state));
            render();
          }
        });
        block.appendChild(div);
      });
      container.appendChild(block);
    });
  }
}

render();
