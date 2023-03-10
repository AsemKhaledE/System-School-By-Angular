import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListCourse, ListStudent } from '../model/getStudentCourse.model';
@Injectable({
  providedIn: 'root',
})
export class Service {
  baseUrl = 'https://localhost:44333/api/';
  student: ListStudent[] = [];
  students!: ListStudent;
  course: ListCourse[] = [];
  constructor(private http: HttpClient) {}

  listStudent() {
    this.http
      .get(this.baseUrl + 'Student')
      .toPromise()
      .then((data: any) => {
        this.student = data as ListStudent[];
      });
  }

  getCoursesById(studentId: number) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('id', studentId);

    return this.http
      .get(this.baseUrl + 'GetCourseByStudentId/GetstudentCourses', {
        params: queryParams,
      })
      .toPromise()
      .then((data: any) => {
        this.course = data as ListCourse[];
      });
  }

  deleteStudentCourse(studentId: number, courseId: number) {
    return this.http.post(
      'https://localhost:44333/api/GetCourseByStudentId/deleteStudentCourse',
      {
        studentId,
        courseId,
      }
    );
  }
}
