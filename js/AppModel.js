/**
 * AppModel.js - Gestion des données des projets
 * Structure centralisée pour faciliter l'ajout/modification de projets
 */

const ProjectsData = {
  projects: [
    // ===== UI/UX =====
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "Interface de gestion complète pour plateforme e-commerce avec analytics en temps réel",
      category: "uiux",
      image: "bb.png",
      year: 2025
    },
    {
      id: 2,
      title: "Mobile App Interface",
      description: "Design d'application mobile pour gestion de tâches avec animations fluides",
      category: "uiux",
      image: "lm.jpeg",
      year: 2025
    },
    {
      id: 3,
      title: "SaaS Platform UI",
      description: "Interface utilisateur complète pour plateforme SaaS moderne et performante",
      category: "uiux",
      image: "Sitraka1.png",
      year: 2024
    },

    // ===== LOGO =====
    {
      id: 4,
      title: "Tech Startup Logo",
      description: "Logo minimaliste pour startup technologique avec identité visuelle complète",
      category: "logo",
      image: "bb.png",
      year: 2024
    },
    {
      id: 5,
      title: "Brand Identity",
      description: "Création d'identité visuelle et logo pour agence créative",
      category: "logo",
      image: "lm.jpeg",
      year: 2024
    },

    // ===== FLYER =====
    {
      id: 6,
      title: "Event Flyer Design",
      description: "Flyer pour événement technologique avec design moderne et impactant",
      category: "flyer",
      image: "Sitraka1.png",
      year: 2025
    },
    {
      id: 7,
      title: "Product Promotion",
      description: "Flyer de promotion produit avec composition créative et textes accrocheurs",
      category: "flyer",
      image: "bb.png",
      year: 2025
    },

    // ===== MAQUETTE =====
    {
      id: 8,
      title: "Landing Page Mockup",
      description: "Maquette de landing page pour campagne marketing B2B",
      category: "maquette",
      image: "lm.jpeg",
      year: 2024
    },
    {
      id: 9,
      title: "Website Mockup",
      description: "Maquette complète de site web pour agence de design",
      category: "maquette",
      image: "Sitraka1.png",
      year: 2024
    }
  ],

  /**
   * Récupère tous les projets
   */
  getAll() {
    return this.projects;
  },

  /**
   * Récupère les projets par catégorie
   * @param {string} category - La catégorie (all, uiux, logo, flyer, maquette)
   */
  getByCategory(category) {
    if (category === "all") {
      return this.projects;
    }
    return this.projects.filter(project => project.category === category);
  },

  /**
   * Récupère les projets par ID
   * @param {number} id - L'ID du projet
   */
  getById(id) {
    return this.projects.find(project => project.id === id);
  },

  /**
   * Compte les projets par catégorie
   */
  getCountByCategory(category) {
    if (category === "all") {
      return this.projects.length;
    }
    return this.projects.filter(project => project.category === category).length;
  },

  /**
   * Ajoute un nouveau projet (utile pour maintenance future)
   * @param {object} project - L'objet projet avec les propriétés requises
   */
  addProject(project) {
    const newId = Math.max(...this.projects.map(p => p.id), 0) + 1;
    this.projects.push({
      id: newId,
      ...project
    });
    return newId;
  },

  /**
   * Supprime un projet par ID
   * @param {number} id - L'ID du projet à supprimer
   */
  removeProject(id) {
    this.projects = this.projects.filter(project => project.id !== id);
  }
};
