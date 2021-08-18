import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar(message:any, action: any){
    let snackBarRef = this.snackBar.open(message, action, { duration: 2000 });
    // we can call open() on the snackbar with a message an action and a duration
    snackBarRef.afterDismissed().subscribe(() => {
      console.log('Snackbar was dismissed!');  
    });
    // we can subscribe to afterDismissed observable which will trigger after snackbar is dismissed, this is also happening on timeout 
    snackBarRef.onAction().subscribe(() => {
      console.log('Snackbar action was triggered!');  
    });
    // we can subscribe to onAction observable which triggers on a click event on second parameter 
  }

  openCustomSnackBar(component: any, duration:any ){
    this.snackBar.openFromComponent(SnackbarComponent, { duration: 2000});  
  }
    // this works a bit weird but it does work, would need a different component to show
}
