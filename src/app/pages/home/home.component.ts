import { Component, OnInit } from '@angular/core';
import { categories, Category, author } from 'src/app/shared/models';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories:Category[]=[];
  author:any={};
  count = {
    countTo: 100,
    from: 0,
    duration: 1
};

  
  constructor() { }

  ngOnInit(): void {
    this.categories=categories;
    this.author=author;
  }

}
