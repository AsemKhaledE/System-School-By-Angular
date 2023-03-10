import { Component, OnInit } from '@angular/core';
import { Service } from '../services/getCoursesById.service';

@Component({
  selector: 'app-get-courses-by-id',
  templateUrl: './get-courses-by-id.component.html',
  styleUrls: ['./get-courses-by-id.component.css'],
})
export class GetCoursesByIdComponent implements OnInit {
  constructor(public service: Service) {}
  ngOnInit() {
    this.service.listStudent();
    this.service.students = {
      students: [],
      courseId: 0,
      studentId: 0,
      firstName: '',
      title: '',
    };
  }

  getCourses() {
    var id = this.service.students.studentId;
    var x = this.service.getCoursesById(id);
    console.log(x);
  }
  delete(studentId: number, courseId: number) {
    this.service.deleteStudentCourse(studentId, courseId).subscribe((res) => {
      this.service.getCoursesById(studentId);
    });
  }
}
