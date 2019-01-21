import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FeatComponent} from './feat/feat.component';

const routes: Routes = [
  { path: 'feat', component: FeatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
