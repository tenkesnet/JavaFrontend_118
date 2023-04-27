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
  longText = "Ez egy hosszú szöveg"
  maiDatum = new Date()
  display(): String {
    return "ezt a szöveget írd ki"
  }
}
