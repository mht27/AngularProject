import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes:Recipe[] = [
    new Recipe('A Test Recipe 1','A Test Description','https://cdn.dribbble.com/users/301004/screenshots/994795/media/08c70c4be6b460846d68f0eb8d1f1afc.jpg'),
    new Recipe('A Test Recipe 2','A Test Description','https://cdn.dribbble.com/users/301004/screenshots/994795/media/08c70c4be6b460846d68f0eb8d1f1afc.jpg'),
    new Recipe('A Test Recipe 3','A Test Description','https://cdn.dribbble.com/users/301004/screenshots/994795/media/08c70c4be6b460846d68f0eb8d1f1afc.jpg')
  ]
  constructor() { }


  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }

  ngOnInit(): void {
  }

}
