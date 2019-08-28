/*
 * By Calvin Chandra Gunawan
 * 00000012892
 */

import { Injectable } from '@angular/core';
import { RecipeModel } from "./recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: RecipeModel[] = [
    {
      id: 'r1',
      title: 'Gado-gado',
      imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/05/gado-gado-salad.jpg?itok=MTTSriC8',
      ingredients: ['Lontong', 'Sawi', 'Bumbu Kecap', 'Tauge']
    },
    {
      id: 'r2',
      title: 'Ketupat',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Ketupat2.jpg',
      ingredients: ['Lontong', 'Air']
    },
    {
      id: 'r3',
      title: 'Pizza Margerita',
      imageUrl: 'https://cdn.newsapi.com.au/image/v1/33ac2e3347640aaca4eda0191033cf53?width=650',
      ingredients: ['Tepung', 'Saus Tomat', 'Keju', 'Pepperoni']
    }
  ];
  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
   return this.recipes.find((recipe) => recipe.id === recipeId)
  }

  deleteRecipe(recipeId: string) {
    return this.recipes = this.recipes.filter(recipe => recipe.id != recipeId)
  }
}
