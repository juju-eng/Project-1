import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  private apiURL = "https://localhost:7095/PerformanceReport/"; 

  constructor(private httpClient: HttpClient) { }
  getBranches(): Observable < string[] > {
    return this.httpClient.get < string[] > (this.apiURL);
  }

  getOrders(branch:string): Observable < Order[] > {
    return this.httpClient.get < Order[] > (this.apiURL + branch);
  }
}
