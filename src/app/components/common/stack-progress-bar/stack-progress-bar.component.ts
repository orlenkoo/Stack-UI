import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stack-progress-bar',
  templateUrl: './stack-progress-bar.component.html',
  styleUrls: ['./stack-progress-bar.component.scss']
})
export class StackProgressBarComponent implements OnInit {
  @Input() width = '0%';
  @Input() background = 'white';
  @Input() foreground = 'linear-gradient(156.6deg, #395A82 0%, #4789BA 49.48%, #4FCAFF 100%)';
  @Input() barBorderRadius = '20px'
  @Input() containerBorderRadius = '20px'

  constructor() { }

  ngOnInit(): void {
  }

}
