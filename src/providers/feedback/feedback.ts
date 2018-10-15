import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Feedback} from'../../shared/feedback';
import {dbURL} from '../../shared/dburl';

/*
  Generated class for the FeedbackProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FeedbackProvider {

  constructor(public http: HttpClient) {
    console.log('Hello FeedbackProvider Provider');
  }

  getFeedback(): Observable<Feedback[]>{
    return this.http.get<Feedback[]>(dbURL + 'feedback').map(
      res => res
    );
  }
  getFeaturedFeedback(): Observable<Feedback[]>{
    return this.http.get<Feedback[]>(dbURL + 'feedback?featured=true').map(
      res => res
    );
  }
}
