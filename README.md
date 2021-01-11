# ihm-project

## Description

Cette application présente les données d'objets déclarés comme perdus et restitués de la base de donnée ouverte de la sncf (https://data.sncf.com/explore/dataset/objets-trouves-gares/table/?sort=date et https://data.sncf.com/explore/dataset/objets-trouves-restitution/table/?sort=date).

Nous utilisons pour cela le framework front Vue.js ainsi que la bibliothèque graphique Chart.js pour mettre en place les différentes visualisations. Le plugin Vuetify est également utilisé pour gérer le positionnement des différents éléments visuels.

Les données sont récupérées grâce à des requêtes HTTP en utilisant la bibliothèque Axios.

## Project setup
Vous aurez besoin de Nodejs installé et accessible de façon global (incluant npm)

### Installer les dépendances
A partir du dossier contenant le projet, lancer la commande :
```
npm install
```

### Compilations et hot-reloads pour le developpement

Pour lancer l'application en mode développement, lancer la commande suivante dans un terminal à partir du dossier source
```
npm run serve
```

### Compilation pour la production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Eléments de visualisation

### Utilisation de la bibliothèque Chart.js

#### LineChart 

2 graphes linéaires : évolution temporelle du nombre d'objets déclarés comme perdus pour le premier et du nombre d'objets trouvés et restitués 

#### DoughnutChart

2 doughnut : représentent pour, chaque type d'objet perdus et trouvés, leurs proportions

#### BarChart

2 histogrammes : pour chaque gares, la proportions d'objets perdus (premier histogramme) et trouvés (deuxième histogramme)

### Utilisation de l'élément <v-data-table> de Vuetify

#### Tableaux de données

2 tableaux récapitulatifs des données que nous utilisons
