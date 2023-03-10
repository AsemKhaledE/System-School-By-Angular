
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListStudentCourse, CreateStudentCourse} from '../model/student-course.model';
@Injectable({
    providedIn:'root'
  })
export class Service {
    baseUrl="https://localhost:44333/api/StudentCourse";

   student:ListStudentCourse[]=[];  
   craeteStudentCourse!:CreateStudentCourse;
  course:ListStudentCourse[]=[];   
   constructor(private http:HttpClient) { }


   getAllStudentCourse(){
  this.http.get(this.baseUrl).toPromise().then(
    (data:any) =>{
      this.student=data.students as ListStudentCourse[]
      this.course=data.courses as ListStudentCourse[]
    }
  )
}
createStudentCourses(){
  return this.http.post(this.baseUrl+"/create",this.craeteStudentCourse)
}
}
