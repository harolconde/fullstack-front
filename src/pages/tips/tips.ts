import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceTipProvider } from '../../providers/service-tip/service-tip';

@IonicPage()
@Component({
  selector: 'page-tips',
  templateUrl: 'tips.html',
})
export class TipsPage {

  listTips: any;
  name: string;
  description: string;
  id: string;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams, 
  	public rest: ServiceTipProvider) {
  }

  ionViewDidLoad() {}
  
  getTips(){
  	this.rest.getTips().subscribe((res)=>{
  		this.listTips = res;
  	})
  }
  postTips(){
    this.rest.postTips(this.name, this.description).subscribe((val)=>{
    })
  }
  deleteTips(){
    this.rest.deleteTips(this.id).subscribe((val)=>{
    })
  }
  putTips(){
    this.rest.putTips(this.id, this.name, this.description).subscribe((val)=>{
    })
  }
}
