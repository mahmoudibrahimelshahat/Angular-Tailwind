import { Component, OnInit } from '@angular/core';
import {
  faRocket,
  faLink,
  faTrophy,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  items: any = [];

  faRocket = faRocket;
  faLink = faLink;
  faTrophy = faTrophy;
  faCheck = faCheck;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        img: 'https://preview.colorlib.com/theme/echo/images/xperson_2.jpg.pagespeed.ic.qGTmM_papS.webp',
        head1: 'Drew Wood',
        head2: 'Director at Google',
      },
      {
       
        img: 'https://preview.colorlib.com/theme/echo/images/xperson_3.jpg.pagespeed.ic.iqBaxof6Em.webp',
        head1: 'Michelle Alisson',
        head2: 'Director at Google',
      },
      {
        
        img: 'https://preview.colorlib.com/theme/echo/images/xperson_1.jpg.pagespeed.ic.dXEKkmeZMQ.webp',
        head1: 'Carl Anderson',
        head2: 'Director at Google',
      },
    ];
  }

  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    navSpeed: 900,
    navText: [''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      850: {
        items: 4,
      },
    },
    nav: false,
  };

}
