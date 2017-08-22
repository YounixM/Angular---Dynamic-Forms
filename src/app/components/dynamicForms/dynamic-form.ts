import {QuestionBase} from "./question-base";
import {TextboxQuestion} from "./question-textbox";
import {DropdownQuestion} from "./question-dropdown";
import {CheckboxQuestion} from "./question-checkbox";
import {TextAreaQuestion} from "./question-textarea";
import {RadioQuestion} from "./question-radio";

export class DynamicForm {
  questions: QuestionBase<string>[];
  currentorder: number;
  submitmethod: any;
  validator: any;

  constructor() {
    this.currentorder = 0;
    this.questions = [];
    this.submitmethod = null;
    this.validator = (form) => {return true;};
  }

  private appendQuestion(question: QuestionBase<string>) {
    question.order = this.currentorder;
    this.currentorder++;
    this.questions.push(question);
  }

  appendTextboxQuestion(key: string, label: string, required: boolean, type = "text",
    minlength = null, maxlength = null, placeholder = null, value=null, readonly=false) {
    this.appendQuestion(
      new TextboxQuestion({
        key: key,
        label: label,
        required: required,
        order: this.currentorder++,
        type: type,
        minlength: minlength,
        maxlength: maxlength,
        placeholder: placeholder,
        value: value,
        readonly: readonly,
      })
    );
  }

  appendTextAreaQuestion(key: string, label: string, required: boolean, value = null) {
    this.appendQuestion(
      new TextAreaQuestion({
        key: key,
        label: label,
        required: required,
        order: this.currentorder++,
        value: value
      })
    );
  }

  appendRadioQuestion(key: string, label: string, required: boolean, options:any) {
    this.appendQuestion(
      new RadioQuestion({
        key: key,
        label: label,
        required: required,
        options: options
      })
    )
  }

  appendDropdownQuestion(key: string, label: string, required: boolean, options: any) {
    this.appendQuestion(
      new DropdownQuestion({
        key: key,
        label: label,
        options: options,
        required: required
      }),
    )
  }

  appendCheckboxQuestion(key: string, label: string, required: boolean, requiredtrue=false) {
    this.appendQuestion(
      new CheckboxQuestion({
        key: key,
        label: label,
        required: required,
        requiredtrue: requiredtrue
      }),
    )
  }

  getQuestions() {
    return this.questions.sort((a, b) => a.order - b.order);
  }

  submit(submitmethod: any) {
    this.submitmethod = submitmethod;
  }

  setFormValidator(validator: any) {
    this.validator = validator;
  }
}
