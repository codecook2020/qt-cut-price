import * as React from 'react';
import { getWebPImage } from '../../config/images';

import './index.scss';

const HeaderInApp: React.FC<{
  titleImgUrl?: string;
  MainImgUrl?: string;
}> = ({ titleImgUrl, MainImgUrl }) => {
  titleImgUrl = titleImgUrl ? titleImgUrl : getWebPImage('header-title');
  MainImgUrl = MainImgUrl ? MainImgUrl : getWebPImage('header-card');
  console.log({ titleImgUrl });
  return (
    <div>
      <div className="InitialDesc"> 使用屠龙宝刀砍一刀 </div>
      <span className="InitialSpan">
        有机会
        <span style={{ color: 'red' }}>0元得会员！</span>
      </span>
      <div>
        <img src={getWebPImage('main-button')} className="ImgButton" />
      </div>
    </div>
  );
};
export default HeaderInApp;
