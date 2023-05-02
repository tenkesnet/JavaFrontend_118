import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [
    MatCardModule
  ]
})

export class AboutComponent {
  longText: string
  a: number
  maiDatum = new Date()
  constructor() {
    this.a = 4
    this.longText = ""
    if (this.a > 3) {
      this.longText = "Az a értéke nagyobb mint 3."
    }
  }
}
