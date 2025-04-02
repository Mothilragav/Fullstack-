import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  students = [
    { id: 1, name: 'John Doe', age: 20 },
    { id: 2, name: 'Jane Smith', age: 22 }
  ];

  @Output() studentSelected = new EventEmitter<any>();

  selectStudent(student: any) {
    this.studentSelected.emit(student);
  }
}
