import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceSponsorProvider {

  constructor(public http: HttpClient) {}

  getSponsors(){
  	return this.http.get('http://localhost:3000/apispon/v010/sponsors')
  }
  postSponsors(name, img){
    let options = {headers: {'Content-Type':'application/JSON'}};
    let postData = {
      name: name, 
      img: img};
    return this.http.post('http://localhost:3000/apispon/v010/sponsors',JSON.stringify(postData),options)
  }
  deleteSponsors(id){
    return this.http.delete('http://localhost:3000/apispon/v010/sponsors/'+ id) 
  }
  putSponsors(id, name, img){
    let options = {headers: {'Content-Type':'application/JSON'}};
    let postData = {
      name: name, 
      img: img};
    return this.http.put('http://localhost:3000/apispon/v010/sponsors/'+id,JSON.stringify(postData),options)
  }
}
