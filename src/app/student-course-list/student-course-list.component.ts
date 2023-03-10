import { Component, OnInit } from '@angular/core';
import { Service } from '../services/student-course.service';

@Component({
  selector: 'app-student-course-list',
  templateUrl: './student-course-list.component.html',
  styleUrls: ['./student-course-list.component.css']
})
export class StudentCourseListComponent implements OnInit{
  constructor(public service:Service){
}  ngOnInit() {this.service.craeteStudentCourse={
  studentId:0,
  courseId:0
}

  this.service.getAllStudentCourse();
  }
  submit(){
 this.service.createStudentCourses().subscribe(res=>{
  this.service.getAllStudentCourse();
  }
  )}
}