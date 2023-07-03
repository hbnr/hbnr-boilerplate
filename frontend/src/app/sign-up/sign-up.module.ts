import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {SignUpRoutingModule} from 'src/app/sign-up/sign-up-routing.module';
import {UIModule} from 'src/app/ui/ui.module';
import {SignUpComponent} from './sign-up.component';

@NgModule({
    declarations: [
        SignUpComponent
    ],
    imports: [
        CommonModule,
        SignUpRoutingModule,
        UIModule,
        ReactiveFormsModule
    ]
})
export class SignUpModule {
}
