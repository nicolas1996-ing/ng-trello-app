import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import {
  faClose,
  faCheckToSlot,
  faBars,
  faUser,
  faTag,
  faCheckSquare,
  faClock,
} from '@fortawesome/free-solid-svg-icons'; // font-awesome
import { Task } from 'src/app/models/todo.model';

interface InputData {
  task: Task;
}

interface OutputDate {
  rta: boolean;
  message: string;
}

@Component({
  selector: 'app-to-do-modal',
  templateUrl: './to-do-modal.component.html',
  styleUrls: ['./to-do-modal.component.scss'],
})
export class ToDoModalComponent implements OnInit {
  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faClock = faClock;
  faCheckSquare = faCheckSquare;

  task: Task; // info que llega la componente

  constructor(
    public dialogRef: MatDialogRef<OutputDate>,
    @Inject(MAT_DIALOG_DATA) public data: InputData
  ) {
    this.task = data.task; // info que llega
  }

  ngOnInit(): void {}

  closeModal() {
    this.dialogRef.close({
      rta: true,
      message: 'modal cerrado - data hacia el component padre',
    });
    // data hacia el componente padre (opcional)
  }

  closeModalWithBtn(rta: boolean) {
    this.dialogRef.close({
      rta,
      message: 'close modal with bnt',
    });
  }
}
