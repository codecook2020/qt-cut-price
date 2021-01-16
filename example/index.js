import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
// import { Thing } from '../.';
// import * as CupPrice from './bms/CupPrice';
// import * as BmsContainer from './bms/BmsContainer';
import BmsContainer from './bms/BmsContainer';
import CupPrice from './bms/CupPrice';

const App = () => {
  return (
    <div>
      <BmsContainer>
        <CupPrice />
      </BmsContainer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
