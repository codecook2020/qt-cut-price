import React, { FC } from 'react';
import './index.scss';
type Props = {
  children: React.ReactNode;
};

const ContentContainer: FC<Props> = props => {
  console.log('aa', props.children);
  return <div className="com-content-container">{props.children}</div>;
};

export default ContentContainer;
