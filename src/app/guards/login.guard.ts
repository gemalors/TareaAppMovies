import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  login:any=false;
  
  constructor(private router: Router){}
  canActivate(){
   
    let login = localStorage.getItem('sesionlogin');

    console.log(localStorage.getItem('sesionlogin'));
    

    if (login !== "true") {
      
      this.router.navigate(['/login']);
      return false;
    }
    
    return true;  
    
  }
}
