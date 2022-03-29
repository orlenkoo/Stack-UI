import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SidenavService } from '../side-nav/side-nav.service';


const onMainContentChange = trigger('onMainContentChange', [
  state('close',
    style({
      'margin-left': '130px'
    })
  ),
  state('open',
    style({
      'margin-left': '200px'
    })
  ),
  transition('close => open', animate('250ms ease-in')),
  transition('open => close', animate('250ms ease-in')),
]);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [onMainContentChange]
})
export class HeaderComponent {


  @Input() sidenav: MatSidenav | undefined

  public onSideNavChange: boolean | undefined;

  constructor(private _sidenavService: SidenavService) {
    this._sidenavService.sideNavState$.subscribe((res: boolean | undefined) => {
      this.onSideNavChange = res;
    })
  }

}
