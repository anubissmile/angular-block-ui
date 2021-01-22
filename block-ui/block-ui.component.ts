import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BlockUIFactory } from './factory/block-ui.factory';
import { BlockUIAlignmentEnum, BlockUiInterface } from './interface/block-ui.interface';

@Component({
  selector: 'ieat-block-ui',
  templateUrl: './block-ui.component.html',
  styleUrls: ['./block-ui.component.scss']
})
export class BlockUiComponent implements OnInit {

  @Input()
  blockUiModel: BlockUiInterface = BlockUIFactory.getDefault();

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

  configureHeaderMessageStyle(): any {
    const margin = this.blockUiModel.headerMessage.alignment === BlockUIAlignmentEnum.CENTER ? '0 1' : '0 0';
    return {
      'text-align': this.blockUiModel.headerMessage.alignment,
      margin
    };
  }

}
