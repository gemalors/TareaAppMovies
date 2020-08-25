import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private http: HttpClient) { }

  httpOptions = {
headers: new HttpHeaders({'Content-Type': 'aplication/json'})
  }
  getComentarios(idMovie: string){
    let  url = 'https://agile-harbor-88796.herokuapp.com/api/comentario/'+idMovie+'';
    return new Promise((resolve, reject)=> {
    this.http.get(url)
    .subscribe(data => { 
  resolve(data)
    }, (error) => { 
      reject(error);
    });
   }) 
   }

   addComentarios(data: any){
     let  url = 'https://agile-harbor-88796.herokuapp.com/api/comentario';
     return new Promise((resolve, reject)=> {
    this.http.post(url, data, this.httpOptions).subscribe(data => { 
      
      resolve(data)
    }, (error) => { 
      
      reject(error);
    });
   }) 
  
   }


   /*allcoment(){
    let url = 'http://127.0.0.1:8000/api/comentarios';
    return new Promise((resolve, reject)=> {
    this.http.get(url)
    .subscribe(data => { 
      //debugger
  resolve(data)
    }, (error) => { 
      //debugger
      reject(error);
    });
   }) 
   }*/
}
