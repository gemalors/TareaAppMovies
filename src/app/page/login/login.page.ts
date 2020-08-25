import { Component, OnInit } from '@angular/core';
import {UserService} from './../../service/user.service';
import {Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
user: any = []; 
pass: string;
nombre: string;
iduser: string;
  constructor(private router: Router, private userService: UserService, public toastController: ToastController) { }

  ngOnInit() {
    
    
  }


Inilogin(nombre: string, pass: string){

  this.userService.accederlogin(this.nombre, this.pass).then(data =>{
    
    this.mensaje(data['mensaje']);
    if(data['code'] === 404 || data['code']=== 406){
      localStorage.setItem('sesionlogin','false')
  }else{
   
    this.nombre= data['nick'];
    localStorage.setItem('sesionlogin','true');
    this.router.navigate(['/buscarmovies/',this.nombre]);
  }
    }).catch(error =>{
    })
  this.nombre='';
  this.pass='';
}

async mensaje(msj: string) {
  const toast = await this.toastController.create({
    message: msj,
    duration: 2000
  });
  toast.present();
}
}
