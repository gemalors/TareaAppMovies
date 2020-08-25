import { Component, OnInit } from '@angular/core';
import {UserService} from './../../service/user.service';
import {Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: any = []; 
  veripass: string;
  nick: string;
  email: string;
  password: string;

  constructor(private userService: UserService, private router: Router, public toastController: ToastController) { }

  ngOnInit() {
  }

  addUsuario(veripass: string){
    
    if(veripass!==this.user.password){
      this.mensaje('Contraseña no coincide');
    }else{
    this.userService.AddUser(this.user).then(data =>{
  
  this.mensaje(data['mensaje']);
  
  
  this.router.navigate(['/login']);
    }).catch(error =>{
  
  this.mensaje('Error al enviar datos');
    })
  }
    this.user.nick='';
    this.user.email='';
    this.user.password='';
    this.veripass='';
  }
  
  
  async mensaje(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 2000
    });
    toast.present();
  }

  Irlogin()
{
  this.router.navigate(['/login']);
}
}
