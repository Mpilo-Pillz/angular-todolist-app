import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ItemModel } from './task-item.model';

@Injectable({providedIn: 'root'})
export class TaskItemService {
  private tdItems: ItemModel[] = [];
  private tdItemsUpdated = new Subject<ItemModel[]>();

  getTdItems() {
    return[...this.tdItems];
  }

  getTdItemUpdateListener() {
    return this.tdItemsUpdated.asObservable();
  }

  addTDItem(todoItem: string) {
    const tdItem: ItemModel = {todoItem: todoItem};
    this.tdItems.push(tdItem);
    this.tdItemsUpdated.next([...this.tdItems]);
    console.log(this.tdItems);
  }
}

