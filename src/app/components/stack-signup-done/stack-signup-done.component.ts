import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stack-signup-done',
  templateUrl: './stack-signup-done.component.html',
  styleUrls: ['./stack-signup-done.component.scss']
})
export class StackSignupDoneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onLaunchStack() {
    alert('Stack launched!');
  }

}
