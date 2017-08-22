import { QuestionBase } from './question-base';

export class TextboxQuestion extends QuestionBase<string> {
  controlType = 'textbox';
  type: string;
  name: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
    this.name = options['name'] || '';
   }
}
