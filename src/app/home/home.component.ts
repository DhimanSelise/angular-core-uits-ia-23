import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  universities = ['BUET','RUET','UITS'];
  ages = [5,10,45,12,32,15, 20];

  ngOnInit(): void {
  }

}
