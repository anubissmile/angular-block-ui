import { BlockUIAlignmentEnum } from '../../interface/block-ui.interface';

export interface BlockUIAlertInterface {
  headerMessage: string;
  headerAlign: BlockUIAlignmentEnum;
  messageContent: string;
  type: BlockUIAlertTypeEnum;
  primaryButtonName: string;
  secondaryButtonName?: string;
  isShowBlockUI: boolean;
}

export enum BlockUIAlertTypeEnum {
  OK = 'ok',
  OK_WARNING = 'ok_warning',
  OK_DANGER = 'ok_danger',
  CONFIRM = 'confirm',
  CONF_WARNING = 'conf_warning',
  CONF_DANGER = 'conf_danger'
}
