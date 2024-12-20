import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  data: string[] = [];

  loadData() {
    this.data = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  }
}
