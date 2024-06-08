import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-component',
  templateUrl: './nav-bar-component.component.html',
  styleUrl: './nav-bar-component.component.scss'
})
export class NavBarComponentComponent {

  constructor(private router:Router){}
}
