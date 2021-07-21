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
    {name: 'Both', url: '/both'},
    {name: 'Female', url: '/female'},
    {name: 'Male', url: '/male'},
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
