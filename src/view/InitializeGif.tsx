import React, { FunctionComponent } from 'react';

type CardProps = {
  title: string;
  paragraph: string;
};

export const Card: FunctionComponent<CardProps> = props => {
  return (
    <aside>
      <h2>{props.title}</h2>
      <p>{props.paragraph}</p>
      {props.children}
    </aside>
  );
};
