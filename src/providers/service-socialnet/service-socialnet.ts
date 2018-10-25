import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceSocialnetProvider {

  constructor(public http: HttpClient) {}

  getSocialnets(){
  	return this.http.get('http://localhost:3000/apisn/v010/social_nets')
  }
  postSocialnets(name){
    let options = {headers: {'Content-Type':'application/JSON'}};
    let postData = {
      name: name};
    return this.http.post('http://localhost:3000/apisn/v010/social_nets',JSON.stringify(postData),options)
  }
  deleteSocialnets(id){
    return this.http.delete('http://localhost:3000/apisn/v010/social_nets/'+ id) 
  }
  putSocialnets(id, name){
    let options = {headers: {'Content-Type':'application/JSON'}};
    let postData = {
      name: name};
    return this.http.put('http://localhost:3000/apisn/v010/social_nets/'+id,JSON.stringify(postData),options)
  }
}
