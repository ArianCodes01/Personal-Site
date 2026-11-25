const projectSearch = document.querySelector("#projectSearch");
const projectFilter = document.querySelector("#projectFilter");
const projectCards = document.querySelectorAll(".projects-row > div");

function filterProjects() {
   const searchValue = projectSearch.value.toLowerCase().trim();
   const filterValue = projectFilter.value.toLowerCase();

   projectCards.forEach(card => {
      const text = card.textContent.toLowerCase();
      const category = card.querySelector(".tag").textContent.toLowerCase();

      const matchesSearch = text.includes(searchValue);
      const matchesFilter = filterValue === "all" || category === filterValue;

      card.style.display = matchesSearch && matchesFilter ? "" : "none";
   });
}

projectSearch.addEventListener("input", filterProjects);
projectFilter.addEventListener("change", filterProjects);