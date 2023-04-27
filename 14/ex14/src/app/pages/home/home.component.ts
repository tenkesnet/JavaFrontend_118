import { Person } from './../../model/person.model';
import { Component, OnInit } from '@angular/core';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  person: Person

  constructor() {
    this.person = { name: "Bárdó", birthDate: new Date('1975-01-20') }
  }
  ngOnInit(): void {

  }
}
