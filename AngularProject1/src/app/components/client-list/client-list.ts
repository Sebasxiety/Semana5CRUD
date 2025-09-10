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

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.clientService.getClients().subscribe({
      next: (data: Client[]) => { // Added type
        this.clients = data;
      },
      error: (err: any) => { // Added type
        this.errorMessage = 'Failed to load clients.';
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
    if (id && confirm('Are you sure you want to delete this client?')) {
      this.clientService.deleteClient(id).subscribe({
        next: () => {
          this.loadClients(); // Reload clients after deletion
        },
        error: (err: any) => { // Added type
          this.errorMessage = 'Failed to delete client.';
          console.error('Error deleting client:', err);
        }
      });
    }
  }
}