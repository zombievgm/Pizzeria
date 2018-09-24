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

  ngOnInit(){
    this.getFeaturedDish();
  }

  getFeaturedDish(){
    this.dishService
    .getFeaturedDish()
    .subscribe(
      response => {
        this.dish = response[0];
        console.log(this.dish);
      },
      error =>{
        console.log(error);
      }
    );
  }

  getFeaturedPromotion(){
    this.promotionService
    .getFeaturedPromotion()
    .subscribe(
      response => {
        this.promotion = response[0];
        console.log(this.promotion);
      },
      error =>{
        console.log(error);
      }
    );
  }

  getFeaturedLeader(){
    this.leaderService
    .getFeaturedLeader()
    .subscribe(
      response => {
        this.leader = response[0];
        console.log(this.leader);
      },
      error =>{
        console.log(error);
      }
    );
  }

}
