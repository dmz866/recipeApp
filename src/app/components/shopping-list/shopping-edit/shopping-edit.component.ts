import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit
{
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  addIngredient(name: string, amount: number)
  {
    const newIngredient = new Ingredient();
    newIngredient.name = name;
    newIngredient.amount = amount;

    this.ingredientAdded.emit(newIngredient);
  }

  ngOnInit() {
  }

}
