import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialDesignModule } from './shared/material-design.module';
import { FormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { BlogComponent } from './pages/blog/blog.component';
import { MainCarouselComponent } from './components/main-carousel/main-carousel.component';
import { SwiperConfigInterface,SWIPER_CONFIG,SwiperModule } from 'ngx-swiper-wrapper';
import { ImmigrationComponent } from './pages/immigration/immigration.component';
import {AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ImmigrationDetailsComponent } from './pages/immigration/immigration-details/immigration-details.component';
import { HttpClientModule } from '@angular/common/http';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableComponent } from './components/mat-table/mat-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {CountToModule} from 'angular-count-to';

// const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
//   observer: true,
//   direction: 'horizontal',
//   threshold: 50,
//   spaceBetween: 5,
//   slidesPerView: 1,
//   centeredSlides: true
// };
  @NgModule({
  declarations: [
    AppComponent,
    MainCarouselComponent,
    HomeComponent,ImmigrationComponent, NavbarComponent, ImmigrationDetailsComponent, SideNavComponent, MatTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SwiperModule,
    MaterialDesignModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    CountToModule
    
    
  ],
  providers: [
    {
      provide:SWIPER_CONFIG,useValue:""
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
