import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'
import { Cart } from '../services/cart';




@Component({
  selector: 'navbarApp',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  cartService = inject(Cart);

}
