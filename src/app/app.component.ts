import { Component } from '@angular/core';
import {RecipeService} from './recipe.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService]
})
export class AppComponent {
  title = 'cart';
  constructor(private recipeService: RecipeService) {
    
  }
  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe: Any) => {
//       alert("Selected")
      console.log(`selected recipe is ${recipe.name}`)
    })
  }
}
