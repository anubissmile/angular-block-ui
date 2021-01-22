export interface BlockUiInterface {
  isShowBlockUi: boolean;
  isShowCloseButton: boolean;
  headerMessage: BlockUIHeaderInterface;
}

export interface BlockUIHeaderInterface {
  message: string;
  bgColor: string;
  alignment: BlockUIAlignmentEnum;
}

export enum BlockUIAlignmentEnum {
  CENTER = 'center',
  LEFT = 'left',
  RIGHT = 'right'
}
