import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Leader} from '../../share/leader';
import {dbURL} from '../../share/dburl';



/*
  Generated class for the LeaderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LeaderProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LeaderProvider Provider');
  }
    
  getLeaders(): Observable<Leader[]>
{
  return this.http.get<Leader[]>(dbURL + 'leaders').map(
    res => res
  );
}

 getFeaturedLeader(): Observable<Leader>{
   return this.http.get<Leader>(dbURL + 'leaders?featured=true').map(
     res => res
   );
 }
}