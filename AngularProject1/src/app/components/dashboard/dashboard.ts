import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth'; // Corrected path

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.initBurgerMenu();
  }

  logout(): void {
    this.authService.logout();
  }

  private initBurgerMenu(): void {
    // Burger menu functionality
    const burger = document.querySelector('.navbar-burger');
    const menu = document.getElementById('navbarMenu');

    if (burger && menu) {
      burger.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
      });
    }
  }
}
