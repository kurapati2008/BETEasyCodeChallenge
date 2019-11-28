import { Component, OnInit } from '@angular/core';

import {RaceCourseService} from '../shared/race.service';
import {RaceCourse} from '../shared/race.model';

@Component({
  selector: 'app-race-course-data',
  templateUrl: './race-course-data.component.html',
  styleUrls: ['./race-course-data.component.css'],
  providers:[RaceCourseService]
})
export class RaceCourseDataComponent implements OnInit {

  _postsArray: RaceCourse[];
  displayedColumns: string[] = ['EventTypeDesc', 'Venue','AdvertisedStartTime'];
  dataSource: RaceCourse[]; 

  constructor(private raceservice : RaceCourseService) { }

  ngOnInit() {
    this.raceservice.getNextFiveRaceCourses()
    .subscribe(
        resultArray => 
        {
          for (let value of resultArray) { 
            if(value.EventTypeDesc === "Greyhounds")
                value.ImageUrl = "assets/Greyhound.PNG"
            else if(value.EventTypeDesc === "Thoroughbred")
                value.ImageUrl = "assets/throughbread.JPG"
            else
                value.ImageUrl = "assets/Trot.JPG"
          } 
          this._postsArray = resultArray;
          this.dataSource = this._postsArray;
        },
        error => console.log("Error :: " + error));
  }

  filterCourses(raceType: string) {
    if(raceType != '')
      this.dataSource = this._postsArray.filter(course => course.EventTypeDesc === raceType);  
    else
      this.dataSource = this._postsArray;
  }

}
