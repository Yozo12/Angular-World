import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContinentComponent } from './components/continent/continent.component';
import { HttpClientModule } from '@angular/common/http';
import { ContinentServiceService } from './services/continent-service.service';
import { NazioniComponent } from './components/nazioni/nazioni.component';
import { NazioniService } from './services/nazioni.service';
import { CittaComponent } from './components/citta/citta.component';
import { CittaService } from './services/citta.service';
import { ModificaAggiungiComponent } from './components/modifica-aggiungi/modifica-aggiungi.component';




@NgModule({
  declarations: [
    AppComponent,
    ContinentComponent,
    NazioniComponent,
    CittaComponent,
    ModificaAggiungiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   


  ],
  providers: [ContinentServiceService, NazioniService, CittaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
