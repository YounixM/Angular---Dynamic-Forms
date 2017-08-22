import { QuestionBase } from './question-base';

export class CheckboxQuestion extends QuestionBase<string>{
  controlType = 'cb';

  constructor(options: {} = {}) {
    super(options);
  }
}

