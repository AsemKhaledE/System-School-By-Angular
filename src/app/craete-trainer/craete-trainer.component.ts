import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../services/trainer.service';

@Component({
  selector: 'app-craete-trainer',
  templateUrl: './craete-trainer.component.html',
  styleUrls: ['./craete-trainer.component.css']
})
export class CraeteTrainerComponent implements OnInit {
  constructor(public service:TrainerService){

  }
  ngOnInit(){this.service.trainer={
    trainerId:0,
    trainerName:'',
    birthdate:new Date,
    city:''
  }
}
submit(){
  if(this.service.trainer.trainerId==0){
    this.service.postTrainer().subscribe(res=>{
      this.service.getAllTrainer()
    },
    err=>{
      console.log(err)
    })
  }
  else{
    this.service.putTrainer().subscribe(res=>{
      this.service.getAllTrainer()
    },
    err=>{
      console.log(err)
    })
  }
  }
}
