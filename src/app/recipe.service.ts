import {EventEmitter} from '@angular/core';

export class RecipeService {
  
  recipeSelected = new EventEmitter<any>();
  
  private recipes = [
    {
      name: "jamunn",
      description: "bla bla bla bla bla bla",
      price: 80,
      image: "https://dummyimage.com/600x400/000/fff&text=recipe"
    },
    {
      name: "Bread Halwa",
      description: "bla bla bla bla bla bla",
      price: 240,
      image: "https://dummyimage.com/600x400/000/fff&text=recipe"
    },
    {
      name: "Spicy Fries",
      description: "bla bla bla bla bla bla",
      price: 60,
      image: "https://dummyimage.com/600x400/000/fff&text=recipe"
    },
    {
      name: "Pepsi",
      description: "bla bla bla bla bla bla",
      price: 120,
      image: "https://dummyimage.com/600x400/000/fff&text=recipe"
    }
  ];
  
  getRecipes() {
    return this.recipes.slice();
  }
}