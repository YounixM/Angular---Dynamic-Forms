import { QuestionBase } from './question-base';

export class RadioQuestion extends QuestionBase<string>{
    controlType = 'radiobutton';
    type: string;
    name: string;
    options: { key: string, value: string }[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
        this.name = options['name'] || '';
        this.options = options['options'] || [];
    }
}

