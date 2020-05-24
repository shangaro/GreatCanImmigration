import { Component, OnInit } from '@angular/core';
import { Category, categories, author } from 'src/app/shared/models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  categories:Category[];
  author:any={};
  constructor() { }

  ngOnInit(): void {
    this.categories=categories;
    this.author=author;
  }

}
