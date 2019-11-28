import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {RaceCourse} from './race.model';

@Injectable()
export class RaceCourseService {
  selectedTraining : RaceCourse;
  raceDetails : RaceCourse[];
  constructor(private http : Http) { }

  getNextFiveRaceCourses() : Observable<RaceCourse[]> {
    return  this.http.get('https://localhost:44344/api/RaceData/race')
    .map((data : Response) =>{
     // console.log(data.json() as RaceCourse[]);
      return data.json() as RaceCourse[];
    });
  }


}