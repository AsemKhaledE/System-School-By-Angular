import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Student } from "../student.model";

@Injectable({
  providedIn: 'root'
})

export class StudentService {
    baseUrl="https://localhost:44333/api/Student";
    students:Student[]=[];
    student!:Student;
   constructor(private http:HttpClient) { }
   getAllStudent(){
    this.http.get(this.baseUrl).toPromise().then(
      res=>{
        this.students=res as Student[];
      }
    )
   }
   postStudent(){
    return this.http.post(this.baseUrl+"/create",this.student)
   }
  
   putStudent(){
    return this.http.post(this.baseUrl+"/updateStudent",this.student);
  }
  deleteStudent(studentId: number){
    return this.http.post(this.baseUrl+"/deleteStudent",studentId);
  }
  
}

