import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BlockUiInterface } from './interface/block-ui.interface';

@Component({
  selector: 'ieat-block-ui',
  templateUrl: './block-ui.component.html',
  styleUrls: ['./block-ui.component.scss']
})
export class BlockUiComponent implements OnInit {

  @Input()
  blockUiModel: BlockUiInterface = {
    isShowBlockUi: false,
    headerBgColor: 'white',
    headerMessage: 'This is header',
    isShowCloseButton: false
  };

  @Output()
  blockUiBgClick: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  blockUiCloseClick: EventEmitter<void> = new EventEmitter<void>();



  constructor() { }

  ngOnInit(): void {}

  onBgClick(): void {
    this.blockUiBgClick.emit();
  }

  onClose(): void {
    this.blockUiCloseClick.emit();
  }


}
