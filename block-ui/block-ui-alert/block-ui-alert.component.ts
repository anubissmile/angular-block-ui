import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonButtonFactory, CommonButtonModel } from '../../common-button/shared/common-button.factory';
import { CommonButtonThemeEnum, CommonButtonTypeEnum } from '../../common-button/shared/common-button.interface';
import { BlockUIFactory, BlockUIModel } from '../factory/block-ui.factory';
import { BlockUIAlertInterface, BlockUIAlertTypeEnum } from './interface/block-ui-alert.interface';

@Component({
  selector: 'block-ui-alert',
  templateUrl: './block-ui-alert.component.html',
  styleUrls: ['./block-ui-alert.component.scss']
})
export class BlockUIAlertComponent implements OnInit {

  @Input() alertModel: BlockUIAlertInterface;

  @Output() primaryButtonClick = new EventEmitter();
  @Output() secondaryButtonClick = new EventEmitter();

  blockUIModel: BlockUIModel = BlockUIFactory.getDefault();

  primaryButtonModel: CommonButtonModel;
  secondaryButtonModel: CommonButtonModel;

  ngOnInit(): void {
    if (this.blockUIModel && this.alertModel) {
      // Init block ui model.
      this.blockUIModel.headerMessage.alignment = this.alertModel.headerAlign;
      this.blockUIModel.headerMessage.message = this.alertModel.headerMessage;

      // Init primary btn.
      this.primaryButtonModel = CommonButtonFactory.getObject(
        this.alertModel.primaryButtonName,
        0,
        CommonButtonTypeEnum.COMMON,
        this.getButtonTheme(this.alertModel.type),
        false
      );

      // Init second btn.
      if (this.isShowSecondaryButton()) {
        this.secondaryButtonModel = CommonButtonFactory.getObject(
          this.alertModel.secondaryButtonName,
          1,
          CommonButtonTypeEnum.COMMON,
          CommonButtonThemeEnum.SECONDARY,
          false
        );
      }
      this.blockUIModel.isShowBlockUi = this.alertModel.isShowBlockUI;
    }
  }

  private getButtonTheme(type: BlockUIAlertTypeEnum): CommonButtonThemeEnum {
    if ([BlockUIAlertTypeEnum.OK_DANGER, BlockUIAlertTypeEnum.CONF_DANGER].includes(type)) {
      return CommonButtonThemeEnum.DANGER;
    } else if ([BlockUIAlertTypeEnum.OK_WARNING, BlockUIAlertTypeEnum.CONF_WARNING].includes(type)) {
      return CommonButtonThemeEnum.WARNING;
    }
    return CommonButtonThemeEnum.PRIMARY;
  }

  isShowSecondaryButton(): boolean {
    if (!this.alertModel) { return false; }
    return [
      BlockUIAlertTypeEnum.CONFIRM,
      BlockUIAlertTypeEnum.CONF_WARNING,
      BlockUIAlertTypeEnum.CONF_DANGER].includes(this.alertModel.type);
  }

  onPrimaryButtonClick(button: CommonButtonModel): void {
    this.primaryButtonClick.emit({
      alert: this.alertModel,
      blockUI: this.blockUIModel,
      type: 'primary'
    });
  }

  onSecondaryButtonClick(button: CommonButtonModel): void {
    this.secondaryButtonClick.emit({
      alert: this.alertModel,
      blockUI: this.blockUIModel,
      type: 'secondary'
    });
  }

  onCloseClick(): void {
    this.alertModel.isShowBlockUI = false;
    this.blockUIModel.isShowBlockUi = false;
  }

}
