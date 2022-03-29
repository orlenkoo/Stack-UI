import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { StackCard } from '../../model/stackcard.model';
import { DataStoreService } from '../../service/data-store.service';

@Component({
  selector: 'app-stackcard',
  templateUrl: './stackcard.component.html',
  styleUrls: ['./stackcard.component.scss'],
})
export class StackcardComponent implements OnInit {
  stackMainLogo = '';
  baseUrl: string = this.dataStore.baseAssetsUrl;
  brandLogo = `${this.baseUrl}/bot/browser/koala.png`;
  timeIcon = '';

  @Input() stack: StackCard = new StackCard();
  @Output() selected: EventEmitter<string> = new EventEmitter();

  constructor(public ref: ElementRef, public dataStore: DataStoreService) {}

  ngOnInit(): void {}

  selectStack = () => {
    this.selected.next(this.stack.id);
  };
}
