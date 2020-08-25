import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  AddUser(user: any){
    const parametros = new HttpParams()

.set('nick', user.nick)
.set('email', user.email)
.set('password', user.password)

    let  url = 'https://agile-harbor-88796.herokuapp.com/api/user';
    return new Promise((resolve, reject) => {
    this.http.post(url , parametros).subscribe(res => { 
  resolve(res);
    }, error => { 
      reject(error);
    });
   }) 
  
   }

   accederlogin(nombre: string, pass: string){
    let  url = 'https://agile-harbor-88796.herokuapp.com/api/user/'+nombre+'/'+pass+'';
    return new Promise((resolve, reject) => {
    this.http.get(url).subscribe(res => { 
  resolve(res);
    }, error => { 
      reject(error);
    });
   }) 
   }
  
   getUsuarios(iduser: string){
     let url ='https://agile-harbor-88796.herokuapp.com/api/usuarios/'+iduser+'';
    return new Promise((resolve, reject)=> {
    this.http.get(url)
    .subscribe(data => { 
  resolve(data)
    }, (error) => { 
      reject(error);
    });
   }) 
  
   }
}
