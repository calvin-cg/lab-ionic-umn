import { Component, OnInit } from '@angular/core';
import { RecipeModel } from "../recipe.model";
import { ActivatedRoute } from "@angular/router";
import { RecipesService } from "../recipes.service";
import { Router } from "@angular/router";
import {AlertController, ToastController} from "@ionic/angular";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: RecipeModel;
  constructor(
      private activatedRoute: ActivatedRoute,
      private recipesSvc: RecipesService,
      private router: Router,
      private alertController: AlertController,
      private toastController: ToastController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
        paramMap => {
          if (!paramMap.has('recipeId')) { return; }
          this.loadedRecipe = this.recipesSvc.getRecipe(paramMap.get('recipeId'));
        }
    )
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Delete Recipe',
      message: 'Are you sure you want to delete this recipe?',
      buttons: [
        {
          text: 'Yes',
          handler: () => this.deleteRecipe(),
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    await alert.present();
  }

  async presentToast(name: string) {
    const toast = await this.toastController.create({
      message: name + ' has been deleted',
      duration: 2000
    });
    await toast.present();
  }

  deleteRecipe() {
    let name = this.loadedRecipe.title;
    this.recipesSvc.deleteRecipe(this.loadedRecipe.id);
    this.router.navigate(['/recipes']);
    this.presentToast(name);
  }

}
