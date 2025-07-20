const grid = document.getElementById('grid');
const state = JSON.parse(localStorage.getItem('courseState') || '{}');

function renderGrid(courses) {
    grid.innerHTML = '';
    courses.forEach(course => {
        const div = document.createElement('div');
        div.className = 'course';
        div.textContent = course.name;
        div.dataset.id = course.id;

        const completed = state[course.id];
        const unlocked = course.prerequisites.every(pr => state[pr]);
        
        if (completed) {
            div.classList.add('completed');
        } else if (unlocked) {
            div.classList.add('unlocked');
        } else {
            div.classList.add('blocked');
        }

        div.addEventListener('click', () => {
            if (!div.classList.contains('blocked')) {
                state[course.id] = !state[course.id];
                localStorage.setItem('courseState', JSON.stringify(state));
                renderGrid(courses);
            }
        });

        grid.appendChild(div);
    });
}

renderGrid(courses);
