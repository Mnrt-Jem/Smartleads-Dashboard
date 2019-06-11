import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LogoComponent } from './logo/logo.component';
import { MapComponent } from './map/map.component';
import { ScoreComponent } from './score/score.component';
import { NumbersComponent } from './numbers/numbers.component';
import { DatatableComponent } from './datatable/datatable.component';
import { IndiceComponent } from './indice/indice.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    MapComponent,
    ScoreComponent,
    NumbersComponent,
    DatatableComponent,
    IndiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
