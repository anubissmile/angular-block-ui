import { BlockUIAlignmentEnum } from '../../interface/block-ui.interface';
import { BlockUIAlertInterface, BlockUIAlertTypeEnum } from '../interface/block-ui-alert.interface';

export class BlockUIAlertModel implements BlockUIAlertInterface {
  isShowBlockUI: boolean;
  headerMessage: string;
  headerAlign: BlockUIAlignmentEnum;
  messageContent: string;
  type: BlockUIAlertTypeEnum;
  primaryButtonName: string;
  secondaryButtonName?: string;
}

export class BlockUIAlertFactory {

  public static getOK(): BlockUIAlertModel {
    const ok: BlockUIAlertModel = new BlockUIAlertModel();
    ok.headerMessage = 'THIS IS HEADER MESSAGE';
    ok.headerAlign = BlockUIAlignmentEnum.LEFT;
    ok.messageContent = 'THIS IS CONTENT';
    ok.type = BlockUIAlertTypeEnum.OK;
    ok.primaryButtonName = 'OK';
    ok.isShowBlockUI = false;
    return ok;
  }

  public static getOKWarning(): BlockUIAlertModel {
    const ok = this.getOK();
    ok.type = BlockUIAlertTypeEnum.OK_WARNING;
    return ok;
  }

  public static getOKDanger(): BlockUIAlertModel {
    const ok = this.getOK();
    ok.type = BlockUIAlertTypeEnum.OK_DANGER;
    return ok;
  }

  public static getConfirm(): BlockUIAlertModel {
    const confirm: BlockUIAlertModel = new BlockUIAlertModel();
    confirm.headerMessage = 'THIS IS HEADER MESSAGE';
    confirm.headerAlign = BlockUIAlignmentEnum.LEFT;
    confirm.messageContent = 'THIS IS CONTENT';
    confirm.type = BlockUIAlertTypeEnum.CONFIRM;
    confirm.primaryButtonName = 'OK';
    confirm.secondaryButtonName = 'Cancel';
    confirm.isShowBlockUI = false;
    return confirm;
  }

  public static getConfirmWarning(): BlockUIAlertModel {
    const confirm = this.getConfirm();
    confirm.type = BlockUIAlertTypeEnum.CONF_WARNING;
    return confirm;
  }

  public static getConfirmDanger(): BlockUIAlertModel {
    const confirm = this.getConfirm();
    confirm.type = BlockUIAlertTypeEnum.CONF_DANGER;
    return confirm;
  }
}
