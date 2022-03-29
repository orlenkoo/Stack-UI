import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AwsCognitoService } from 'src/app/service/aws-cognito.service';
import { DataStoreService } from 'src/app/service/data-store.service';

@Component({
  selector: 'app-stack-signup-profile',
  templateUrl: './stack-signup-profile.component.html',
  styleUrls: ['./stack-signup-profile.component.scss']
})
export class StackSignupProfileComponent implements OnInit {

  businessName: string | undefined;
  industryName: string | undefined;
  mainGoal: string | undefined;
  shopifyUrl: string | undefined;
  businessNameControl: FormControl;
  shopifyUrlControl: FormControl;

  requiredMap = {
    businessName: true,
    shopifyUrl: true
  }

  industryOptions = [
    {
      label: 'Accomodation and food services Industry',
      value: 'Accomodation and food services Industry'
    },
    {
      label: 'Administrative and support services industry',
      value: 'Administrative and support services industry'
    },
    {
      label: 'Agriculture industry',
      value: 'Agriculture industry'
    },
    {
      label: 'Arts and recreation services industry',
      value: 'Arts and recreation services industry'
    },
    {
      label: 'Building and construction industry',
      value: 'Building and construction industry'
    },{
      label: 'Financial and insurance services industry',
      value: 'Financial and insurance services industry'
    },
    {
      label: 'Fisheries industry',
      value: 'Fisheries industry'
    },
    {
      label: 'Forestry industry',
      value: 'Forestry industry'
    },
    {
      label: 'Information media and telecommunications industry',
      value: 'Information media and telecommunications industry'
    },
    {
      label: 'Manufacturing industry',
      value: 'Manufacturing industry'
    },{
      label: 'Professional, scientific and technical services industry',
      value: 'Professional, scientific and technical services industry'
    },
    {
      label: 'Rental, hiring and real estate services industry',
      value: 'Rental, hiring and real estate services industry'
    },
    {
      label: 'Retail and wholesale trade industry',
      value: 'Retail and wholesale trade industry'
    },
    {
      label: 'Tourism industry',
      value: 'Tourism industry'
    },
    {
      label: 'Transport, postal and warehousing industry',
      value: 'Transport, postal and warehousing industry'
    }
  ];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private dataService: DataStoreService,
    private cognitoService: AwsCognitoService
  ) {
    const urlRegex = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    this.businessNameControl = this.formBuilder.control(undefined, [Validators.required]);
    this.shopifyUrlControl = this.formBuilder.control(undefined, [Validators.required, Validators.pattern(urlRegex)]);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.businessNameControl.valid && this.shopifyUrlControl.valid) {
      const user = this.dataService.user;
      user.businessName = this.businessNameControl.value;
      user.industryName = this.industryName;
      user.goal = this.mainGoal;
      user.shopifyURL = this.shopifyUrlControl.value;
      
      //Call API to signup with cognito
      this.cognitoService.userSignup(user).then(data => {
        console.log(data);
        this.router.navigate(['/signup/verify']);
      }).catch(err => {
        console.error(err);
      });
    }
  }

}
