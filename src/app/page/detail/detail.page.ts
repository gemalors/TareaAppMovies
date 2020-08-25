import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from './../../service/themoviedb.service';
import { ComentarioService } from './../../service/comentario.service';
import { UserService } from './../../service/user.service';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(private themoviedbService: ThemoviedbService, 
              private router: ActivatedRoute, 
              private  comentarioService: ComentarioService,
              private userService: UserService, public toastController: ToastController ) { }
detalleMovies: any = [];
idMovie: string;
nombre: string;
descripcion: string;
idmovie: string;
comentario:  any = [];
obtcomet:  any = [];
verComentario: boolean = false;
Nombre: string;
fecha: string;
VideoMovie: any = [];

  ngOnInit() {
    this.idMovie = this.router.snapshot.paramMap.get('id');
    this.Nombre = this.router.snapshot.paramMap.get('nombre');
    this.getDetailMovie();
    
  }


  getComentario(){ 
    this.comentarioService.getComentarios(this.idMovie).then(data => {
      this.comentario=data['comentario'];
      let j=0;
      for(let i=this.comentario.length-1; i>=0; i--){
          if(j<=i){
            this.obtcomet[j]=this.comentario[i];
          }else{
     this.obtcomet[j]=this.comentario[i];
          }
          j++;
          
         } 
      this.descripcion='';
 }).catch(error => { 

});

}


  getDetailMovie(){ 
   
this.themoviedbService.getMoviesDetail(this.idMovie).then(data => { 
 
  this.detalleMovies = data;
  this.getComentario();
 
}).catch(error => { 
});

}


verComent(){ 
  this.verComentario= !this.verComentario;
  }

  
enviar(){ 
  let data = {
    'nombre': this.Nombre,
    'descripcion': this.descripcion,
    'idmovie': this.idMovie
  }
  this.comentarioService.addComentarios(data).then(data=>{
    
    this.mensaje(data['mensaje']);
    this.getComentario();
}).catch(error =>{
}) 
 
}

/*obtenercoments(){
  debugger
  this.comentario.length = 0;
  this.comentarioService.allcoment().then(data => {
    for(let i=0; i<data["comentario"].length; i++){
      this.comentario.push(data["comentario"][i]);
     } 
  }).catch (error => { 
  });
} */



async mensaje(msj: string) {
  const toast = await this.toastController.create({
    message: msj,
    duration: 2000
  });
  toast.present();
}

}