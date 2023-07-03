import {Component, forwardRef, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
    selector: 'ui-input-field',
    templateUrl: './input-field.component.html',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => InputFieldComponent),
        multi: true
    }],
})
export class InputFieldComponent<T> implements OnInit, OnDestroy, ControlValueAccessor {
    @Input() label = '';
    @Input() type = 'text';
    @HostBinding('class') classes: string = 'block';

    id = Math.floor((Math.random() * 1000)).toString();

    control = new FormControl();

    private subscriptions: Subscription[] = [];

    ngOnInit() {
        this.subscriptions.push(this.control.valueChanges.subscribe(
            value => {
                this.onChange(value);
            }
        ))
    }

    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
        this.subscriptions = [];
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    writeValue(obj: any): void {
        this.control.setValue(obj, {emitEvent: false});
    }

    onBlur() {
        this.onTouched();
    }

    private onChange = (value: T) => {
    }
    private onTouched = () => {
    }
}

