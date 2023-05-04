import { Component } from '@angular/core';
import { libon } from './libon';
import { breakfastData } from './breakfastData';
import { lunchData } from './lunchData';
import { dinnerData } from './dinnerData';
import breakfast from '../assets/data/breakfast.json';
import lunch from '../assets/data/lunch.json';
import dinner from '../assets/data/dinner.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'libon-A4';

  studInfo:libon = {studentNumber:991358694, name:"Bonita Li", 
  loginName:"libon", campus:"Trafalgar", assignmentTitle:"Assignment 4"};

  breakfastdata: breakfastData[] = breakfast.breakfast;
  lunchdata: lunchData[] = lunch.lunch;
  dinnerdata: breakfastData[] = dinner.dinner;

}
