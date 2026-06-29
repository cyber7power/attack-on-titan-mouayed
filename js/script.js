/* =========================================================
   RENDU DE LA GRILLE DE PERSONNAGES
   ========================================================= */
function renderCharacterGrid() {
  const grid = document.getElementById("character-grid");

  CHARACTERS.forEach((char) => {
    const card = document.createElement("article");
    card.className = "char-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Voir le dossier de ${char.name}`);

    card.innerHTML = `
      <div class="char-photo-wrap">
        <img src="${char.photo}" alt="Portrait de ${char.name}" loading="lazy"
             onerror="this.src='images/characters/placeholder.svg'">
        <span class="char-stamp">${char.stats["Statut"]}</span>
      </div>
      <div class="char-info">
        <h3 class="char-name">${char.name}</h3>
        <p class="char-role">${char.role}</p>
      </div>
    `;

    card.addEventListener("click", () => openModal(char));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(char);
      }
    });

    grid.appendChild(card);
  });
}

/* =========================================================
   MODALE DE DÉTAIL
   ========================================================= */
function openModal(char) {
  const overlay = document.getElementById("modal-overlay");
  const content = document.getElementById("modal-content");

  const statsHtml = Object.entries(char.stats)
    .map(([label, value]) => `<div>${label}<br><span>${value}</span></div>`)
    .join("");

  content.innerHTML = `
    <h2 class="modal-name">${char.name}</h2>
    <p class="modal-role">${char.role}</p>
    <div class="modal-stats">${statsHtml}</div>
    <p class="modal-bio">${char.bio}</p>
  `;

  overlay.classList.add("is-open");
  document.getElementById("modal-close").focus();
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("is-open");
}

/* =========================================================
   ÉVÉNEMENTS GLOBAUX
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  renderCharacterGrid();

  document.getElementById("modal-close").addEventListener("click", closeModal);

  document.getElementById("modal-overlay").addEventListener("click", (e) => {
    if (e.target.id === "modal-overlay") closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
});
