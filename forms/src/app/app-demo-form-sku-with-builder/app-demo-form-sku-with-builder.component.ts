import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-app-demo-form-sku-with-builder',
  templateUrl: './app-demo-form-sku-with-builder.component.html',
  styleUrls: ['./app-demo-form-sku-with-builder.component.css']
})
export class AppDemoFormSkuWithBuilderComponent implements OnInit {

  myForm: FormGroup;

  constructor(fb: FormBuilder) { 
  	this.myForm = fb.group({
  		'sku': ['ABC123'] // predefined value for input, can be empty
  	});
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
  	console.log('submitted value 2:', value);
  }

}
