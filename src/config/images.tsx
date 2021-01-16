// 图片资源列表
const images: any = {
  'header-title': 'header-title.png',
  'cut-price-main-button': 'cut-price-main-button.png',
  'footer-qt-logo': 'footer-qt-logo.png',
  'header-bg': 'header-bg.png',
  'header-card': 'header_card.png',
  'initial-action': 'initial-action.gif',
  'vipright-ad-icon': 'vipright-ad-icon.png',
  'vipright-gift-icon': 'vipright-gift-icon.png',
  'vipright-main': 'vipright-main.png	',
  'vipright-money-icon': 'vipright-money-icon.png',
  'viprights-88-icon': 'viprights-88-icon.png',
  'viprights-reading-icon': 'viprights-reading-icon.png',
  'biubiu-bg': 'biubiu-bg.png',
  'main-button': 'main-button.png',
};

// 图片url前缀
const urlPrefix: string = 'https://sss.qingting.fm/growth-active/qt-cpu-price/';

// 又拍云特有的 webp支持
export const getWebPImage = (imageName: string): string => {
  return urlPrefix + images[imageName] + '!/format/webp';
};

// 直接导出图片
export const getImage = (imageName: string): string => {
  return urlPrefix + images[imageName];
};
