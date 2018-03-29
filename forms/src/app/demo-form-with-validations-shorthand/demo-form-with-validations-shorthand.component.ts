import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-demo-form-with-validations-shorthand',
  templateUrl: './demo-form-with-validations-shorthand.component.html',
  styleUrls: ['./demo-form-with-validations-shorthand.component.css']
})
export class DemoFormWithValidationsShorthandComponent implements OnInit {

  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.required] // it's the same as FormControl(value, validator)
    });
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('submitted value 4:', value);
  }

}
