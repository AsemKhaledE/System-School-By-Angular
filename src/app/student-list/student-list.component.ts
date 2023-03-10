import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
    constructor(public service:StudentService){
    
    }
  ngOnInit() {
   this.service.getAllStudent();
  }
  fillData(item: { studentId: number; firstName: string; lastName: string; studentGender: string; phone: number; email: string; }){
    this.service.student.studentId=item.studentId
    this.service.student.firstName=item.firstName
    this.service.student.lastName=item.lastName
    this.service.student.studentGender=item.studentGender
    this.service.student.phone=item.phone
    this.service.student.email=item.email
  }
  delete(courseId:number){
    this.service.deleteStudent(courseId).subscribe(res=>{
      this.service.getAllStudent()
    })
  }
  }