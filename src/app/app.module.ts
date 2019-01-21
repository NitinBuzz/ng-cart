import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import {Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeComponent } from './recipe-list/recipe/recipe.component';
import { HeaderComponent } from './header/header.component';
import {FeatComponent} from './feat/feat.component';

// const appRoutes: Routes = [
//   { path: 'feat', component: FeatComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    FeatComponent,
    RecipeListComponent,
    RecipeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
