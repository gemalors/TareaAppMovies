import { Component, OnInit, ViewChild } from '@angular/core';
import { ThemoviedbService } from './../../service/themoviedb.service';
import { IonInfiniteScroll, IonSegment } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-buscarmovies',
  templateUrl: './buscarmovies.page.html',
  styleUrls: ['./buscarmovies.page.scss'],
})
export class BuscarmoviesPage implements OnInit {
populares: boolean = true;
estrenos: boolean = false;
listav: boolean = false;
  constructor(private rout: Router,private themoviedbService: ThemoviedbService, private router: ActivatedRoute, public alertController: AlertController) { }
  name: string;
  nombre: string;
  numberPage: number = 1;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonSegment) segment: IonSegment;
  listamovies: any = [];
  movies: any = [];
  moviesEst: any = [];
  nombreBusca: string;
numPopu: number = 1;
numEst: number = 1;
  ngOnInit() {
    this.nombre = this.router.snapshot.paramMap.get('nombre');
   this.verPopulares(event);
  }

  getMovie(event){ 
    this.populares=false;
    this.estrenos=false;
    this.listav=true;
    
    if (this.name != this.nombreBusca) {
      this.listamovies.length = 0;
      this.nombreBusca = this.name;
      this.numberPage = 1;
    }
    
    this.themoviedbService.getMovies(this.name, this.numberPage).then(data => {
      for (let i = 0; i < data["results"].length; i++){
        this.listamovies.push(data["results"][i]);
       }
      
      if (this.listamovies.length == 200){
        event.target.disabled = true;
       }
      
      event.target.complete();
      
    }).catch (error => { 
      
    });
    this.name='';
    this.numberPage++;

  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  segmentChanged(event) {
    var segment = event.target.value;
      if (segment == "populares"){
        this.populares = true;
        this.estrenos = false;
        this.listav=false;
      }else if (segment == "estrenos"){
        this.populares = false;
        this.estrenos = true;
        this.listav=false;
    }
  
    } 


  verPopulares(event){
    this.themoviedbService.getPopulares(this.numPopu).then(data => {
      for (let i = 0; i < data["results"].length; i++){
        this.movies.push(data["results"][i]);
       }
       if (this.movies.length == 200){
        event.target.disabled = true;
      }
    
      event.target.complete();
     
    }).catch (error => { 
      
    });
    this.numPopu++;
  }


  verEstrenos(event){
    
    this.themoviedbService.getEstrenos(this.numEst).then(data => {
      for (let i = 0; i < data["results"].length; i++){
        this.moviesEst.push(data["results"][i]);
       }
     
       if (this.moviesEst.length == 200){
        event.target.disabled = true;
      }
     
      event.target.complete();
      
    }).catch (error => {  
    });
    this.numEst++;
  }


  clipopu(){

    this.segmentChanged(event);
      this.numPopu=1;
      this.movies.length=0;
      this.verPopulares(event);
  }


  cliestre(){
    
    this.segmentChanged(event);
      this.numEst=1;
      this.moviesEst.length = 0;
     
      this.verEstrenos(event);
  }



  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta!',
      message: '¿Esta seguro de cerrar su sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            this.borrar();
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  

  borrar(){
    localStorage.removeItem('sesionlogin');
    this.rout.navigate(['/login']);
  }
}
