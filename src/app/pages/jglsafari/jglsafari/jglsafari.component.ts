import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jglsafari',
  templateUrl: './jglsafari.component.html',
  styleUrls: ['./jglsafari.component.scss']
})
export class JglsafariComponent implements OnInit {

  title = 'foobar';
  checked:boolean=false;
  items=["Foo","Bar","FooBar"];

 constructor() {
   
 }
 ngOnInit(){
   console.log("*checked",this.checked);
 }
 onClick(event){
   console.log(this.checked);
   console.log("onclick",event);
 }

}
