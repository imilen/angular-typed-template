import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { TemplateDirective } from './directives/template/template.directive';
import { Card } from './models/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CardComponent, TemplateDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-typed-template';

  cardType!: Card;

  cards: Card[] = Array(4).fill(0).map((_v, i) => ({ id: (i + 1) * 1000, number: 'xxxxxxxx' }));

  constructor() { }

  $as<T>(data: unknown, _model: T | undefined): T {
    return data as unknown as T;
  }
}
