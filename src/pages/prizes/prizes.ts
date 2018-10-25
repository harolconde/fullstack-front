import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicePrizeProvider } from '../../providers/service-prize/service-prize';

@IonicPage()
@Component({
  selector: 'page-prizes',
  templateUrl: 'prizes.html',
})
export class PrizesPage {
  
  listPrizes: any;
  name: string;
  ncoin: any;
  img: string;
  id: string;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams, 
  	public rest:ServicePrizeProvider) {
  }

  ionViewDidLoad() {}

  getPrizes(){
  	this.rest.getPrizes().subscribe((res)=>{
  		this.listPrizes = res;
  	})
  }
  postPrizes(){
    this.rest.postPrizes(this.name, this.ncoin, this.img).subscribe((val)=>{
    })
  }
  deletePrizes(){
    this.rest.deletePrizes(this.id).subscribe((val)=>{
    })
  }
  putPrizes(){
    this.rest.putPrizes(this.id, this.name, this.ncoin, this.img).subscribe((val)=>{
    })
  }
}
