import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { DataStoreService } from 'src/app/service/data-store.service';
import { ErrorMessages } from 'src/app/utils/error.messages.model';
import { ValidationContainer } from 'src/app/utils/validation.model';

@Component({
  selector: 'app-stack-signup-start',
  templateUrl: './stack-signup-start.component.html',
  styleUrls: ['./stack-signup-start.component.scss']
})
export class StackSignupStartComponent implements OnInit {

  nameRegex = /^[a-zA-Z'\s0-9]+$/;
  ausPhoneRegex = /^\(\+\d{2}\)\s\d{4}\s\d{3}\s\d{3}$/; //(+61) xxxx xxx xxx

  firstName: string|undefined;
  lastName: string|undefined;
  contactPhoneNum: string|undefined;
  validation: {[field: string]: ValidationContainer} = {
    first_name: {
      valid: true,
      msg: ''
    }, last_name: {
      valid: true,
      msg: ''
    }, contact_phone_num: {
      valid: true,
      msg: ''
    }
  }

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

  continue = () => {
    if (!this.firstName) {
      this.validation.first_name.valid = false;
      this.validation.first_name.msg = ErrorMessages.EMPTY_FIRST_NAME;
    } else if (!this.nameRegex.test(String(this.firstName))) {
      this.validation.first_name.valid = false;
      this.validation.first_name.msg = ErrorMessages.INVALID_FIRST_NAME;
    } else {
      this.validation.first_name = {valid: true, msg: ''};
    }

    if (!this.lastName) {
      this.validation.last_name.valid = false;
      this.validation.last_name.msg = ErrorMessages.EMPTY_LAST_NAME;
    } else if (!this.nameRegex.test(String(this.lastName))) {
      this.validation.last_name.valid = false;
      this.validation.last_name.msg = ErrorMessages.INVALID_LAST_NAME;
    } else {
      this.validation.last_name = {valid: true, msg: ''};
    }

    if (!this.contactPhoneNum) {
      this.validation.contact_phone_num.valid = false;
      this.validation.contact_phone_num.msg = ErrorMessages.EMPTY_CONTACT_PHONE;
    } else if (!this.ausPhoneRegex.test(this.contactPhoneNum)) {
      this.validation.contact_phone_num.valid = false;
      this.validation.contact_phone_num.msg = ErrorMessages.INVALID_CONTACT_PHONE;
    } else {
      this.validation.contact_phone_num = {valid: true, msg: ''};
    }

    if (this.isFormValid()) {
      const user = this.dataService.user;
      user.firstName = this.firstName;
      user.lastName = this.lastName;
      user.contactPhoneNumber = this.contactPhoneNum?.replace(/[()\s]/g, '');
      this.router.navigate(['signup/profile'])
    }
  }

}
