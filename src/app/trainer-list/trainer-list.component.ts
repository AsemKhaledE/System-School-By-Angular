import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../services/trainer.service';


@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css']
})
export class TrainerListComponent implements OnInit{
  constructor(public service:TrainerService){
    
  }
ngOnInit() {
 this.service.getAllTrainer();
}
fillData(item: { trainerId: number; trainerName: string; birthdate: Date; city: string;}){
  this.service.trainer.trainerId=item.trainerId
  this.service.trainer.trainerName=item.trainerName
  this.service.trainer.birthdate=item.birthdate
  this.service.trainer.city=item.city
}
delete(courseId:number){
  this.service.deleteTrainer(courseId).subscribe(res=>{
    this.service.getAllTrainer()
  })
}
}
