import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  upcomingMovies: any = '';
  constructor(
    private _movieService: MyServiceService
  ) { }

  ngOnInit(): void {
    this._movieService.getUpcommingMovies().subscribe((response: any)=> {
      console.log(response);
      this.upcomingMovies = response.results;
    })
  }



}
