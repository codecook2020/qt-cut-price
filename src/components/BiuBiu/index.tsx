import React, { FC } from 'react';
import './index.scss';

type Props = {
  text: string;
};

const BiuBiu: FC<Props> = props => {
  return <div className="biubiu">{props.text}</div>;
};

export default BiuBiu;
