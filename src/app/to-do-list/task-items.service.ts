import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { ItemModel } from './task-item.model';

@Injectable({providedIn: 'root'})
export class TaskItemService {
  private tdItems: ItemModel[] = [];
  private tdItemsUpdated = new Subject<ItemModel[]>();

  constructor(private http: HttpClient) {}
  getTdItems() {
    // return[...this.tdItems];
    this.http.get<({message: string, tasks: any})>('http://localhost:3000/api/tasks').pipe(map((taskData) => {
      return taskData.tasks.map(task => {
        return {
          todoItem: task.newItem,
          id: task._id
        };
      });
    }
    )).subscribe(
      transformedTasks => {
        this.tdItems = transformedTasks;
        this.tdItemsUpdated.next([...this.tdItems]);
      });
  }

  getTdItemUpdateListener() {
    return this.tdItemsUpdated.asObservable();
  }

  addTDItem(todoItem: string) {
    const tdItem: ItemModel = {id: null, todoItem: todoItem};
    this.http.post<{message: string, taskId: string}>('http://localhost:3000/api/tasks', tdItem).subscribe(responseData => {
      const id = responseData.taskId;
      tdItem.id = id;
      console.log(responseData.message);
      this.tdItems.push(tdItem);
      this.tdItemsUpdated.next([...this.tdItems]);
      // console.log("this is the array " + this.tdItems);
    });

  }
  // deletePost(taskId: string) {
  //   this.http.delete('http://localhost:3000/api/tasks/' + taskId).subscribe(() => {
  //   const updatedTasks = this.tdItems.filter(tdItems => tdItems.id !== taskId);
  //   this.tdItems = updatedTasks;
  //   this.tdItemsUpdated.next([...this.tdItems]);
  //   console.log('Deleted Post');
  //   });
  // }
}

