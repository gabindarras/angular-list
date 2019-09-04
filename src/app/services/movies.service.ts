import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../models/movie.models';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies: Movie[] = [{
    id: 1,
    name: 'Once Upon a Time in Hollywood',
    real: 'Quentin Tarantino',
    releaseYear: '2019'
  },
  {
    id: 2,
    name: 'First Man',
    real: 'Damien Chazelle',
    releaseYear: '2018'
  }];

  getMovieList(): Observable<Movie[]> {
    return of(this.movies);
  }
}
