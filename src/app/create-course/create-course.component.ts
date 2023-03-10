import { Component, OnInit } from '@angular/core';
import { Service } from '../services/course.service';
@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export default class CreateCourseComponent implements OnInit {
 
  
  constructor(public service:Service){
  }
  ngOnInit(){ this.service.course={
    courseId:0,
    title:'',
    price:0
  }
}

submit(){
  
  if(this.service.course.courseId==0){
    this.service.postCourse().subscribe(res=>{
      this.service.getAllCourses()
    },
    err=>{
      console.log(err)
    })
  }
  else{
    this.service.putCourse().subscribe(res=>{
      this.service.getAllCourses()
    },
    err=>{
      console.log(err)
    })
  }

  }
 }

 



