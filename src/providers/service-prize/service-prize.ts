import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServicePrizeProvider {

  constructor(public http: HttpClient) {}
  
  getPrizes(){
  	return this.http.get('http://localhost:3000/apipri/v010/prizes')
  }
  postPrizes(name, ncoin, img){
    let options = {headers: {'Content-Type':'application/JSON'}};
    let postData = {
      name: name, 
      ncoin: ncoin, 
      img: img};
    return this.http.post('http://localhost:3000/apipri/v010/prizes',JSON.stringify(postData),options)
  }
  deletePrizes(id){
    return this.http.delete('http://localhost:3000/apipri/v010/prizes/'+ id) 
  }
  putPrizes(id, name, ncoin, img){
    let options = {headers: {'Content-Type':'application/JSON'}};
    let postData = {
      name: name, 
      ncoin: ncoin, 
      img: img};
    return this.http.put('http://localhost:3000/apipri/v010/prizes/'+id,JSON.stringify(postData),options)
  }
}
