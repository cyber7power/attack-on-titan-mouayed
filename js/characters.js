/* =========================================================
   BASE DE DONNÉES DES PERSONNAGES
   Ajoute / modifie des entrées ici. "photo" doit pointer
   vers un fichier que tu déposes dans images/characters/
   ========================================================= */

const CHARACTERS = [
  {
    id: "eren",
    name: "Eren Jaeger",
    role: "Soldat — Bataillon d'Exploration",
    photo: "images/characters/eren.jpg",
    stats: {
      "Affiliation": "Bataillon d'Exploration",
      "Origine": "District de Shiganshina",
      "Statut": "Détenteur de Titan",
      "Arme": "Transformation Titan"
    },
    bio: "Survivant de la chute du Mur Maria, Eren rejoint le Bataillon d'Exploration animé par un serment : exterminer chaque Titan et reprendre le monde au-delà des murs."
  },
  {
    id: "mikasa",
    name: "Mikasa Ackerman",
    role: "Soldat d'élite — Bataillon d'Exploration",
    photo: "images/characters/mikasa.jpg",
    stats: {
      "Affiliation": "Bataillon d'Exploration",
      "Origine": "District de Shiganshina",
      "Statut": "Humaine",
      "Arme": "Lames + Équipement ODM"
    },
    bio: "Considérée comme l'une des combattantes les plus douées de sa génération, Mikasa protège Eren avec une loyauté inébranlable depuis leur enfance."
  },
  {
    id: "armin",
    name: "Armin Arlert",
    role: "Stratège — Bataillon d'Exploration",
    photo: "images/characters/armin.jpg",
    stats: {
      "Affiliation": "Bataillon d'Exploration",
      "Origine": "District de Shiganshina",
      "Statut": "Humain / Détenteur de Titan",
      "Arme": "Intelligence tactique"
    },
    bio: "Esprit brillant et tacticien du groupe, Armin compense un physique modeste par une capacité d'analyse qui a sauvé l'humanité à de nombreuses reprises."
  },
  {
    id: "levi",
    name: "Levi Ackerman",
    role: "Capitaine — Bataillon d'Exploration",
    photo: "images/characters/levi.jpg",
    stats: {
      "Affiliation": "Bataillon d'Exploration",
      "Origine": "Inconnue / Quartiers souterrains",
      "Statut": "Humain",
      "Arme": "Lames + Équipement ODM"
    },
    bio: "Surnommé 'le soldat le plus fort de l'humanité', Levi dirige l'escouade spéciale avec une discipline de fer et une efficacité redoutable au combat."
  },
  {
    id: "historia",
    name: "Historia Reiss",
    role: "Reine des Murs",
    photo: "images/characters/historia.jpg",
    stats: {
      "Affiliation": "Bataillon d'Exploration / Royauté",
      "Origine": "Famille Reiss",
      "Statut": "Humaine",
      "Arme": "Équipement ODM"
    },
    bio: "D'abord effacée, Historia révèle peu à peu une force de caractère qui la mènera jusqu'au trône, déterminée à protéger le peuple plutôt que la couronne."
  },
  {
    id: "reiner",
    name: "Reiner Braun",
    role: "Soldat — Garnison de Mahr",
    photo: "images/characters/reiner.jpg",
    stats: {
      "Affiliation": "Marleyens / Infiltré",
      "Origine": "Liberio",
      "Statut": "Détenteur de Titan",
      "Arme": "Transformation Titan"
    },
    bio: "Tiraillé entre deux identités et deux loyautés, Reiner porte le poids d'une mission qui a brisé les murs et changé le cours de l'histoire."
  }
];
