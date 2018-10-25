import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceSocialnetProvider } from '../../providers/service-socialnet/service-socialnet';

@IonicPage()
@Component({
  selector: 'page-socialnets',
  templateUrl: 'socialnets.html',
})
export class SocialnetsPage {
  
  listSocialnets: any;
  name: string;
  id: string;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams, 
  	public rest:ServiceSocialnetProvider) {
  }

  ionViewDidLoad() {}

  getSocialnets(){
  	this.rest.getSocialnets().subscribe((res)=>{
  		this.listSocialnets = res;
  	})
  }
  postSocialnets(){
    this.rest.postSocialnets(this.name).subscribe((val)=>{
    })
  }
  deleteSocialnets(){
    this.rest.deleteSocialnets(this.id).subscribe((val)=>{
    })
  }
  putSocialnets(){
    this.rest.putSocialnets(this.id, this.name).subscribe((val)=>{
    })
  }
}
