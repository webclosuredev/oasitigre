import { Component } from '@angular/core';
import { Menu } from '../models/Menu';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  menu :Menu[] = [
    {
      label : 'Punti vendita',
      icon : 'menu/locations.svg',
      url : 'locations'
    },
    {
      label : 'Volantini',
      icon : 'menu/offert.svg',
      url : 'offert'
    },
    {
      label : 'Buoni sconto',
      icon : 'menu/coupon.svg',
      url : 'coupon'
    },
    {
      label : 'Cataloghi',
      icon : 'menu/list.svg',
      url : 'list'
    },
    {
      label : 'Spesa online',
      icon : 'menu/online.svg',
      url : 'online'
    },
  ]
  constructor() {}

}
