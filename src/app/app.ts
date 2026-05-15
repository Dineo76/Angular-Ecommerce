import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { Hero } from './hero/hero';

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, Hero],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myAngularApp');
}
