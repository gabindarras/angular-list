import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Services
import { MoviesService } from './services/movies.service';

// Models
import { Movie } from './models/movie.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading: boolean;
  movies$: Observable<Movie[]>;
  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.movies$ = this.moviesService.getMovieList();
  }
}
