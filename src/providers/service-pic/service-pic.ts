import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServicePicProvider {

  constructor(public http: HttpClient) {}
  
  getPics(){
  	return this.http.get('http://localhost:3000/apipic/v010/pics')
  }
  postPics(name){
    let options = {headers: {'Content-Type':'application/JSON'}};
    let postData = {
      name: name};
    return this.http.post('http://localhost:3000/apipic/v010/pics',JSON.stringify(postData),options)
  }
  deletePics(id){
    return this.http.delete('http://localhost:3000/apipic/v010/pics/'+ id) 
  }
  putPics(id, name){
    let options = {headers: {'Content-Type':'application/JSON'}};
    let postData = {
      name: name};
    return this.http.put('http://localhost:3000/apipic/v010/pics/'+id,JSON.stringify(postData),options)
  }
}
