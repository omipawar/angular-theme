import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-theme';

  constructor(private snackbar: MatSnackBar) {

  }

  ngOnInit(): void {
    this.snackbar.open('Notification Message', 'Button Text', {
      duration: 5000
    })
  }
}
