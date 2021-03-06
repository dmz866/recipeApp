import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from '../../../../../services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit
{
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  onSelected()
  {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

  ngOnInit() {
  }

}
