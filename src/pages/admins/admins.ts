import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceAdminProvider } from '../../providers/service-admin/service-admin';

@IonicPage()
@Component({
  selector: 'page-admins',
  templateUrl: 'admins.html',
})
export class AdminsPage {
  
  listAdmins: any;
  user: string;
  password: string;
  id: string;
  
  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public rest: ServiceAdminProvider) {
  }

  ionViewDidLoad() {}

  getAdmins(){
  	this.rest.getAdmins().subscribe((res)=>{
  		this.listAdmins = res;
  	})
  }
  postAdmins(){
    this.rest.postAdmins(this.user, this.password).subscribe((val)=>{
    })
  }
  deleteAdmins(){
    this.rest.deleteAdmins(this.id).subscribe((val)=>{
    })
  }
  putAdmins(){
    this.rest.putAdmins(this.id, this.user, this.password).subscribe((val)=>{
    })
  }

}
