# MIASHS-M2-TP3-Projet

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Fonctionnalités implémentées 

- La todo list sur le modèle de http://todomvc.com 

- Un bouton Effacer tout qui permet de supprimer tous les items de la todo list. En implémentant cette fonctionnalité j'ai rencontré quelques problèmes avec le placement du bouton. En effet, n'ayant pas moi-même produit le fichier styles.css, j'ai mis un moment avant de m'y retrouver. 

- Le Local Storage 

- La fonctionnalité Undo / Redo avec un bouton "Annuler" permettant de supprimer le dernier item ajouté à la todo list. Puis, un bouton "Refaire" permettant d'ajouter à nouveau le ou les item(s) précédemment annulé(s). 

- Progressive Web App : Pour cette fonctionnalité j'ai rencontré des difficultés à améliorer les différents scores de Chrome Lighthouse. Ils sont restés sur un niveau moyen.
