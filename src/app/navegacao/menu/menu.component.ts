import { Component, OnInit } from '@angular/core';
import { Nav } from '../models/Nav';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isCollapsed = true;

  nav: Nav[] = [
    {
      link: '/home',
      name: 'Home',
      exact: true,
      admin: false
    },
    {
      link: '/condutor',
      name: 'Condutor',
      exact: true,
      admin: false
    },
    {
      link: '/veiculo',
      name: 'Veiculo',
      exact: true,
      admin: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
