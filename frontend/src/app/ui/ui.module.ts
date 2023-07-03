import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {InputFieldComponent} from 'src/app/ui/input-field/input-field.component';

@NgModule({
    declarations: [InputFieldComponent],
    exports: [InputFieldComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class UIModule {
}
