import { Component, OnInit } from '@angular/core';
import { recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:recipe[]=[
    new recipe('A Test recipe','this is simply a test','https://omnivorescookbook.com/wp-content/uploads/2021/12/211005_Vegetable-Chow-Fun_4.jpg'),
    new recipe('A Test recipe','this is simply a test','https://omnivorescookbook.com/wp-content/uploads/2021/12/211005_Vegetable-Chow-Fun_4.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
