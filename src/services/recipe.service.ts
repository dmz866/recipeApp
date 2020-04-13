import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../app/models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [ new Recipe('Test1', 'Descriptino test 1',
  'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2018/09/dessert-main-image-molten-cake.jpg'),
  new Recipe('Test2', 'Descriptino test 2',
  'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2018/09/dessert-main-image-molten-cake.jpg')];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
