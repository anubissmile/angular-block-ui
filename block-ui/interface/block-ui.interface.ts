export interface BlockUiInterface {
  isShowBlockUi: boolean;
  isShowCloseButton: boolean;
  headerMessage: BlockUIHeader;
}

export interface BlockUIHeader {
  message: string;
  bgColor: string;
  alignment: BlockUIAlignment;
}

export enum BlockUIAlignment {
  CENTER = 'center',
  LEFT = 'left',
  RIGHT = 'right'
}
