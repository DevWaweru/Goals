import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals = [
    new Goal(1, "Watch Finding Nemo","Remember to delete the movie to save space on your hard disk", new Date(2018,3,14) ),
    new Goal(2, "Buy Cookies and Lunch","but cookies for the parrot and Lunch for the cat", new Date(2018,1,28)),
    new Goal(3, "Buy a cake","Younger sister's birthday is coming up", new Date(2017,4,27)),
    new Goal(4, "Get Dog food", "Else they will eat the homework", new Date(2018,6,7)),
    new Goal(5, "Take the car to the Car-wash", "Cleanliness is next to Godliness", new Date(2018,6,14)),
    new Goal(6, "Go on a date","You haven't been sleeping of late. You need a date with the bed", new Date(2018,5,16)),
  ]

  toggleDetails(index){
    this.goals[index].showDescription=!this.goals[index].showDescription;
  }
  
  completeGoal(isComplete,index){
    if(isComplete){
      this.goals.splice(index,1);
    }
  }
  deleteGoal(isComplete,index){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name} goal?`)
      if(toDelete){
        this.goals.splice(index,1);
      }
    }
  }
  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id=goalLength+1;
    goal.completeDate = new Date(goal.completeDate);
    this.goals.push(goal);
  }

  constructor() { }

  ngOnInit() {
  }
  
}
