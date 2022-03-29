import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-stack-signup',
  templateUrl: './stack-signup.component.html',
  styleUrls: ['./stack-signup.component.scss']
})
export class StackSignupComponent implements OnInit {

  carouselPageNum = 0;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
      ).subscribe((e: NavigationEnd) => {
        this.loadImageForURL(e.url);
      })
  }

  ngOnInit(): void {
  }

  loadImageForURL = (urlSegment: string) => {
    const urlTokens = urlSegment.split('/');
    const url = urlTokens[urlTokens.length-1];
    switch(url) {
      case 'signup':
        this.carouselPageNum = 0;
        break;
      case 'start':
        this.carouselPageNum = 1;
        break;
      case 'profile':
        this.carouselPageNum = 2;
        break;
      case 'verify':
        this.carouselPageNum = 3;
        break;
      case 'done':
        this.carouselPageNum = 4;
        break;
    }
  }

}
