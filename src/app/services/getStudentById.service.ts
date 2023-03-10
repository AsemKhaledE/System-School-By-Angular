import { HttpClient, HttpParams } from '@angular/common/http';
import { ListCourse, ListStudent } from '../model/getStudentCourse.model';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class Service {
  baseUrl = 'https://localhost:44333/api/';
  course: ListCourse[] = [];
  courses!: ListCourse;
  student: ListStudent[] = [];

  constructor(private http: HttpClient) {}

  listCourses() {
    this.http
      .get(this.baseUrl + 'Course')
      .toPromise()
      .then((data: any) => {
        this.course = data as ListCourse[];
      });
  }
  getStudentById(courseId: number) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('id', courseId);

    return this.http
      .get(this.baseUrl + 'GetStudentByCourseId/getStudentCourses', {
        params: queryParams,
      })
      .toPromise()
      .then((data: any) => {
        this.student = data as ListStudent[];
      });
  }
  deleteStudentCourse(studentId: number, courseId: number) {
    return this.http.post(
      'https://localhost:44333/api/GetStudentByCourseId/deleteStudentCourse',
      {
        studentId,
        courseId,
      }
    );
  }
}
