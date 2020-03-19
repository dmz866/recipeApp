import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit
{
  ingredients: Ingredient[] = [ new Ingredient('Tomatos', 10), new Ingredient('onion', 5)];
  constructor() { }

  ngOnInit() {
  }

}
