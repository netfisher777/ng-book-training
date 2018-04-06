import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-form-with-events',
  templateUrl: './demo-form-with-events.component.html',
  styleUrls: ['./demo-form-with-events.component.css']
})
export class DemoFormWithEventsComponent implements OnInit {

  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.required]
    });
    this.sku = this.myForm.controls['sku'];
    this.sku.valueChanges.subscribe(
      (value: string) => {
        console.log('sku value was changed to', value);
      }
    );
    this.myForm.valueChanges.subscribe(
      (form: any) => {
        console.log('form was changed to', form);
      }
    );
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('submitted value 5:', value);
  }

}
