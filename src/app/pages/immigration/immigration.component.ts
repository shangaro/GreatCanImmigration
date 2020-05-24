import { Component, OnInit } from '@angular/core';
import { Category, categories, author, CategoryDetail } from 'src/app/shared/models';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-immigration',
  templateUrl: './immigration.component.html',
  styleUrls: ['./immigration.component.scss']
})
export class ImmigrationComponent implements OnInit {
  id:number;
  categoryDetail:CategoryDetail;
  categories:Category[];
  html:any={};
  constructor( private route:ActivatedRoute,private router:Router,private dataService:DataService) {
    this.route.params.subscribe(params=>{
      console.log("**id1is",params.id);
      this.id=+params.id;
      this.dataService.getData(this.id).subscribe( data=>{
        this.categoryDetail=data;
        console.log("CategoryDetail is",this.categoryDetail);
  
      });
    });



   }

  ngOnInit(): void {
   
    this.categories=categories;


  }

  onClick($event){
    setTimeout(() => {

      // this.currentItem=categories.find(x=>x.id===this.id);
    console.log("**current item changed",this.categoryDetail);
    },300); 
    
  }
  goBack(){
    this.router.navigateByUrl('/home');
  }
  

}
