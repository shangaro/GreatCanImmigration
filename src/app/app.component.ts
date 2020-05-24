import { Component,OnChanges,OnInit } from '@angular/core';
import { categories, Category, sideNavMenu, author } from './shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 
  ngOnInit(){
  
 
    
  }
//   onClick(menuId){
//     this.toggleMenuItem(menuId);
//     this.closeOtherSubMenus(this.menuItems, menuId);    
//   }
//   public closeOtherSubMenus(menu:Array<any>, menuId){
//     let currentMenuItem = menu.filter(item => item.id == menuId)[0];
//     menu.forEach(item => {
//         if((item.id != menuId && item.parentId == currentMenuItem.parentId) || (currentMenuItem.parentId == 0 && item.id != menuId) ){
//             let subMenu = document.getElementById('sub-menu-'+item.id);
//             let menuItem = document.getElementById('menu-item-'+item.id);
//             if(subMenu){
//                 if(subMenu.classList.contains('show')){
//                     subMenu.classList.remove('show');
//                     menuItem.classList.remove('expanded');
//                 }              
//             } 
//         }
//     });
// }
//   public toggleMenuItem(menuId){
//     let menuItem = document.getElementById('menu-item-'+menuId);
//     let subMenu = document.getElementById('sub-menu-'+menuId);  
//     if(subMenu){
//         if(subMenu.classList.contains('show')){
//             subMenu.classList.remove('show');
//             menuItem.classList.remove('expanded');
//         }
//         else{
//             subMenu.classList.add('show');
//             menuItem.classList.add('expanded');
//         }      
//     }
// }
//   openMegaMenu(){
//     let pane = document.getElementsByClassName('cdk-overlay-pane');
//     [].forEach.call(pane, function (el) {
//         if(el.children.length > 0){
//           if(el.children[0].classList.contains('mega-menu')){
//             el.classList.add('mega-menu-pane');
//           }
//         }        
//     });
//   }
 
}
