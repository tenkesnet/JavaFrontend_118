import React, { ReactNode } from 'react';

import classes from './Card.module.css';

type Props = {
    children: ReactNode,
    className: string
}

const Card = (props:Props) => {
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default Card;
