import { Routes, RouterModule, ROUTES, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {NgModule} from '@angular/core';
import { ImmigrationComponent } from './pages/immigration/immigration.component';
import { ImmigrationDetailsComponent } from './pages/immigration/immigration-details/immigration-details.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'services/:id',component:ImmigrationComponent},
  // {path:'services',loadChildren:()=>import('./pages/immigration/immigration.module').then(m=>m.ImmigrationModule)},
  // {path:'services',loadChildren:'./pages/immigration/immigration.module#ImmigrationModule'},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',redirectTo:'home',pathMatch:'full'}
  
];


@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}
