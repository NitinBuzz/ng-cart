import { Component, OnInit, Input } from '@angular/core';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: "recipe-list-root",
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  
   @Input() item: {};

  constructor(private recipeService: RecipeService ) { }

  ngOnInit() {
  }
  
  onSelected() {
  this.recipeService.recipeSelected.emit(this.item);
  }

}
