import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidemenu } from "../shared/sidemenu/sidemenu";


@Component({
  imports: [RouterOutlet, Sidemenu],
  templateUrl: './dashboard.html',
  styles: ``,
  selector: 'dashboard'
})
export default class Dashboard { }
