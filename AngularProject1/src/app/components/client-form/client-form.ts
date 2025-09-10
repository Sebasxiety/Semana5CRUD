import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService, Client } from '../../services/client'; // Corrected path

@Component({
  selector: 'app-client-form',
  standalone: false, // Keep standalone: false
  templateUrl: './client-form.html',
  styleUrl: './client-form.css' // Keep styleUrl
})
export class ClientFormComponent implements OnInit { // Changed class name
  client: Client = {
    cedula: '',
    nombres: '',
    apellidos: '',
    direccion: '',
    telefono: ''
  };
  isEditMode = false;
  errorMessage: string | null = null;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.clientService.getClient(+id).subscribe({
        next: (data: Client) => {
          this.client = data;
        },
        error: (err: any) => {
          this.errorMessage = 'Failed to load client for editing.';
          console.error('Error loading client:', err);
        }
      });
    }
  }

  onSubmit(): void {
    this.errorMessage = null;
    if (this.isEditMode) {
      this.clientService.updateClient(this.client.id!, this.client).subscribe({
        next: () => {
          this.router.navigate(['/clients']);
        },
        error: (err: any) => {
          this.errorMessage = 'Failed to update client.';
          console.error('Error updating client:', err);
        }
      });
    } else {
      this.clientService.addClient(this.client).subscribe({
        next: () => {
          this.router.navigate(['/clients']);
        },
        error: (err: any) => {
          this.errorMessage = 'Failed to add client.';
          console.error('Error adding client:', err);
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/clients']);
  }
}
