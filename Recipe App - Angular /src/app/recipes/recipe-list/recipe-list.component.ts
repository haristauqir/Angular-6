import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe [] = [
    new Recipe("A Test Recipe", "This is simply a test",
     "https://realfood.tesco.com/media/images/Pomegranate-chicken-LGH-mini-a225fa35-1e18-4cb6-9fd0-b39911530e09-0-1400x919.jpg"),
     new Recipe("A Test Recipe", "This is simply a test",
     "https://realfood.tesco.com/media/images/Pomegranate-chicken-LGH-mini-a225fa35-1e18-4cb6-9fd0-b39911530e09-0-1400x919.jpg")
    ];

  constructor() { }

  ngOnInit() {
  }

}
