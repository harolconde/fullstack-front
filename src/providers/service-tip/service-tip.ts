import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceTipProvider {

  constructor(public http: HttpClient) {}

  getTips(){
  	return this.http.get('http://localhost:3000/apitip/v010/tips')
  }
  postTips(name, description){
    let options = {headers: {'Content-Type':'application/JSON'}};
    let postData = {
      name: name, 
      description: description};
    return this.http.post('http://localhost:3000/apitip/v010/tips',JSON.stringify(postData),options)
  }
  deleteTips(id){
    return this.http.delete('http://localhost:3000/apitip/v010/tips/'+ id) 
  }
  putTips(id, name, description){
    let options = {headers: {'Content-Type':'application/JSON'}};
    let postData = {
      name: name, 
      description: description};
    return this.http.put('http://localhost:3000/apitip/v010/tips/'+id,JSON.stringify(postData),options)
  }
}
