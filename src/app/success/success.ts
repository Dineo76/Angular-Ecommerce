import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './success.html',
  styleUrls: ['./success.css']
})
export class Success {

  order: any;

  constructor(private router: Router) {
    this.order = this.router.getCurrentNavigation()?.extras.state?.['order'];
  }
}