import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FeatComponent} from './feat/feat.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';

const routes: Routes = [
  { path: '', component: RecipeListComponent },
  { path: 'recipe/:any', component: FeatComponent },
  { path: '**', redirectTo: '/recipe/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
