import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceCoinProvider {

  constructor(public http: HttpClient) {}
  
  getCoins(){
  	return this.http.get('http://localhost:3000/apico/v010/coins')
  }
  postCoins(number){
    let options = {headers: {'Content-Type':'application/JSON'}};
    let postData = {
      number: number};
    return this.http.post('http://localhost:3000/apico/v010/coins',JSON.stringify(postData),options)
  }
  deleteCoins(id){
    return this.http.delete('http://localhost:3000/apico/v010/coins/'+ id) 
  }
  putCoins(id, number){
    let options = {headers: {'Content-Type':'application/JSON'}};
    let postData = {
      number: number};
    return this.http.put('http://localhost:3000/apico/v010/coins/'+id,JSON.stringify(postData),options)
  }
}
