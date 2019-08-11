import { Injectable, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ItemModel } from './task-item.model';

@Injectable({providedIn: 'root'})
export class TaskItemService {
  private tdItems: tdItems[] = [];
  private tdItemsUpdated = new Subject<Post[]>();

  getTdItems() {
    return[...this.tdItems];
  }

  getTdItemUpdateListener() {
    return this.tdItemsUpdated.asObservable();
  }

  addTDItem(todoItem: string){
    const tdItems: tdItems = {todoItem: todoItem};
    this.tdItems.push(tdItem);
    this.tdItemsUpdated.next([...this.tdItems]);
  }
}

