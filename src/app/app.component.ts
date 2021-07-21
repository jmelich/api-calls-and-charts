import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  activeLink = '/both';

  links = [
    {name: 'Ambos sexos', url: '/both'},
    {name: 'Femenino', url: '/female'},
    {name: 'Masculino', url: '/male'},
  ]

  constructor(
    private router: Router
  ){}

  ngOnInit() {
    this.router.events.subscribe((res) => {
      this.activeLink = this.router.url;
    });
  }
}
