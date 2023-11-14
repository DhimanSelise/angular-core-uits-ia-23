import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormArray} from '@angular/forms'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  myReactiveForm: FormGroup | any;
  constructor() { }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'username': new FormControl(),
      'email': new FormControl(),
      'skills': new FormArray([
        new FormControl()
      ])
    })
  }

  onSubmit() {
    console.log(this.myReactiveForm.value);
  }

  addSkill() {
    (<FormArray>this.myReactiveForm.get('skills')).push(
      new FormControl('')
    )
  }

  removeSkill(idx:number) {
    (<FormArray>this.myReactiveForm.get('skills')).removeAt(idx);
  }

}
