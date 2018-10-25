import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceAdminProvider {

  constructor(public http: HttpClient) {}
  
  getAdmins(){
  	return this.http.get('http://localhost:3000/apiad/v010/admins')
  }
  postAdmins(user, password){
    let options = {headers: {'Content-Type':'application/JSON'}};
    let postData = {
      user: user, 
      password: password};
    return this.http.post('http://localhost:3000/apiad/v010/admins',JSON.stringify(postData),options)
  }
  deleteAdmins(id){
    return this.http.delete('http://localhost:3000/apiad/v010/admins/'+ id) 
  }
  putAdmins(id, user, password){
    let options = {headers: {'Content-Type':'application/JSON'}};
    let postData = {
      user: user, 
      password: password};
    return this.http.put('http://localhost:3000/apiad/v010/admins/'+id,JSON.stringify(postData),options)
  }
}
