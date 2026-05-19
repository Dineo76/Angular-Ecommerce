import { Component } from '@angular/core';
imports: [RouterLink, RouterLinkActive]
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';



@Component({
  selector: 'navbarApp',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}
