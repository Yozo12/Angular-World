import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CittaComponent } from './components/citta/citta.component';
import { ContinentComponent } from './components/continent/continent.component';
import { ModificaAggiungiComponent } from './components/modifica-aggiungi/modifica-aggiungi.component';
import { NazioniComponent } from './components/nazioni/nazioni.component';
import { CittaService } from './services/citta.service';
import { ContinentServiceService } from './services/continent-service.service';
import { NazioniService } from './services/nazioni.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutocompleteCityComponent } from './components/autocomplete-city/autocomplete-city.component'



@NgModule({
  declarations: [
    AppComponent,
    ContinentComponent,
    NazioniComponent,
    CittaComponent,
    ModificaAggiungiComponent,
    AutocompleteCityComponent,


  ],
  imports: [

    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
  ],
  providers: [ContinentServiceService, NazioniService, CittaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
