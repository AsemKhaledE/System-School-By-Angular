import { Component, OnInit } from '@angular/core';
import { Service } from '../services/course.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
constructor(public service:Service){

}
ngOnInit() {
    this.service.getAllCourses();
}
fillData(item: { courseId: number; title: string; price: number; }){
  this.service.course.courseId=item.courseId;
  this.service.course.title=item.title;
  this.service.course.price=item.price;
}
delete(courseId:number){
  this.service.deleteCourse(courseId).subscribe(res=>{
    this.service.getAllCourses()
  })
}
}

