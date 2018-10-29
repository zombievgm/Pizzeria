import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import {Dish} from'../../shared/dish';
import {DishProvider} from '../../providers/dish/dish';
import {Observable} from 'rxjs/Observable';

/*
  Generated class for the FavoriteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoriteProvider {

  favorites : Array<any>;

  constructor(
    public http: HttpClient,
    private dishService: DishProvider
    ) {

   

  this.favorites = [];

    console.log('Hello FavoriteProvider Provider');
  }

  addToFavorites(id:number):boolean{
    if(!this.isFavorite(id)){
      this.favorites.push(id);
    return true;
    }

  }

  isFavorite(id:number){
    return this.favorites.some(dish=>dish===id)

  }

  getFavorites(): Observable<Dish[]>{
    console.log(this.favorites);
    return this.dishService.getDishes().map(
      res => res.filter(dishes => this.favorites.some(dish => dish == dishes.id))
    )

  }

  deleteFavorites(id: number): Observable<Dish[]>{
    let index = this.favorites.indexOf(id);

    if(index >= 0){
      this.favorites.splice(index, 1);
      return this.getFavorites();
    }else{
      console.log('No es favorito', id);
    }

  }

}


