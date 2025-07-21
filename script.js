const state = JSON.parse(localStorage.getItem('courseState') || '{}');

function render() {
  const grid = document.getElementById('curriculum-grid');
  grid.innerHTML = '';

  const yearLabels = ['PRIMER AÑO', 'SEGUNDO AÑO', 'TERCER AÑO', 'CUARTO AÑO', 'QUINTO AÑO'];
  const cycleLabels = [
    'PRIMER CICLO', 'SEGUNDO CICLO', 'TERCER CICLO', 'CUARTO CICLO',
    'QUINTO CICLO', 'SEXTO CICLO', 'SÉPTIMO CICLO', 'OCTAVO CICLO',
    'NOVENO CICLO', 'DÉCIMO CICLO'
  ];

  for (let i = 1; i <= 5; i++) {
    const yearColumn = document.createElement('div');

    const yearTitle = document.createElement('div');
    yearTitle.className = 'year-block';
    yearTitle.textContent = yearLabels[i - 1];
    yearColumn.appendChild(yearTitle);

    const pair = document.createElement('div');
    pair.className = 'cycle-pair';

    const cycles = courseStructure.filter(c => c.year === i);
    cycles.forEach(section => {
      const cycleBlock = document.createElement('div');
      cycleBlock.className = 'cycle-block';

      const cycleTitle = document.createElement('h3');
      cycleTitle.textContent = cycleLabels[section.cycle - 1];
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

      pair.appendChild(cycleBlock);
    });

    yearColumn.appendChild(pair);
    grid.appendChild(yearColumn);
  }
}

render();
