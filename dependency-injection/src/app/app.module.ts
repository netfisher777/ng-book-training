import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserDemoComponent } from './user-demo/user-demo.component';
import {UserDemoInjectorComponent} from './user-demo/user-demo.injector.component';
import {UserDemoModule} from './user-demo/user-demo.module';


@NgModule({
  declarations: [
    AppComponent,
    UserDemoComponent,
    UserDemoInjectorComponent
  ],
  imports: [
    BrowserModule,
    UserDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
