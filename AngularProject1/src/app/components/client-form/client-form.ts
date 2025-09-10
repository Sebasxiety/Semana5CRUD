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
  loading = false;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.loading = true;
      this.clientService.getClient(+id).subscribe({
        next: (data: Client) => {
          this.client = data;
          this.loading = false;
        },
        error: (err: any) => {
          this.errorMessage = 'Error al cargar los datos del cliente.';
          this.loading = false;
          console.error('Error loading client:', err);
        }
      });
    }
  }

  onSubmit(): void {
    this.errorMessage = null;
    this.successMessage = null;
    this.loading = true;
    
    if (this.isEditMode) {
      this.clientService.updateClient(this.client.id!, this.client).subscribe({
        next: () => {
          this.loading = false;
          this.successMessage = 'Cliente actualizado exitosamente.';
          setTimeout(() => {
            this.router.navigate(['/dashboard/clients']);
          }, 1500);
        },
        error: (err: any) => {
          this.loading = false;
          this.errorMessage = 'Error al actualizar el cliente.';
          console.error('Error updating client:', err);
        }
      });
    } else {
      this.clientService.addClient(this.client).subscribe({
        next: () => {
          this.loading = false;
          this.successMessage = 'Cliente creado exitosamente.';
          setTimeout(() => {
            this.router.navigate(['/dashboard/clients']);
          }, 1500);
        },
        error: (err: any) => {
          this.loading = false;
          this.errorMessage = 'Error al crear el cliente.';
          console.error('Error adding client:', err);
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/dashboard/clients']);
  }
}
