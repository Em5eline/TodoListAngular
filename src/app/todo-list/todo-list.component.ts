import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {TodoListData} from '../dataTypes/TodoListData';
import {TodoItemData} from '../dataTypes/TodoItemData';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  @Input() 
  
  data: TodoListData; //Récupère les données de mon service
  titre: string;
  choice: string = 'toutes'; //Variable permettant de contrôler l'affichage de tâches spécifiques (Toutes, Actives, Complétées)
  redoTab: TodoItemData [] = []; //Tableau contenant les items annulés
  possibleRedo: number; //Quantité d'items annulés stockés
  showRedo: boolean = false; //Booléen permettant d'afficher le bouton "Refaire"
  
  constructor(private todoService: TodoService) { 
    todoService.getTodoListDataObserver().subscribe(tdl => this.data = tdl); //Je récupère mon service en tant qu'observable et je m'abonne (je reçois chaque maj et je mets à jour ma data). La todolist est stockée dans data
    this.titre = this.data.label; 
  }                                                   

  ngOnInit() {

    this.todoService.loadLocalStorage();
     this.todoService.getTodoListDataObserver().subscribe(tdl => {
       this.data = tdl
       localStorage.setItem('todo-list', JSON.stringify(this.data))
     }); 
    
      
  }

  get label(): string {
    return this.data ? this.data.label : '';
  }

  get items(): TodoItemData[] {
    return this.data ? this.data.items : [];
  }

  appendItem(label: string) {
    if (label != '') {
      this.todoService.appendItems(
        { label, 
          isDone : false,
          editing: false
        }
      );
    }

  }

  itemDone(item: TodoItemData, done:boolean) {
    this.todoService.setItemsDone(done, item); //Recalcule la liste et mets les items checked à la bonne valeur
  }

  itemLabel(item: TodoItemData, label: string) {
    this.todoService.setItemsLabel(label, item);
  }

  removeItem(item: TodoItemData) {
    this.todoService.removeItems(item);
  }

  //Permet de tout sélectionner ou tout déselectionner
  selectUnselectAll() { 
    if (this.data.items.every(val => val.isDone == true))
      this.data.items.forEach(val => { this.todoService.setItemsDone(false,val) });
    else
      this.data.items.forEach(val => {this.todoService.setItemsDone(true,val)});
      
  }

  //Suppression de toutes les tâches sélectionner
  removeSelected() { 
    this.data.items = this.data.items.filter(val => val.isDone == false);

  }
  
  //Efface tous les items de la todo list
  removeAll() {
    this.data.items.forEach(element => { this.removeItem(element)});
  }

  //Renvoie le nombre de tâches restantes
  howManyLeft() { 
    let count : number = this.data.items.length;
    for (let i = 0; i < this.data.items.length; i++) {
      if (this.data.items[i].isDone == true) {count--} //On garde seulement le nombre de tâches qui sont actives
    }
    return count;
  }

  //Annule le dernier item ajouté
  undo() {
    this.possibleRedo = this.redoTab.push(this.data.items.pop());
    this.showRedo = true;
  }

  //Ajoute à la todo list le dernier item annulé
  redo() {
    this.todoService.appendItems(this.redoTab.pop());
    this.possibleRedo -= 1;
    if (this.possibleRedo == 0) {
      this.showRedo = false;
    }
  }

  

  
  

}
