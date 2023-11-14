import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor() { }

  complexAddition(a:number , b: number): number {
    return  a+b;
  }
}
