import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContinentComponent } from './components/continent/continent.component';
import { NazioniComponent } from './components/nazioni/nazioni.component';


const routes: Routes = [
  {
    path: '',
    component: ContinentComponent
  },
  {
    path: 'nazioni/:continent',
    component: NazioniComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
