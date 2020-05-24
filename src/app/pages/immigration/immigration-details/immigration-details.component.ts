import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category, categories } from 'src/app/shared/models';

@Component({
  selector: 'app-immigration-details',
  templateUrl: './immigration-details.component.html',
  styleUrls: ['./immigration-details.component.scss']
})
export class ImmigrationDetailsComponent implements OnInit {
 
  category:Category;
  id:number;
  constructor(private route:ActivatedRoute) {
    this.id=+route.snapshot.parent.params["id"];
    console.log("**id in details page is",this.id);
   }

  ngOnInit(): void {
    this.category=categories.find(x=>x.id===this.id);
  }

}
