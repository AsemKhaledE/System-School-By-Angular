import { Component, OnInit } from '@angular/core';
import { Service } from '../services/getStudentById.service';

@Component({
  selector: 'app-get-student-by-id',
  templateUrl: './get-student-by-id.component.html',
  styleUrls: ['./get-student-by-id.component.css'],
})
export class GetStudentByIdComponent implements OnInit {
  constructor(public service: Service) {}

  ngOnInit() {
    this.service.listCourses();
    this.service.courses = {
      courses: [],
      courseId: 0,
      studentId: 0,
      title: '',
    };
  }
  getStudents() {
    var id = this.service.courses.courseId;
    var x = this.service.getStudentById(id);
    console.log(x);
  }
  delete(studentId: number, courseId: number) {
    this.service.deleteStudentCourse(studentId, courseId).subscribe((res) => {
      this.service.getStudentById(courseId);
    });
  }
}
