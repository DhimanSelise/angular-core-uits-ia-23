import { Component, OnInit, OnDestroy } from '@angular/core';
import { AddService } from '../add.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit,OnDestroy {
  constructor(private _addService: AddService) {
    console.log('Constructor called');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log(this._addService.complexAddition(5,7));
  }

  ngOnDestroy() {
    console.log('ng On Destroy called');
  }

  myComplexAddition() {
    return this._addService.complexAddition(5,7);
  }

  

}
