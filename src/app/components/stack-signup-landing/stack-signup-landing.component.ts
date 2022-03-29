import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { DataStoreService } from 'src/app/service/data-store.service';
import { ErrorMessages } from 'src/app/utils/error.messages.model';
import { ValidationContainer } from 'src/app/utils/validation.model';

@Component({
  selector: 'app-stack-signup-landing',
  templateUrl: './stack-signup-landing.component.html',
  styleUrls: ['./stack-signup-landing.component.scss']
})
export class StackSignupLandingComponent implements OnInit {

  emailRegexPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  passwordRegexPattern = /^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=\D*\d)(?=.*[\s!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~])[a-zA-Z\d\s!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]{8,}$/gm;
  emailId: string|undefined;
  secret: string|undefined;
  validation: {[field: string]: ValidationContainer} = {
    'email_id': {
      valid: true,
      msg: ''
    },
    'secret':  {
      valid: true,
      msg: ''
    }
  };

  constructor(private router: Router, private dataService: DataStoreService) { }

  ngOnInit(): void {
  }

  isFormValid = () => {
    const fields = Object.keys(this.validation);
    let isValid = true;
    fields.forEach(field => {
      isValid = isValid && this.validation[field].valid;
    });
    return isValid;
  }

  validateEmail = () => {
    if (!this.emailId) {
      this.validation.email_id.valid = false;
      this.validation.email_id.msg = ErrorMessages.EMPTY_EMAIL_ID;
    } else if (!this.emailRegexPattern.test(String(this.emailId).toLowerCase())) {
      this.validation.email_id.valid = false;
      this.validation.email_id.msg = ErrorMessages.INVALID_EMAIL_ID;
    } else {
      this.validation.email_id.valid = true;
      this.validation.email_id.msg = '';
    }
  }

  validateSecret = () => {
    if (!this.secret) {
      this.validation.secret.valid = false;
      this.validation.secret.msg = ErrorMessages.EMPTY_SECRET;
    } else if (!this.passwordRegexPattern.test(String(this.secret))) {
      this.validation.secret.valid = false;
      this.validation.secret.msg = ErrorMessages.INVALID_SECRET;
    } else {
      this.validation.secret.valid = true;
      this.validation.secret.msg = '';
    }
  }

  handleBlur = (hostEvent: string) => {
    this.validateEmail();
  }

  createAccount = () => {
    this.validateEmail();
    this.validateSecret();
    
    if (this.isFormValid()) {
      // TODO --> call API to login
      const user = new User();
      user.emailId = this.emailId;
      user.secret = this.secret;
      this.dataService.user = user;
      this.router.navigate(['signup/start']);
    }
  }

}
