import { Component, OnInit } from '@angular/core';
import { DynamicForm } from "../dynamicForms/dynamic-form";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormName;
  loginSubmitButtonText;
  logInForm;

  constructor() {
    this.loginFormName = "Login";
    this.logInForm = this.getLogInFormQuestions();
    this.loginSubmitButtonText = "Login";
  }

  ngOnInit() {
  }

  getLogInFormQuestions() {
    let logInForm = new DynamicForm();

    logInForm.appendTextboxQuestion(
      'username',
      'User Name',
      true
    );

    logInForm.appendTextboxQuestion(
      'password',
      'Password',
      true,
      'password',
      6
    );

    logInForm.submit((form) => this.submitLogInForm(form));

    return logInForm;
  }

  submitLogInForm(form) {
    console.log(form.value)
  }
}