import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import {HttpClientModule} from '@angular/common/http';
import { YouTubeSearchComponent } from './you-tube-search/you-tube-search.component';
import {youTubeSearchInjectables} from './you-tube-search/you-tube-search.injectables';
import {SearchBoxComponent} from './you-tube-search/search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent,
    YouTubeSearchComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    youTubeSearchInjectables
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
