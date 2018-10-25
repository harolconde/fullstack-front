import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicePicProvider } from '../../providers/service-pic/service-pic';

@IonicPage()
@Component({
  selector: 'page-pics',
  templateUrl: 'pics.html',
})
export class PicsPage {
  
  listPics: any;
  name: string;
  id: string;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public rest: ServicePicProvider) {
  }

  ionViewDidLoad() {}

  getPics(){
  	this.rest.getPics().subscribe((res)=>{
  		this.listPics = res;
  	})
  }
  postPics(){
    this.rest.postPics(this.name).subscribe((val)=>{
    })
  }
  deletePics(){
    this.rest.deletePics(this.id).subscribe((val)=>{
    })
  }
  putPics(){
    this.rest.putPics(this.id, this.name).subscribe((val)=>{
    })
  }
}
