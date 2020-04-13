import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit
{
  ingredients: Ingredient[] = [];

  updateIngredientsList(ingredient: Ingredient)
  {
    this.ingredients.push(ingredient);
  }

  ngOnInit()
  {
    const i1 = new Ingredient();
    const i2 = new Ingredient();

    i1.name = 'Tomatos';
    i1.amount =  10;

    i2.name = 'Onion';
    i2.amount =  6;

    this.ingredients.push(i1, i2);
  }

}
