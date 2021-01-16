/* eslint-disable prettier/prettier */
import React from 'react';
// import styled from 'styled-components';

// import qt from "@qt-base/jssdk";


import { Thing } from '../../dist/';
import '../../dist/lib-cut-price.cjs.development.css';

// import { Thing } from 'lib-cut-price/dist/lib-cut-price.esm';


const CupPrice =  ({nodeId='xx',nodeType = 'zz'}) => { 
  // const [isHistory, setIsHistory] = useState(false);
  // const [headerHeight, setHeaderHeight] = useState(false);
  console.log({ nodeId, nodeType });

  return (
    <div>
      <Thing />
    </div>
  )
};


export default () => {
  return <CupPrice> </CupPrice>
}
