import { EventEmitter, Output } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService{

  recipeSelected = new EventEmitter<Recipe>();

    recipes:Recipe[] = [
        new Recipe('A Test Recipe 1','A Test Description','https://cdn.dribbble.com/users/301004/screenshots/994795/media/08c70c4be6b460846d68f0eb8d1f1afc.jpg'),
        new Recipe('A Test Recipe 2','A Test Description','https://cdn.dribbble.com/users/301004/screenshots/994795/media/08c70c4be6b460846d68f0eb8d1f1afc.jpg'),
        new Recipe('A Test Recipe 3','A Test Description','https://cdn.dribbble.com/users/301004/screenshots/994795/media/08c70c4be6b460846d68f0eb8d1f1afc.jpg')
      ]

      getRecipes(){
        return this.recipes.slice();
      }
}