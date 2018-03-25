import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, AbstractControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-app-demo-form-sku-with-builder',
  templateUrl: './app-demo-form-sku-with-builder.component.html',
  styleUrls: ['./app-demo-form-sku-with-builder.component.css']
})
export class AppDemoFormSkuWithBuilderComponent implements OnInit {

  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['ABC123', Validators.required] // it's the same as FormControl(value, validator)
    });
    this.sku = this.myForm.controls['sku'];
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('submitted value 2:', value);
  }

}
