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

  get label(): string {
    return this.data.label;
  }

  remove() {
    this.todoService.removeItems(this.data);
  }

  itemDone(item: TodoItemData, done:boolean) { //Recalcule la liste et mets les items checked à la bonne valeur
    this.todoService.setItemsDone(done, item); 
  }

  itemLabel(item: TodoItemData, label: string) { //Change la valeur du label
    this.todoService.setItemsLabel(label, item); 
    
  }

 


    

  
}
