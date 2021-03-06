import { routing, appRoutingProviders } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { RecommendedComponent } from './components/recommended/recommended.component';
import { MovieComponent } from './components/movie/movie.component';
import { InformationComponent } from './components/information/information.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RecommendedComponent,
    MovieComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    routing,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
