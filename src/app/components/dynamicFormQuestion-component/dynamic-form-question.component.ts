import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { QuestionBase } from '../dynamicForms/question-base';

@Component({
  moduleId: module.id,
  selector: 'df-question',
  templateUrl: 'dynamic-form-question.component.html',
  styleUrls: ['dynamic-form-question.component.scss']
})

export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  @Input() formName;

  get isValid() {
    const control = this.form.controls[this.question.key];
    return !this.form.controls[this.question.key].touched ||
      this.form.controls[this.question.key].valid;
  }

  get errorMessage() {
    const l = this.question.label.substr(0, this.question.label.length - 1);
    const control = this.form.controls[this.question.key];

    if(control.hasError('required') && this.question.controlType == 'cb')
      return 'Please agree to continue';

    if(control.hasError('required'))
      return l + ' is required';

    if(control.hasError('minlength') && !control.hasError('maxlength'))
      return l + ' should have a minimum ' + control.errors['minlength']['requiredLength'] + ' characters';

    if(control.hasError('maxlength') && !control.hasError('minlength'))
      return l + ' should have a maximum ' + control.errors['maxlength']['requiredLength'] + ' characters';

    return '';
  }

}
