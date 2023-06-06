import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CustomValidators} from "../../../core/utils/CustomValidators";
import {UserService} from "../../../core/services/user/user.service";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
    passForm: FormGroup;
    submitted = false;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
                public dialogRef: MatDialogRef<ResetPasswordComponent>,
                public userService: UserService
    ) {
        this.passForm = new FormGroup({
                password: new FormControl(null, [Validators.required]),
                repeatPassword: new FormControl(null, [Validators.required]),
            },
            CustomValidators.mustMatch('password', 'repeatPassword')
        );
    }


    onSubmit() {

        let password = this.passForm.get('password').value;

        this.userService.resetPassword(this.data , password);
        this.submitted = true;
        this.dialogRef.close();
    }

    close() {
        this.dialogRef.close();
    }

}
