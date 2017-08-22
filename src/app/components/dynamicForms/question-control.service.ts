  import { Injectable }   from '@angular/core';
  import { FormControl, FormGroup, Validators } from '@angular/forms';
  import { QuestionBase } from './question-base';

  @Injectable()
  export class QuestionControlService {
    constructor() {  }

    toFormGroup(questions: QuestionBase<any>[], validator: any) {
      let group: any = {};

      questions.forEach(question => {
        let validators = [];

        if(question.required)
          validators.push(Validators.required);

        if(question.minlength)
          validators.push(Validators.minLength(question.minlength));

        if(question.maxlength)
          validators.push(Validators.maxLength(question.maxlength));

        if(question.requiredtrue) {
          validators.push(Validators.requiredTrue);
        }

        group[question.key] = new FormControl(
          question.value || '', validators
        );
      });

      return new FormGroup(group, validator);
    }
  }
