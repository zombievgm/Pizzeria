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
    this.dishService.getFeaturedDish()
    .suscribe(
      dish => this.dish = dish[0],
      error => {console.log(error)}
    )

    this.leaderService.getFeaturedLeader()
    .suscribe(
      leader => this.leader = leader[0],
      error => {console.log(error)}
    )

    this.promotionService.getFeaturedPromotion()
    .suscribe(
      promotion => this.promotion = promotion[0],
      error => {console.log(error)}
    )
  }



}
