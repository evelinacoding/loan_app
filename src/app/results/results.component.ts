import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  //@Input allows a parent component to bind this property and pass data to a child component
  //In the child component you define an input property using the @Input decorator
  //To ;bind in the parent component by using property binding syntax or {{ }}
  //NOTE: NO SPACE BETWEEN INPUT AND ()
  @Input() monthlyPayment: number;
  @Input() totalInterestPaid: number;

  constructor() { }

  ngOnInit(): void {
  }

}
