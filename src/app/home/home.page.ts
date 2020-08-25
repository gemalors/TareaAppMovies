import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
nombre: string;
  constructor(private rout: Router, private router: ActivatedRoute, private platform: Platform, private  splashScreen: SplashScreen, private statusBar:StatusBar) {}
 
  /*initializeApp() {
    
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(3000).subscribe(() => this.showSplash = false)
    });
  }*/
/* ngOnInit() {
    this.nombre = this.router.snapshot.paramMap.get('nombre');
    setTimeout(() => {
     if(!localStorage.getItem('sesionlogin')){
      this.rout.navigate(['/login']);
     }else{
      //this.router.navigate(['/buscarmovies']);
      this.rout.navigate(['../buscarmovies/',this.nombre]);
     }
    }, 5000);
  }
*/
}
