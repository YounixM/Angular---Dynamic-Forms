import { Component, OnInit } from '@angular/core';
import { DynamicForm } from "../dynamicForms/dynamic-form";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  SignUpFormName;
  SignUpSubmitButtonText;
  SignUpForm;

  constructor() {
    this.SignUpFormName = "SignUp";
    this.SignUpForm = this.getSignUpFormQuestions();
    this.SignUpSubmitButtonText = "SignUp";
  }

  ngOnInit() {
  }

  getSignUpFormQuestions() {
    let SignUpForm = new DynamicForm();

    SignUpForm.appendTextboxQuestion(
      'firstname',
      'First Name',
      true
    );

    SignUpForm.appendTextboxQuestion(
      'lastname',
      'Last Name',
      true
    );

    SignUpForm.appendTextboxQuestion(
      'email',
      'Email Address',
      true
    );

    SignUpForm.appendDropdownQuestion(
      'userType',
      ' Type ',
      true,
      [
        { key: 'borrower', value: 'Borrower' },
        { key: 'lender', value: 'Lender' },
      ],
    )

      SignUpForm.appendTextboxQuestion(
        'password',
        'Password',
        true
      );


    SignUpForm.appendTextboxQuestion(
      'confirmPassword',
      'Confirm Password',
      true
    );

    SignUpForm.submit((form) => this.submitSignUpForm(form));

    return SignUpForm;
  }

  submitSignUpForm(form) {
    console.log(form.value)
  }
}