import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import {Dish} from '../../shared/dish';


import{dbURL} from '../../shared/dburl';
import{Dish} from '../../shared/dish';

/*
  Generated class for the DishProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DishProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DishProvider Provider');
  }

}
