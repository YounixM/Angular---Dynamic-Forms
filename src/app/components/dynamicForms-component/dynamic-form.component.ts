import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from '../dynamicForms/question-control.service';
import {Response} from "@angular/http";

@Component({
  moduleId: module.id,
  selector: 'dynamic-form',
  templateUrl: 'dynamic-form.component.html',
  styleUrls: ['dynamic-form.component.scss'],
  providers: [ QuestionControlService ]
})

export class DynamicFormComponent implements OnInit {

  @Input() dynamicForm: any;
  @Input() formName;
  @Input() submitButtonText;

  questions;

  form: FormGroup;
  payLoad = '';
  errorMessage;
  errorInSubmitting;
  submitErrorMessage;
  submitting;

  constructor(private qcs: QuestionControlService) {
    this.errorInSubmitting = false;
    this.submitting = false;
  }

  get isValid() {
    if (this.form.valid)
      return true;

    this.errorMessage = '';

    if(this.form.errors) {
      this.errorMessage = '';

      for (let key in this.form.errors) {
        if (this.form.errors.hasOwnProperty(key)) {
          this.errorMessage = this.form.errors[key];
        }
      }
    }

    return false;
  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.dynamicForm.getQuestions(), this.dynamicForm.validator);
    this.questions = this.dynamicForm.getQuestions();
  }

  onSubmit() {
    let message = this.formName + ' submitted';
    this.submitting = true;
    this.dynamicForm.submitmethod(this.form).subscribe(
      (data) => {
        this.submitting = false;
      },
      (error) => {
        this.submitErrorMessage = '';
        if (error instanceof Response) {
          if (error.status === 500) {
            this.submitErrorMessage = 'Something went wrong, please try again';
          } else {
            const message = error.json() || '';
            if (message.hasOwnProperty('message'))
              this.submitErrorMessage = message['message'];
            else
              this.submitErrorMessage = 'Something went wrong, please try again';
          }
        }
        else if(error.hasOwnProperty('message')) {
          this.submitErrorMessage = error['message'];
        }
        else {
          this.submitErrorMessage = 'Something went wrong, please try again';
        }

        this.errorInSubmitting = true;
        this.submitting = false;
      },
      () => { this.submitting = false; }
    );
  }
}
