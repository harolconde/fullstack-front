import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceSponsorProvider } from '../../providers/service-sponsor/service-sponsor';

@IonicPage()
@Component({
  selector: 'page-sponsors',
  templateUrl: 'sponsors.html',
})
export class SponsorsPage {

  listSponsors: any;
  name: string;
  img: string;
  id: string;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams, 
  	public rest: ServiceSponsorProvider) {
  }

  ionViewDidLoad() {}

  getSponsors(){
  	this.rest.getSponsors().subscribe((res)=>{
  		this.listSponsors = res;
  	})
  }
  postSponsors(){
    this.rest.postSponsors(this.name, this.img).subscribe((val)=>{
    })
  }
  deleteSponsors(){
    this.rest.deleteSponsors(this.id).subscribe((val)=>{
    })
  }
  putSponsors(){
    this.rest.putSponsors(this.id, this.name, this.img).subscribe((val)=>{
    })
  }
}
