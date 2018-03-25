import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDemoFormSkuWithBuilderComponent } from './app-demo-form-sku-with-builder.component';

describe('AppDemoFormSkuWithBuilderComponent', () => {
  let component: AppDemoFormSkuWithBuilderComponent;
  let fixture: ComponentFixture<AppDemoFormSkuWithBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDemoFormSkuWithBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDemoFormSkuWithBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
