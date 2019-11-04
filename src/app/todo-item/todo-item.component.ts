import {ChangeDetectionStrategy, Component, OnInit, Input} from '@angular/core';
import { TodoItemData } from '../dataTypes/TodoItemData';
import {TodoService} from '../todo.service';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {

  @Input() 
  private data: TodoItemData; //Décorateur : Faire le bind entre les données et les éléments HTML. Data est instancié par la boucle *ngFor

  

  constructor(private todoService: TodoService) { 
    
  } 

  ngOnInit() {
  }

  remove(item: TodoItemData) {
    this.todoService.removeItems(item);
  }

  itemDone(item: TodoItemData, done:boolean) {
    this.todoService.setItemsDone(done, item); //Recalcule la liste et mets les items checked à la bonne valeur
  }

  itemLabel(item: TodoItemData, label: string) {
    this.todoService.setItemsLabel(label, item);
    
  }


    

  
}
