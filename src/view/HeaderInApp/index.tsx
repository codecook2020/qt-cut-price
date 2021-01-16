import React, { FunctionComponent } from 'react';

import { getWebPImage } from '../../config/images';
import ContentContainer from '../../components/ContentContainer';
import InitialInfo from './InitialInfo';
import './index.scss';

// import styled from 'styled-components';

// const ButtonText = styled.div`
//   font-size: 17px;
//   color: ${props => props.theme.primaryTitleColor};
// `;

const HeaderInApp: FunctionComponent<{
  titleImgUrl?: string;
  MainImgUrl?: string;
}> = ({ titleImgUrl, MainImgUrl }) => {
  titleImgUrl = titleImgUrl ? titleImgUrl : getWebPImage('header-title');
  MainImgUrl = MainImgUrl ? MainImgUrl : getWebPImage('header-card');
  console.log({ titleImgUrl });
  return (
    <div className="header-view">
      <img className="title-image" alt="" src={titleImgUrl} />
      <img className="title-image" alt="" src={MainImgUrl} />

      <div style={{ marginTop: '-0.3rem' }}>
        <ContentContainer>
          {/* <ButtonText>2222 </ButtonText> */}
          <InitialInfo />
        </ContentContainer>
      </div>
    </div>
  );
};
export default HeaderInApp;
