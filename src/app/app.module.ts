import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AdminsPage } from '../pages/admins/admins';
import { CoinsPage } from '../pages/coins/coins';
import { HashtagsPage } from '../pages/hashtags/hashtags';
import { PicsPage } from '../pages/pics/pics';
import { PrizesPage } from '../pages/prizes/prizes';
import { SocialnetsPage } from '../pages/socialnets/socialnets';
import { SponsorsPage } from '../pages/sponsors/sponsors';
import { TipsPage } from '../pages/tips/tips';
import { UsuariosPage } from '../pages/usuarios/usuarios';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServiceAdminProvider } from '../providers/service-admin/service-admin';
import { ServiceCoinProvider } from '../providers/service-coin/service-coin';
import { ServiceHashtagProvider } from '../providers/service-hashtag/service-hashtag';
import { ServicePicProvider } from '../providers/service-pic/service-pic';
import { ServicePrizeProvider } from '../providers/service-prize/service-prize';
import { ServiceSocialnetProvider } from '../providers/service-socialnet/service-socialnet';
import { ServiceSponsorProvider } from '../providers/service-sponsor/service-sponsor';
import { ServiceTipProvider } from '../providers/service-tip/service-tip';
import { ServiceUsuarioProvider } from '../providers/service-usuario/service-usuario';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AdminsPage,
    CoinsPage,
    HashtagsPage,
    PicsPage,
    PrizesPage,
    SocialnetsPage,
    SponsorsPage,
    TipsPage,
    UsuariosPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AdminsPage,
    CoinsPage,
    HashtagsPage,
    PicsPage,
    PrizesPage,
    SocialnetsPage,
    SponsorsPage,
    TipsPage,
    UsuariosPage
  ],
  providers: [
    HttpClient,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceAdminProvider,
    ServiceCoinProvider,
    ServiceHashtagProvider,
    ServicePicProvider,
    ServicePrizeProvider,
    ServiceSocialnetProvider,
    ServiceSponsorProvider,
    ServiceTipProvider,
    ServiceUsuarioProvider
  ]
})
export class AppModule {}
