import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Course } from '../course.model';
@Injectable({
  providedIn: 'root'
})
export class Service {
  baseUrl="https://localhost:44333/api/Course";
 courses:Course[]=[];
  course!:Course;
 
  constructor(private http:HttpClient) { }
  
 getAllCourses(){
  this.http.get(this.baseUrl).toPromise().then(
    res=>{
      this.courses=res as Course[];
    }
  )
 }
 postCourse(){
  return this.http.post(this.baseUrl+"/create",this.course)
 }

 putCourse(){
  return this.http.post(this.baseUrl+"/updateCourse",this.course);
}
deleteCourse(courseId: number){
  return this.http.post(this.baseUrl+"/deleteCourse",courseId);
}

}
