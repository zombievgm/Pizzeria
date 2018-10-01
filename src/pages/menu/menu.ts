import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DishProvider} from '../../providers/dish/dish';
import {Dish} from '../../shared/dish';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  dishes: Dish[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,  
    private dishService: DishProvider, 
    @Inject('DbURL') private dbURL
    ) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  ngOnInit(){
    this.getDishes();
  }

  getDishes(){
    this.dishService
    .getDishes()
    .subscribe(
      response => {
        this.dishes = response[0];
        console.log(this.dishes);
      },
      error =>{
        console.log(error);
      }
    );
  }

}

