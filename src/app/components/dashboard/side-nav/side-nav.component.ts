import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { SidenavService } from './side-nav.service';
import { BotPNGDataURI } from '../../../svgs/bot.pngs'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

const onSideNavChange = trigger('onSideNavChange', [
  state('close',
    style({
      'min-width': '50px'
    })
  ),
  state('open',
    style({
      'min-width': '200px'
    })
  ),
  transition('close => open', animate('250ms ease-in')),
  transition('open => close', animate('250ms ease-in')),
]);



const animateText = trigger('animateText', [
  state('hide',
    style({
      'display': 'none',
      opacity: 0,
    })
  ),
  state('show',
    style({
      'display': 'block',
      opacity: 1,
    })
  ),
  transition('close => open', animate('350ms ease-in')),
  transition('open => close', animate('200ms ease-out')),
]);

interface Page {
  link: string;
  name: string;
  icon?: string | SafeHtml;
  image?: string
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  animations: [onSideNavChange, animateText]
})
export class SideNavComponent implements OnInit {

  icons = BotPNGDataURI.MenuIcon;
  public sideNavState: boolean = false;
  public linkText: boolean = false;

  public pages: Page[] = [
    { name: 'Home', link: '/dashboard/home', icon: this.sanitizer.bypassSecurityTrustHtml(this.icons.home) },
    { name: 'Insights', link: '/dashboard/campaign', icon: this.sanitizer.bypassSecurityTrustHtml(this.icons.insights) },
    { name: 'Host', link: '/', image: 'MenuIcon_Host_Unfocus.png' },
    { name: 'Settings', link: '/dashboard/settings', icon: this.sanitizer.bypassSecurityTrustHtml(this.icons.settings) },

  ]

  constructor(private _sidenavService: SidenavService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  onSinenavToggle() {
    this.sideNavState = !this.sideNavState

    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200)
    this._sidenavService.sideNavState$.next(this.sideNavState)
  }


}
