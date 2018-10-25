import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceHashtagProvider {

  constructor(public http: HttpClient) {}
  
  getHashtags(){
  	return this.http.get('http://localhost:3000/apihash/v010/hashtags')
  }
  postHashtags(name){
    let options = {headers: {'Content-Type':'application/JSON'}};
    let postData = {
      name: name};
    return this.http.post('http://localhost:3000/apihash/v010/hashtags',JSON.stringify(postData),options)
  }
  deleteHashtags(id){
    return this.http.delete('http://localhost:3000/apihash/v010/hashtags/'+ id) 
  }
  putHashtags(id, name){
    let options = {headers: {'Content-Type':'application/JSON'}};
    let postData = {
      name: name};
    return this.http.put('http://localhost:3000/apihash/v010/hashtags/'+id,JSON.stringify(postData),options)
  }
}
