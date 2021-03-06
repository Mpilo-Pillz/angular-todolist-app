import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ItemModel } from '../task-item.model';
import { TaskItemService } from '../task-items.service';

@Component({
    selector: 'app-to-do-list',
    templateUrl: './to-do-list.component.html',
    styleUrls: ['./to-do-list.component.css']
})

export class ToDoListComponent implements OnInit, OnDestroy {
    tdItems: ItemModel[] = [];
    private itemsSub: Subscription;

    constructor(public taskItemService: TaskItemService) {    }

    ngOnInit() {
        // this.tdItems = this.taskItemService.getTdItems();
        this.taskItemService.getTdItems();
        this.itemsSub = this.taskItemService.getTdItemUpdateListener()
        .subscribe((tdItems: ItemModel[]) => {
            this.tdItems = tdItems;
        });

    }

    onDelete(taskId: string) {
        this.taskItemService.deleteTask(taskId);
    }
    ngOnDestroy() {
        this.itemsSub.unsubscribe();
    }
}
