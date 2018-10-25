import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HashtagsPage } from './hashtags';

@NgModule({
  declarations: [
    HashtagsPage,
  ],
  imports: [
    IonicPageModule.forChild(HashtagsPage),
  ],
})
export class HashtagsPageModule {}
