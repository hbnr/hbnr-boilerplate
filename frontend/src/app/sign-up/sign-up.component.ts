import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent {
    form = new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required]),
        passwordConfirm: new FormControl(null, [Validators.required]),
    }, {
        validators: this.passwordMatchValidator
    });

    submit() {
        if (this.form.invalid) {
            console.log('oops');
        } else {
            console.log('success');
        }
    }

    passwordMatchValidator(): ValidatorFn {
        return (formGroup: AbstractControl): ValidationErrors | null => {
            const passwordControl = formGroup.get('password')!;
            const passwordConfirmControl = formGroup.get('passwordConfirm')!;

            if (passwordControl.value !== passwordConfirmControl.value) {
                passwordConfirmControl.setErrors({passwordMismatch: true});
                return {passwordMismatch: true};
            } else {
                passwordConfirmControl.setErrors(null);
                return null;
            }
        };
    }
}
