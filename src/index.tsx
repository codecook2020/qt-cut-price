import * as React from 'react';
import HeaderInApp from './view/HeaderInApp';
// import { ThemeProvider } from 'styled-components';
// import { lightTheme } from './theme';

import './index.scss';
// Delete me
type Props = {
  children: React.ReactNode;
};

export const Thing = (props: Props) => {
  let params = new URLSearchParams(window.location.search);
  let a: string | null = params.get('aaa');
  console.log(a, props);
  return (
    // <ThemeProvider theme={lightTheme}>
    <HeaderInApp />
    // { /* </ThemeProvider> */ }
    // titleImgUrl={`https://sss.qingting.fm/growth-active/qt-cpu-price/header_card.png!/format/webp`}
  );
};
