import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DishProvider} from '../../providers/dish/dish';
import {Dish} from '../../shared/dish';
import {LeaderProvider} from '../../providers/leader/leader';
import {Leader} from '../../shared/leader';
import {PromotionProvider} from '../../providers/promotion/promotion';
import {Promotion} from '../../shared/promotion';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit{

  dish: Dish;
  leader: Leader;
  promotion: Promotion;

  constructor(
    public navCtrl: NavController,
    private dishService: DishProvider,
    private leaderService: LeaderProvider,
    private promotionService: PromotionProvider,
    @Inject('DbURL') private dbURL
    ) {
  }

  getFeaturedDish(){
    this.dishService
    .getFeaturedDish()
    .suscribe(
      response => {
        this.dish = response[0];
        console.log(this.dish);
      },
      error => {
        console.log(error);
      }
    )
  }

}
