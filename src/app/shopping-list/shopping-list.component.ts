import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[] = [
    new Ingredient("Apple",5),
    new Ingredient("Tomatoes",10)
  ];

  constructor() { }

  onIngredientAdded(ingredient:Ingredient){
    this.ingredients.push(ingredient)
  }

  ngOnInit(): void {
  }

}
