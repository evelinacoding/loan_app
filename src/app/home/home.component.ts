import { MatIcon } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Form Group for the loan
  loanForm: FormGroup;

  //Variables for the form in typescript
  loanAmount: number;
  interestRate: number;
  loanTerm: number;

  //Variables for the results in typescript
  monthlyPayment: number = 0;
  totalInterestPaid: number = 0;

  //The following injects FormBuilder through the constructor
  //Ensures you have access to  the FormBuilder instance without needing to manually instantiate it
  //Injecting FormBuilder gives you easy access to methods such as form controls, form groups, and form arrays.
  constructor(private fb: FormBuilder) { }

  //Initializes the loanForm with form controls and validators.
  ngOnInit(): void {
    this.loanForm = this.fb.group({
      loanAmount: ['', Validators.required],
      interestRate: ['', Validators.required],
      loanTerm: ['', Validators.required]
    })
  }

  get form() {
    return this.loanForm.controls;
  }

  //A function to calculate the total
  calculateTotal() {

    //parseFloat function parses a string and return a floating point number
    //Variables that convert input and pull data from the form
    let loanAmount = parseFloat(this.loanForm.value.loanAmount);

    let interestRate = parseFloat(this.loanForm.value.interestRate);

    let loanTerm = parseFloat(this.loanForm.value.loanTerm);

    //Variables containing equations for months/rate
    let months = (loanTerm * 12);
    let ratePerPeriod = ((interestRate / 100) / 12);

    //Calculate the monthly payment with the values from the input form
    this.monthlyPayment = loanAmount * (ratePerPeriod * Math.pow((ratePerPeriod + 1), months)) / (Math.pow((1 + ratePerPeriod), months) - 1)

    this.interestRate = (this.monthlyPayment * months) - loanAmount;
  }

}
