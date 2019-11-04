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
  
  private data: TodoListData; //récupère les données de mon service
  private titre: string;
  private choice: string = 'toutes'; //Variable permettant de contrôler l'affichage de tâches spécifiques (Toutes, Actives, Complétées)
  
  constructor(private todoService: TodoService) { 
    todoService.getTodoListDataObserver().subscribe(tdl => this.data = tdl); //Je récupère mon service en tant qu'observable et je m'abonne (je reçois chaque maj et je mets à jour ma data). La todolist est stockée dans data
    this.titre = this.data.label; 
  }                                                   

  ngOnInit() {
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
          isDone : false}
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

  selectUnselectAll() { //Permet de tout sélectionner ou tout déselectionner
    if (this.data.items.every(val => val.isDone == true))
      this.data.items.forEach(val => { val.isDone = false });
    else
      this.data.items.forEach(val => { val.isDone = true });
  }

  removeSelected() { //Suppression de toutes les tâches sélectionner
    this.data.items = this.data.items.filter(val => val.isDone == false);

  }

  removeAll() {
    this.data.items.forEach(element => { this.removeItem(element)});
  }

  howManyLeft() { //Renvoie le nombre de tâches restantes
    let count : number = this.data.items.length;
    for (let i = 0; i < this.data.items.length; i++) {
      if (this.data.items[i].isDone == true) {count--} //On garde seulement le nombre de tâches qui sont actives
    }
    return count;
  }

  
  

}
