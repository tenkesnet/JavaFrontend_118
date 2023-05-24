import React, { ReactNode } from 'react';

import classes from './Button.module.css';

interface Props {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = (props: Props) => {
  return (
    <button
      className={classes.button}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
