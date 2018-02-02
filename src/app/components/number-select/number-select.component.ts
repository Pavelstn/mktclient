import {Component, OnInit, forwardRef, Input} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';

const noop = () => {
};


export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NumberSelectComponent),
  multi: true
};

@Component({
  selector: 'app-number-select',
  templateUrl: './number-select.component.html',
  styleUrls: ['./number-select.component.sass'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class NumberSelectComponent implements OnInit, ControlValueAccessor {
  public innerValue = 1;
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  @Input() min;
  @Input() max;

  constructor() {
  }

  ngOnInit() {
  }

  incrementNumber(n: number) {
    this.innerValue += n;
    if (this.innerValue < this.min) {
      this.innerValue = this.min;
    }
    if (this.innerValue > this.max) {
      this.innerValue = this.max;
    }
    this.onChangeCallback(this.innerValue);
  }

  get value(): any {
    return this.innerValue;
  }


  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  onBlur() {
    this.onTouchedCallback();
  }

  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
