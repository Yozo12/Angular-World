import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContinentComponent } from './components/continent/continent.component';
import { HttpClientModule } from '@angular/common/http';
import { ContinentServiceService } from './services/continent-service.service';
import { NazioniComponent } from './components/nazioni/nazioni.component';
import { NazioniService } from './services/nazioni.service';

@NgModule({
  declarations: [
    AppComponent,
    ContinentComponent,
    NazioniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ContinentServiceService,NazioniService],
  bootstrap: [AppComponent]
})
export class AppModule { }
