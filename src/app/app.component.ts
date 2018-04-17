import { Component } from '@angular/core';
import {Goal}from './goal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // template: `
  //   <h1> My Goals </h1>
  //   <p> My Goal for today is {{goal}} </p>
  //   `
})
export class AppComponent {
  title = 'app';
  // goals: string[];
  // constructor(){
  //   this.goals = ['Learn Javascript','Eat Lunch','Go Home'];
  // }
  // goals = [
  //   new Goal(1, "Watch Finding Nemo","Remember to delete the movie to save space on your hard disk"),
  //   new Goal(2, "Buy Cookies and Lunch","but cookies for the parrot and Lunch for the cat"),
  //   new Goal(3, "Buy a cake","Younger sister's birthday is coming up"),
  //   new Goal(4, "Get Dog food", "Else they will eat the homework"),
  //   new Goal(5, "Take the car to the Car-wash", "Cleanliness is next to Godliness"),
  //   new Goal(6, "Go on a date","You haven't been sleeping of late. You need a date with the bed"),
  // ]
}
