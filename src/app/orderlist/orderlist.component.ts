import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../order';
import { MatSelectChange } from '@angular/material/select';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrl: './orderlist.component.css'
})


export class OrderlistComponent implements OnInit {
  branches: string[] = [];
  data$: Observable<Order[]> = new Observable;
  selectedBranch: string = "";
  displayedColumns: string[] = ['month', 'seller', 'count', 'total'];
  dataSource : MatTableDataSource<Order> = new MatTableDataSource;
  
  constructor(private orderService: OrderService) { }
  
  ngOnInit() {
    this.orderService.getBranches().subscribe(branches => this.branches = branches );
  };

  changeBranch(event: MatSelectChange) {
    this.data$ = this.orderService.getOrders(this.selectedBranch)
    this.data$.subscribe(data => {
      this.dataSource.data = data;
    });
  }
  
}


