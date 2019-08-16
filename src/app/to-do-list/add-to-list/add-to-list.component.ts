import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TaskItemService } from '../../to-do-list/task-items.service';

@Component({
    selector: 'app-add-to-list',
    templateUrl: './add-to-list.component.html',
    styleUrls: ['./add-to-list.component.css']
})

export class AddToListComponent {
 enteredToDoItem = '';

 constructor(public taskItemService: TaskItemService) {}

 onAddToDoItem( form: NgForm ) {
     if (form.invalid) {
         return;
     }
     this.taskItemService.addTDItem(form.value.newItem),
     console.log(form.value.newItem);
     form.resetForm();
 }
}

