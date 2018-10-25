import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceHashtagProvider } from '../../providers/service-hashtag/service-hashtag';

@IonicPage()
@Component({
  selector: 'page-hashtags',
  templateUrl: 'hashtags.html',
})
export class HashtagsPage {

  listHashtags: any;
  name: string;
  id: string;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public rest: ServiceHashtagProvider) {
  }

  ionViewDidLoad() {}

  getHashtags(){
  	this.rest.getHashtags().subscribe((res)=>{
  		this.listHashtags = res;
  	})
  }
  postHashtags(){
    this.rest.postHashtags(this.name).subscribe((val)=>{
    })
  }
  deleteHashtags(){
    this.rest.deleteHashtags(this.id).subscribe((val)=>{
    })
  }
  putHashtags(){
    this.rest.putHashtags(this.id, this.name).subscribe((val)=>{
    })
  }
}
