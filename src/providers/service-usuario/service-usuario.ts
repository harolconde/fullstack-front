import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceUsuarioProvider {

  constructor(public http: HttpClient) {}

  getUsuarios(){
  	return this.http.get('http://localhost:3000/user/v010/usuarios')
  }
  postUsuarios(name, password, email, phone, bithdate, img){
    let options = {headers: {'Content-Type':'application/JSON'}};
    let postData = {
      name: name, 
      password: password, 
      email: email, 
      phone: phone, 
      bithdate: bithdate, 
      img: img};
    return this.http.post('http://localhost:3000/user/v010/usuarios',JSON.stringify(postData),options)
  }
  deleteUsuarios(id){
    return this.http.delete('http://localhost:3000/user/v010/usuarios/'+ id) 
  }
  putUsuarios(id, name, password, email, phone, bithdate, img){
    let options = {headers: {'Content-Type':'application/JSON'}};
    let postData = {
      name: name, 
      password: password, 
      email: email, 
      phone: phone, 
      bithdate: bithdate, 
      img: img};
    return this.http.put('http://localhost:3000/user/v010/usuarios/'+id,JSON.stringify(postData),options)
  }
}
