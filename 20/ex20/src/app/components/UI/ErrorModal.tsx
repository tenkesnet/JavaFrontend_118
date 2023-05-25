import React from 'react';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';
import { ErrorMessage } from 'src/app/models/ErrorMessage';

type Props = {
  error: ErrorMessage;
  onConfirm: () => void;
};

const ErrorModal = (props: Props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.error.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.error.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
