import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Column, ToDo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [
    `
      /* Animate items as they're being sorted. */
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      /* Animate an item that has been dropped. */
      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
  ],
})
export class BoardComponent implements OnInit {
  columns: Column[] = [
    {
      title: 'todo',
      todos: [
        {
          id: '1',
          title: 'task-1-todo',
        },
        {
          id: '2',
          title: 'task-2-todo',
        },
        {
          id: '3',
          title: 'task-3-todo',
        },
      ],
    },
    {
      title: 'doing',
      todos: [
        {
          id: '1',
          title: 'task-1-doing',
        },
        {
          id: '2',
          title: 'task-2-doing',
        },
        {
          id: '3',
          title: 'task-3-doing',
        },
      ],
    },
    {
      title: 'done',
      todos: [
        {
          id: '1',
          title: 'task-1-done',
        },
        {
          id: '2',
          title: 'task-2-done',
        },
        {
          id: '3',
          title: 'task-3-done',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  // drag and drop: fx maneja mov en y entre columnas
  drop($event: CdkDragDrop<ToDo[]>) {
    console.log($event);

    // movimiento en la misma columna
    if ($event.previousContainer === $event.container) {
      // ordenar elementos de un arr
      moveItemInArray(
        $event.container.data,
        $event.previousIndex,
        $event.currentIndex
      );
    } else {
      // movimiento entre columnas
      transferArrayItem(
        $event.previousContainer.data,
        $event.container.data,
        $event.previousIndex,
        $event.currentIndex
      );
    }
  }

  addColum() {
    this.columns.push({
      title: 'new column',
      todos: [],
    });
  }
}

/*

  taskListToDo: ToDo[] = [
    {
      id: '1',
      title: 'task-1-todo',
    },
    {
      id: '2',
      title: 'task-2-todo',
    },
    {
      id: '3',
      title: 'task-3-todo',
    },
  ];

  taskListDoing: ToDo[] = [
    {
      id: '1',
      title: 'task-1-doing',
    },
    {
      id: '2',
      title: 'task-2-doing',
    },
    {
      id: '3',
      title: 'task-3-doing',
    },
  ];

  taskListDone: ToDo[] = [
    {
      id: '1',
      title: 'task-1-done',
    },
    {
      id: '2',
      title: 'task-2-done',
    },
    {
      id: '3',
      title: 'task-3-done',
    },
  ];

*/
