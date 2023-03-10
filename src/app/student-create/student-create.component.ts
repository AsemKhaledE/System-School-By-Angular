import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
constructor(public service:StudentService){

}
ngOnInit(){this.service.student={
studentId:0,
firstName:'',
lastName:'',
studentGender:'',
phone:0,
email:''
}

}

submit(){
  
  if(this.service.student.studentId==0){
    this.service.postStudent().subscribe(res=>{
      this.service.getAllStudent()
    },
    err=>{
      console.log(err)
    })
  }
  else{
    this.service.putStudent().subscribe(res=>{
      this.service.getAllStudent()
    },
    err=>{
      console.log(err)
    })
  }

  }
}
