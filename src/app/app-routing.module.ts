import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContinentComponent } from './components/continent/continent.component';
import { NazioniComponent } from './components/nazioni/nazioni.component';
import { CittaComponent } from './components/citta/citta.component';
import { ModificaAggiungiComponent } from './components/modifica-aggiungi/modifica-aggiungi.component';
import { AutocompleteCityComponent } from './components/autocomplete-city/autocomplete-city.component';





const routes: Routes = [
  {
    path: '',
    component: ContinentComponent
  },
  {
    path: 'citiesautocomplete',
    component: AutocompleteCityComponent,
  },
  {
    path: 'nazioni/:continent',
    component: NazioniComponent
  },
  {
    path: 'citta/:codeCountry',
    component: CittaComponent
  },
  {
    path: 'modifica-aggiungi/:id',
    component: ModificaAggiungiComponent
  },
  {
    path: 'modifica-aggiungi',
    component: ModificaAggiungiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
