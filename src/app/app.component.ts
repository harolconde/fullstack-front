import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Admins', component: AdminsPage },
      { title: 'Puntos', component: CoinsPage },
      { title: 'Hashtags', component: HashtagsPage },
      { title: 'Fotos', component: PicsPage },
      { title: 'Premios', component: PrizesPage },
      { title: 'Redes Sociales', component: SocialnetsPage },
      { title: 'Patrocinadores', component: SponsorsPage },
      { title: 'Tips', component: TipsPage },
      { title: 'Usuarios', component: UsuariosPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
