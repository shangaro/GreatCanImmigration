
// ------ say--
import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss']
})
export class MainCarouselComponent implements OnInit {
 
  public slides = [
    {title:"Apply to Canada",image:"assets/images/countries/sidebar-canada1.jpg",subtitle:"Right time is NOW"},
    {title:"Apply to Canada", image:"assets/images/countries/sidebar-canada2.jpg", subtitle:"Right time is NOW"},
    {title:"Apply to Canada", image:"assets/images/flags/ca_bak.svg", subtitle:"Right time is NOW"}
  ];
 
  public config: SwiperConfigInterface = {};

  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true
  };
  
  constructor() { }

  ngOnInit() { }

  ngAfterViewInit(){
    this.config = {
      slidesPerView: 1,
      spaceBetween: 0,         
      keyboard: true,
      navigation: true,
      pagination: this.pagination,
      grabCursor: true,        
      loop: false,
      preloadImages: false,
      lazy: true,     
      autoplay: {
        delay: 6000,
        disableOnInteraction: false
      },
      speed: 500,
      effect: "slide"
    }
  }

}
