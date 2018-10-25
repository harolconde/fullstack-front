import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceUsuarioProvider } from '../../providers/service-usuario/service-usuario';

@IonicPage()
@Component({
  selector: 'page-usuarios',
  templateUrl: 'usuarios.html',
})
export class UsuariosPage {

  listUsuarios: any;
  name: string;
  password: string;
  email: string;
  phone: any;
  date: string;
  img: string;
  id: string;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams, 
  	public rest: ServiceUsuarioProvider) {
  }

  ionViewDidLoad() {}

  getUsuarios(){
  	this.rest.getUsuarios().subscribe((res)=>{
  		this.listUsuarios = res;
  	})
  }
  postUsuarios(){
    this.rest.postUsuarios(this.name, this.password, this.email, this.phone, this.date, this.img).subscribe((val)=>{
    })
  }
  deleteUsuarios(){
    this.rest.deleteUsuarios(this.id).subscribe((val)=>{
    })
  }
  putUsuarios(){
    this.rest.putUsuarios(this.id, this.name, this.password, this.email, this.phone, this.date, this.img).subscribe((val)=>{
    })
  }
}
