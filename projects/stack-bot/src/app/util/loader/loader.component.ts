import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  isLoaderActive = false;
  private activeProcess = 0;
  constructor() {}

  ngOnInit(): void {}

  showLoader = () => {
    this.activeProcess++;
    this.isLoaderActive = true;
  };

  hideLoader = () => {
    this.activeProcess--;
    if (this.activeProcess <= 0) {
      this.isLoaderActive = false;
      this.activeProcess = 0;
    }
  };
}
