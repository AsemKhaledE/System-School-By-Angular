import { HttpClient } from "@angular/common/http";
import { Trainer } from "../trainer.model";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
  })
export class TrainerService{
    baseUrl="https://localhost:44333/api/Trainer";
    trainers:Trainer[]=[];
    trainer!:Trainer;
    constructor(private http:HttpClient) { }
    getAllTrainer(){
        this.http.get(this.baseUrl).toPromise().then(
            res=>{
                this.trainers=res as Trainer[];
            }
        )
    }
    postTrainer(){
        return this.http.post(this.baseUrl+"/create",this.trainer)
       }
       putTrainer(){
        return this.http.post(this.baseUrl+"/updateTrainer",this.trainer);
      }
      deleteTrainer(trainerId: number){
        return this.http.post(this.baseUrl+"/deleteTrainer",trainerId);
      }
}