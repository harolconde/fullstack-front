import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceCoinProvider } from '../../providers/service-coin/service-coin';

@IonicPage()
@Component({
  selector: 'page-coins',
  templateUrl: 'coins.html',
})
export class CoinsPage {
  
  listCoins: any;
  number: any;
  id:string;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public rest: ServiceCoinProvider) {
  }
  ionViewDidLoad() {}

  getCoins(){
  	this.rest.getCoins().subscribe((res)=>{
  		this.listCoins = res;
  	})
  }
  postCoins(){
    this.rest.postCoins(this.number).subscribe((val)=>{
    })
  }
  deleteCoins(){
    this.rest.deleteCoins(this.id).subscribe((val)=>{
    })
  }
  putCoins(){
    this.rest.putCoins(this.id, this.number).subscribe((val)=>{
    })
  }
}
