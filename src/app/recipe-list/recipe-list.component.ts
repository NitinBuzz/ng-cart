import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../recipe.service'

@Component({
  selector: "recipe-root",
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes = [];
  
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
}
