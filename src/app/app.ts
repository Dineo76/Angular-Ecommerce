import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { Hero } from './hero/hero';
import { AboutUs } from './about-us/about-us';
import { Contacts } from './contacts/contacts';
import { Menu } from './menu/menu';





@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Hero, AboutUs, Contacts,Menu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myAngularApp');
  
}