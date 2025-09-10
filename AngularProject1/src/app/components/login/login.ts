import { Component } from '@angular/core';
import { AuthService } from '../../services/auth'; // Corrected path
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  username!: string;
  password!: string;
  loading = false;
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(): void {
    this.errorMessage = null; // Clear previous errors
    this.loading = true;
    
    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/dashboard']); // Redirect to dashboard on success
      },
      error: (err: any) => { // Added type
        this.loading = false;
        this.errorMessage = 'Usuario o contraseña incorrectos.';
        console.error('Login error:', err);
      }
    });
  }
}
