const state = JSON.parse(localStorage.getItem('courseState') || '{}');
const container = document.getElementById("malla-container");

function renderMalla() {
  container.innerHTML = '';
  courseStructure.forEach(section => {
    const block = document.createElement("div");
    block.className = "cycle-block";
    
    const title = document.createElement("div");
    title.className = "cycle-title";
    title.textContent = `Año ${section.year} - Ciclo ${section.cycle}`;
    
    const grid = document.createElement("div");
    grid.className = "course-grid";

    section.courses.forEach(course => {
      const div = document.createElement("div");
      div.className = "course";
      div.textContent = course.name;
      div.dataset.id = course.id;

      const completed = state[course.id];
      const unlocked = course.prerequisites.every(pr => state[pr]);

      if (completed) {
        div.classList.add("completed");
      } else if (unlocked) {
        div.classList.add("unlocked");
      } else {
        div.classList.add("blocked");
      }

      div.addEventListener("click", () => {
        if (!div.classList.contains("blocked")) {
          state[course.id] = !state[course.id];
          localStorage.setItem("courseState", JSON.stringify(state));
          renderMalla();
        }
      });

      grid.appendChild(div);
    });

    block.appendChild(title);
    block.appendChild(grid);
    container.appendChild(block);
  });
}

renderMalla();
