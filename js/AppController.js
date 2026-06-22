/**
 * AppController.js - Logique de l'application portfolio
 * Gère : grille de cartes, filtres de catégories, navigation
 */

class PortfolioController {
  constructor() {
    this.currentCategory = "all";
    this.currentProjectIndex = 0;
    this.currentProjects = [];
    this.pageOffset = 0;      // which "page" of 3 we're on
    this.cardsPerPage = 3;

    this.init();
  }

  init() {
    this.setupElements();
    this.renderProjects(this.currentCategory);
    this.setupEventListeners();
    this.updateTabCounts();
  }

  setupElements() {
    this.slider       = document.getElementById("projectSlider");
    this.nextBtn      = document.getElementById("nextBtn");
    this.prevBtn      = document.getElementById("prevBtn"); // hidden but kept for compat
    this.tabButtons   = document.querySelectorAll(".tab-btn");
    this.indicators   = document.getElementById("sliderIndicators"); // hidden
    this.projectTitle = document.getElementById("projectTitle");
    this.projectDesc  = document.getElementById("projectDesc");
  }

  setupEventListeners() {
    this.nextBtn.addEventListener("click", () => this.nextPage());
    if (this.prevBtn) this.prevBtn.addEventListener("click", () => this.prevPage());

    this.tabButtons.forEach(btn => {
      btn.addEventListener("click", (e) => {
        this.filterByCategory(e.target.closest(".tab-btn").dataset.category);
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") this.nextPage();
      if (e.key === "ArrowLeft")  this.prevPage();
    });
  }

  renderProjects(category) {
    this.currentProjects = ProjectsData.getByCategory(category);
    this.currentProjectIndex = 0;
    this.pageOffset = 0;
    this.updateGrid();
    this.updateProjectInfo();
  }

  updateGrid() {
    this.slider.innerHTML = "";

    this.currentProjects.forEach((project, index) => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div class="card-label">
          <h4>${project.title}</h4>
          <p>${project.category.toUpperCase()}</p>
        </div>
      `;
      card.addEventListener("click", () => {
        this.currentProjectIndex = index;
        this.updateProjectInfo();
        this.highlightCard(index);
      });
      this.slider.appendChild(card);
    });

    // Apply CSS grid offset via translate
    this.applyGridOffset();
  }

  applyGridOffset() {
    // Each card is 1/3 of track. We shift by pageOffset * 100% of the viewport
    // Calculate percent offset: each "page" shifts 3 cards = 100% of viewport
    const colWidth = 100 / this.cardsPerPage; // ≈ 33.33%
    const gapEstimate = 6; // ~6% gap total absorbed
    const shift = this.pageOffset * (100 + gapEstimate);
    this.slider.style.transform = `translateX(-${shift / this.cardsPerPage}%)`;

    // toggle next btn visibility
    const maxPage = Math.ceil(this.currentProjects.length / this.cardsPerPage) - 1;
    this.nextBtn.style.opacity = this.pageOffset >= maxPage ? "0.3" : "1";
    this.nextBtn.style.pointerEvents = this.pageOffset >= maxPage ? "none" : "auto";
  }

  nextPage() {
    const maxPage = Math.ceil(this.currentProjects.length / this.cardsPerPage) - 1;
    if (this.pageOffset < maxPage) {
      this.pageOffset++;
      this.applyGridOffset();
    } else {
      // Loop back
      this.pageOffset = 0;
      this.applyGridOffset();
    }
  }

  prevPage() {
    if (this.pageOffset > 0) {
      this.pageOffset--;
      this.applyGridOffset();
    }
  }

  highlightCard(index) {
    const cards = this.slider.querySelectorAll(".project-card");
    cards.forEach((c, i) => {
      c.style.borderColor = i === index ? "#8B1A1A" : "";
      c.style.boxShadow   = i === index ? "0 0 0 2px rgba(139,26,26,0.4)" : "";
    });
  }

  updateProjectInfo() {
    if (this.currentProjects.length === 0) {
      this.projectTitle.textContent = "Aucun projet";
      this.projectDesc.textContent  = "Sélectionnez une catégorie pour voir les projets";
      return;
    }
    const project = this.currentProjects[this.currentProjectIndex];
    this.projectTitle.textContent = project.title;
    this.projectDesc.textContent  = project.description;
  }

  filterByCategory(category) {
    this.currentCategory = category;
    this.tabButtons.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.category === category);
    });
    this.renderProjects(category);
  }

  updateTabCounts() {
    ["all","uiux","flyer","maquette","logo"].forEach(cat => {
      const count = ProjectsData.getCountByCategory(cat);
      const btn   = document.querySelector(`[data-category="${cat}"]`);
      if (btn) {
        const el = btn.querySelector(".tab-count");
        if (el) el.textContent = `(${count})`;
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new PortfolioController();
});
