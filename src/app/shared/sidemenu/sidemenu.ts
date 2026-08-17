import { Component } from '@angular/core';
import { routes } from '../../app.routes';

@Component({
  imports: [],
  templateUrl: './sidemenu.html',
  styles: ``,
  selector: 'sidemenu',
})
export class Sidemenu {
  public menuItems = routes
    .map(route => route.children ?? [])
    .flat()
    .filter(route => route && route.path)
    .filter(route => route.path?.includes(':'))
  constructor() {
    // const dashboardRoutes = routes
    // .map(route => route.children ?? [])   
    // .flat()
    // .filter(route => route && route.path)
    // .filter(route => route.path?.includes(':'))
    // console.log(dashboardRoutes);


  }
}
