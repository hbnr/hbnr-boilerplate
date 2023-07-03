import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignUpRoutingModule} from 'src/app/sign-up/sign-up-routing.module';
import {SignUpComponent} from './sign-up.component';

@NgModule({
    declarations: [
        SignUpComponent
    ],
    imports: [
        CommonModule,
        SignUpRoutingModule
    ]
})
export class SignUpModule {
}
