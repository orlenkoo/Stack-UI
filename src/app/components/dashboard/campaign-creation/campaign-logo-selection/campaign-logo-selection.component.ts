import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-campaign-logo-selection',
  templateUrl: './campaign-logo-selection.component.html',
  styleUrls: ['./campaign-logo-selection.component.scss']
})
export class CampaignLogoSelectionComponent implements OnInit {

  selectedImage?: File;
  isImageUploaded?: boolean = false;

  @Input() campaign: any;
  @Output() campaignChange: EventEmitter<any> = new EventEmitter();
  @Output() onNext: EventEmitter<void> = new EventEmitter();

  stack = {
    packId: 1,
    brandImageUrl: '',
    discountAmount: 5,
    estimatedTime: 1,
    introduction: {
      title: 'Tell us about you!',
      description: 'We’re really keen to get to know you a little better.',
    },
    infoRequired: ['Age', 'Gender', 'Postcode'],
    questionIds: [],
    completed: false,
    theme: 'bondi_blue'
  }


  constructor() { }

  ngOnInit(): void {
  }

  selectImage(event: any): void {
    this.selectedImage = event.target.files[0];
    console.log('xxxx :: ', this.selectedImage);
  }

  uploadImage(): void {
    //TODO : Call API to upload
    this.isImageUploaded = true;
  }

}
