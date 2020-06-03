import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, AfterViewInit {

  images: string[] = [
    'assets/images/banner-1.jpg',
    'assets/images/banner-2.jpg',
    '/assets/images/banner-3.jpg',
  ];
  constructor() {

  }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });
  }

  ngOnInit(): void {
  }

}
