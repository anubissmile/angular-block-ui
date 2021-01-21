import { BlockUiInterface } from '../interface/block-ui.interface';

export class BlockUIModel implements BlockUiInterface {
  isShowBlockUi: boolean;
  isShowCloseButton: boolean;
  headerMessage: string;
  headerBgColor: string;
}

export class BlockUIFactory {

  public static get(): BlockUIModel {
    return new BlockUIModel();
  }

  public static getDefault(): BlockUIModel {
    return {
      isShowBlockUi: false,
      headerBgColor: 'white',
      headerMessage: null,
      isShowCloseButton: true
    } as BlockUIModel;
  }

  public static parse(val: BlockUiInterface): BlockUIModel {
    return {
      isShowBlockUi: val.isShowBlockUi,
      headerBgColor: val.headerBgColor,
      headerMessage: val.headerMessage,
      isShowCloseButton: val.isShowCloseButton
    } as BlockUIModel;
  }
}
