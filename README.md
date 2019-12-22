# MIASHS-M2-TP3-Projet


## Installation et lancement du projet 

- Nodejs doit être installé.
- `git clone https://github.com/Em5eline/TodoListAngular.git`
- `npm install`
- `npm i lite-server -g` nécessaire pour la fonctionnalité PWA
- `ng serve`
- `ng build --prod`
- `lite-server --baseDir=dist`nécessaire pour la fonctionnalité PWA. L'application sera visible sur http://localhost:3000/
Attention, les extensions Chrome posent problèmes avec la fonctionnalité PWA, il est donc préféré d'ouvrir http://localhost:3000 en navigation privée afin d'obtenir les scores Chrome Lighthouse. 


## Fonctionnalités implémentées 

- La todo list sur le modèle de http://todomvc.com 

- Un bouton "Effacer tout" qui permet de supprimer tous les items de la todo list. En implémentant cette fonctionnalité j'ai rencontré quelques problèmes avec le placement du bouton. En effet, n'ayant pas moi-même produit le fichier styles.css, j'ai mis un moment avant de m'y retrouver. 

- Le Local Storage 

- La fonctionnalité Undo / Redo avec un bouton "Annuler" permettant de supprimer le dernier item ajouté à la todo list. Puis, un bouton "Refaire" permettant d'ajouter à nouveau le ou les item(s) précédemment annulé(s). 

- Progressive Web App : Pour cette fonctionnalité j'ai rencontré des difficultés à améliorer les différents scores de Chrome Lighthouse. Ils sont restés sur un niveau moyen.

  Finalement, j'avais prévu d'implémenter des fonctionnalités comme la reconnaissance vocale et la possibilité d'ajouter des images/vidéos à la todo list. Cependant, avec les projets des autres matières je n'ai pas réussi à trouver le temps. 
