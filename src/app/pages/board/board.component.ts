import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Column, Task } from 'src/app/models/todo.model';
import {
  faBell,
  faInfoCircle,
  faXmark,
  faX,
  faEllipsis,
  faPlus,
  faBook,
} from '@fortawesome/free-solid-svg-icons'; // font-awesome
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ToDoModalComponent } from '../../shared/to-do-modal/to-do-modal.component';

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
      isOpenCard: false,
      todos: [
        {
          id: 1,
          title: 'task-1-todo',
        },
        {
          id: 2,
          title: 'task-2-todo',
        },
        {
          id: 3,
          title: 'task-3-todo',
        },
      ],
    },
    {
      title: 'doing',
      isOpenCard: false,
      todos: [
        {
          id: 1,
          title: 'task-1-doing',
        },
        {
          id: 2,
          title: 'task-2-doing',
        },
        {
          id: 3,
          title: 'task-3-doing',
        },
      ],
    },
    {
      title: 'done',
      isOpenCard: false,
      todos: [
        {
          id: 1,
          title: 'task-1-done',
        },
        {
          id: 2,
          title: 'task-2-done',
        },
        {
          id: 3,
          title: 'task-3-done',
        },
      ],
    },
  ];

  faBell = faBell;
  faXmark = faXmark;
  faX = faX;
  faEllipsis = faEllipsis;
  faPlus = faPlus;
  faBook = faBook;

  openCard: boolean = false;
  addCardForm!: FormGroup;

  constructor(private fb: FormBuilder, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.initAddCardForm();
    this.addCardForm.valueChanges.subscribe((val) => {
      // console.log(val);
    });
  }

  readonly control = (name: string) => this.addCardForm.controls[name];
  // formulario para agregar targeta
  initAddCardForm() {
    this.addCardForm = this.fb.group({
      title: [
        { value: '', disabled: false },
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
    });
  }
  onSubmit(col: Column) {
    const title = this.control('title')?.value;
    if (title) {
      col.todos.push({
        id: Math.max(...col.todos.map((item) => item.id)) + 1,
        title,
      });
      this.control('title').setValue('');
    }
  }

  activeTextField() {
    this.control('title').enable();
  }
  // drag and drop: fx maneja mov en y entre columnas
  drop($event: CdkDragDrop<Task[]>) {
    // console.log($event);

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
      isOpenCard: false,
      todos: [],
    });
  }

  openAddCard(col: Column) {
    col.isOpenCard = !col.isOpenCard;
  }

  animal: string = '';
  name: string = '';

  openDialog(task: Task): void {
    const dialogRef = this.dialog.open(ToDoModalComponent, {
      minWidth: '300px',
      maxWidth: '50%',
      autoFocus: false,
      disableClose: true, // solo se cierra el modal cuando se da click sobre la X
      data: {
        // info que viaja hacia el componente
        task,
      },
    });

    dialogRef.afterClosed().subscribe((dataFromDialog) => {
      // la data que recibe es opcional
      // console.log('The dialog was closed');
      // console.log(dataFromDialog);
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
