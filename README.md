# Site Fan — Attack on Titan

## ⚠️ Important
Ce site est un projet de fan, non officiel, sans but commercial.
Attack on Titan (Shingeki no Kyojin) appartient à Hajime Isayama / Kodansha.
Pour des raisons de droits d'auteur, AUCUNE image officielle n'est incluse
dans ce projet. Tu dois ajouter tes propres images dans le dossier
`images/characters/` (captures d'écran, fan-arts dont tu as les droits, etc.)

## Structure du projet

```
aot-fansite/
├── index.html              → page principale
├── css/
│   └── style.css           → tous les styles
├── js/
│   ├── characters.js       → données des personnages (à éditer ici)
│   └── script.js           → logique d'affichage + modale
└── images/
    └── characters/
        ├── placeholder.svg → image de secours auto si photo absente
        ├── eren.jpg        → à fournir
        ├── mikasa.jpg      → à fournir
        ├── armin.jpg       → à fournir
        ├── levi.jpg        → à fournir
        ├── historia.jpg    → à fournir
        └── reiner.jpg      → à fournir
```

## Comment l'utiliser

1. Dépose tes images dans `images/characters/` avec exactement les noms
   listés ci-dessus (ex: `eren.jpg`). Si un fichier manque, un placeholder
   s'affiche automatiquement — le site ne casse jamais.
2. Ouvre `index.html` dans ton navigateur (double-clic suffit, pas de serveur requis).
3. Pour ajouter un personnage : ouvre `js/characters.js` et copie un bloc
   `{ id, name, role, photo, stats, bio }` en l'adaptant.

## Personnaliser

- **Couleurs / police** → tout est centralisé en haut de `css/style.css`
  dans le bloc `:root` (variables `--blood`, `--gold`, `--paper`, etc.)
- **Texte des factions** → directement dans `index.html`, section `#factions`.
- **Comportement de la modale / grille** → `js/script.js`.

## Aller plus loin (idées)
- Ajouter une page "Titans" avec les types de Titans (Colossal, Cuirassé, etc.)
- Ajouter un filtre par faction sur la grille de personnages
- Ajouter une frise chronologique des événements majeurs
