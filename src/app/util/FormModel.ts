export class FormModel<T> {
    value: T|undefined;
    key: string;
    label: string;
    required: boolean;
    controlType: string;
    type: string;
    options: {key: string, label: string}[];
  
    constructor(options: {
        value?: T;
        key?: string;
        label?: string;
        required?: boolean;
        order?: number;
        controlType?: string;
        type?: string;
        options?: {key: string, label: string}[];
      } = {}) {
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.controlType = options.controlType || '';
      this.type = options.type || '';
      this.options = options.options || [];
    }
  }