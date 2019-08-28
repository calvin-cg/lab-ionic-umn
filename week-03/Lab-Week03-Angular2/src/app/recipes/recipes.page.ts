/*
 * By Calvin Chandra Gunawan
 * 00000012892
 */

import { Component, OnInit } from '@angular/core';
import { RecipeModel } from  './recipe.model';
import { RecipesService } from "./recipes.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: RecipeModel[];

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.recipes = this.recipesService.getAllRecipes();
  }

  ionViewWillEnter(): void {
    this.recipes = this.recipesService.getAllRecipes();
  }

  getRecipe(recipeId: string) {
    console.log(this.recipesService.getRecipe(recipeId));
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipesService.deleteRecipe(recipeId);
  }

}
