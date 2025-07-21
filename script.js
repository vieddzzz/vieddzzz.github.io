const state = JSON.parse(localStorage.getItem('courseState') || '{}');

function render() {
  const container = document.getElementById('curriculum');
  container.innerHTML = '';
  for (let i = 1; i <= 5; i++) {
    const yearBlock = document.createElement('div');
    yearBlock.className = 'year-block';
    const title = document.createElement('h2');
    title.textContent = `AÑO ${i}`;
    yearBlock.appendChild(title);

    const cyclesDiv = document.createElement('div');
    cyclesDiv.className = 'cycles-container';
    const yearData = courseStructure.filter(c => c.year === i);
    yearData.forEach(section => {
      const cycleBlock = document.createElement('div');
      cycleBlock.className = 'cycle-block';
      const cycleTitle = document.createElement('h3');
      cycleTitle.textContent = `CICLO ${section.cycle}`;
      cycleBlock.appendChild(cycleTitle);

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

        cycleBlock.appendChild(div);
      });

      cyclesDiv.appendChild(cycleBlock);
    });

    yearBlock.appendChild(cyclesDiv);
    container.appendChild(yearBlock);
  }
}

render();
