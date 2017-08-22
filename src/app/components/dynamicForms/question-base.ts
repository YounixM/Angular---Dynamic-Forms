export class QuestionBase<T>{
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  name: string;
  tooltipInfo: string;
  minlength;
  maxlength;
  placeholder;
  readonly;
  requiredtrue;

  constructor(options: {
      value?: T,
      key?: string,
      label?: string,
      required?: boolean,
      order?: number,
      controlType?: string,
      name?: string,
      tooltipInfo?: string,
      minlength?,
      maxlength?,
      placeholder?,
      readonly?,
      requiredtrue?
    } = {}) {
    this.value = options.value;
    this.name = options.name || '';
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.tooltipInfo = options.tooltipInfo || '';

    if (this.required)
      this.label = this.label + '*';

    this.minlength = options.minlength;
    this.maxlength = options.maxlength;
    this.readonly = options.readonly;
    this.requiredtrue = options.requiredtrue;

    this.placeholder = '';

    if (options.placeholder)
      this.placeholder = options.placeholder;
  }
}
