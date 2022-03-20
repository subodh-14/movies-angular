import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  Movies:Movie[]
  constructor(private MovieService:MovieService) { 
    this.Movies =[]
  }

  ngOnInit(): void {
    this.getMoviesData()
  }
  getMoviesData(){
    this.MovieService.getMovie().subscribe(result=>{
      console.log(result)
      if(result.count>0){
          this.Movies = result.data
      }
    })
  }

}
