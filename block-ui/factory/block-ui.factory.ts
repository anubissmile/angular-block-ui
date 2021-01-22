import { BlockUIAlignment, BlockUIHeader, BlockUiInterface } from '../interface/block-ui.interface';

export class BlockUIModel implements BlockUiInterface {
  headerMessage: BlockUIHeader;
  isShowBlockUi: boolean;
  isShowCloseButton: boolean;
}

export class BlockUIFactory {

  public static get(): BlockUIModel {
    return new BlockUIModel();
  }

  public static getDefault(): BlockUIModel {
    return {
      headerMessage: {
        bgColor: 'white',
        message: '',
        alignment: BlockUIAlignment.CENTER
      },
      isShowBlockUi: false,
      isShowCloseButton: true
    } as BlockUIModel;
  }

  public static parse(val: BlockUiInterface): BlockUIModel {
    return {
      headerMessage: val.headerMessage,
      isShowBlockUi: val.isShowBlockUi,
      isShowCloseButton: val.isShowCloseButton
    } as BlockUIModel;
  }
}
