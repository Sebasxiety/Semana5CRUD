import { Component, OnInit } from '@angular/core';
import { ClientService, Client } from '../../services/client'; // Corrected path
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  standalone: false, // Keep standalone: false
  templateUrl: './client-list.html',
  styleUrl: './client-list.css' // Keep styleUrl
})
export class ClientListComponent implements OnInit { // Changed class name
  clients: Client[] = [];
  errorMessage: string | null = null;
  loading: boolean = false;

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.loading = true;
    this.errorMessage = null;
    this.clientService.getClients().subscribe({
      next: (data: Client[]) => { // Added type
        this.clients = data;
        this.loading = false;
      },
      error: (err: any) => { // Added type
        this.errorMessage = 'Error al cargar la lista de clientes.';
        this.loading = false;
        console.error('Error loading clients:', err);
      }
    });
  }

  editClient(id: number | undefined): void {
    if (id) {
      this.router.navigate(['/clients/edit', id]);
    }
  }

  deleteClient(id: number | undefined): void {
    if (id && confirm('¿Estás seguro de que quieres eliminar este cliente?')) {
      this.clientService.deleteClient(id).subscribe({
        next: () => {
          this.loadClients(); // Reload clients after deletion
        },
        error: (err: any) => { // Added type
          this.errorMessage = 'Error al eliminar el cliente.';
          console.error('Error deleting client:', err);
        }
      });
    }
  }
}