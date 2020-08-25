import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
@Injectable({
  providedIn: 'root'
})
export class ThemoviedbService {

  constructor(private http: HttpClient) { }

  //urlBase ='https://api.themoviedb.org/3';
 
getMovies(nameMovie: string, page: number){
  let  url = 'https://api.themoviedb.org/3/search/movie?api_key=c8232b6625a4a3713348afd23364c166&language=en-US&query='+nameMovie+'&page='+page+'&include_adult=false';
  return new Promise((resolve, reject)=> {      
  this.http.get(url)
  .subscribe(data => { 
resolve(data)
  }, (error) => { 
    reject(error);
  });
 }) 

 }

 getMoviesDetail(idMovie: string){
  let  url = 'https://api.themoviedb.org/3/movie/'+idMovie+'?api_key=c8232b6625a4a3713348afd23364c166&language=en-US';
  return new Promise((resolve, reject)=> {
  this.http.get(url)
  .subscribe(data => { 
resolve(data)
  }, (error) => { 
    reject(error);
  });
 }) 

 }
 getMoviesVideo(idVideo: string){
  let  url = 'https://api.themoviedb.org/3/movie/'+idVideo+'/videos?api_key=c8232b6625a4a3713348afd23364c166&language=en-US';
  return new Promise((resolve, reject)=> {
  this.http.get(url)
  .subscribe(data => { 
resolve(data)
  }, (error) => { 
    reject(error);
  });
 }) 

 }

 getEstrenos(page: number){
   let url='https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2019-12-31&primary_release_date.lte=2020-12-31&api_key=c8232b6625a4a3713348afd23364c166&language=en-US&page='+page+'';
   return new Promise((resolve, reject)=> {
    this.http.get(url)
    .subscribe(data => { 
  resolve(data)
    }, (error) => { 
      reject(error);
    });
   }) 
 }

 getPopulares(page: number){
   let url='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c8232b6625a4a3713348afd23364c166&language=en-US&page='+page+'';
   return new Promise((resolve, reject)=> {
    this.http.get(url)
    .subscribe(data => { 
  resolve(data)
    }, (error) => { 
      reject(error);
    });
   }) 
 }

 /*getTendenciasweek(){
   let url='https://api.themoviedb.org/3/trending/movie/week?api_key=c8232b6625a4a3713348afd23364c166';
   return new Promise((resolve, reject)=> {
    this.http.get(url)
    .subscribe(data => { 
  resolve(data)
    }, (error) => { 
      reject(error);
    });
   }) 
 }*/
 
}
