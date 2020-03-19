import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit
{
  selectedRecipe: Recipe;

  constructor() { }

  onRecipeSelected(recipe: Recipe)
  {
    this.selectedRecipe = recipe;
  }

  ngOnInit() {
  }

}
