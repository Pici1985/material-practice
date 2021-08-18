import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  
  constructor() { 
  }
  
  ngOnInit(): void {
    
  }
  
  minDate = new Date();
  maxDate = new Date(2022,2,11);

/* this does not allow users to pick any saturdays or sundays */

  dateFilter = (date:any) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  }
}
