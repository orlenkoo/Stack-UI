import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AwsCognitoService } from '../../service/aws-cognito.service';
import { DataStoreService } from '../../service/data-store.service';
import { pairwise, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-stack-signup-verify',
  templateUrl: './stack-signup-verify.component.html',
  styleUrls: ['./stack-signup-verify.component.scss']
})
export class StackSignupVerifyComponent implements OnInit {

  @ViewChildren('input') elements: QueryList<ElementRef> | undefined;

  placeholders: any[] = [];
  group: FormGroup;
  inputs: FormArray | undefined;
  validatorClass: string = '';
  submitDisabled: boolean = true;
  codeVerified: boolean | undefined = undefined;
  codeResent: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private cognitoService: AwsCognitoService,
    public dataService: DataStoreService
  ) {
    this.group = formBuilder.group({
      inputs: this.inputs
    });
  }

  ngOnInit(): void {
    this.placeholders = Array(6).fill(1);
    this.inputs = this.formBuilder.array(this.placeholders.map((holder, i) => {
      const control = this.formBuilder.control('', [
        Validators.required,
        Validators.min(0),
        Validators.max(9)
      ]);
      control.valueChanges
      .pipe(
        startWith(null),
        pairwise()
      )
      .subscribe(([oldValue, value]) => {
        if ((value !== undefined || value !== null) && Number(value) > 9) {
          return control.setValue(oldValue, {emitEvent: false});
        }
        if ((value !== undefined || value !== null) && i < this.placeholders.length) {
          const next = this.elements?.get(i + 1);
          next?.nativeElement.focus();
        }
      });
      return control;
    }), [this.codeInputValidator()]);
    this.group = this.formBuilder.group({
      inputs: this.inputs
    });
  }

  onBackspace(i: number) {
    if (i > 0) {
      this.elements?.get(i - 1)?.nativeElement.focus();
    }
  }

  codeInputValidator() {
    return (abstractControl: AbstractControl) => {
      const formArray = abstractControl as FormArray;
      let valid = true;
      formArray.controls.forEach(control => {
        valid = control.value !== undefined && control.value !== null && control.value !== '' ? valid : false;
      });
      this.submitDisabled = !valid;
      return valid ? null : { error: 'Please entire the entire code' };
    }
  }

  onSubmit() {
    const values = this.inputs?.value;
    const value = values.join('');
    this.cognitoService.userConfirm(<string>this.dataService.user.emailId, value)
    .then(data => {
      this.validatorClass = 'code-valid';
      this.codeVerified = true;
      setTimeout(() => this.router.navigate(['/signup/done']), 1000);
    }).catch(err => {
      this.validatorClass = 'code-invalid';
      this.codeVerified = false;
    });
  }

  resendCode() {
    this.codeResent = true;
  }

}
