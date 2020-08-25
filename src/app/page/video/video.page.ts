import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from './../../service/themoviedb.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {
VideoMovie: any = [];
idVideo: string;

  constructor(private themoviedbService: ThemoviedbService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.idVideo = this.router.snapshot.paramMap.get('id');
    this.getVideoMovie();
  }

  getVideoMovie(){ 
    this.themoviedbService.getMoviesVideo(this.idVideo).then(data => { 
      
      this.VideoMovie = data;
    }).catch(error => { 
      
    });
    
      }
}
