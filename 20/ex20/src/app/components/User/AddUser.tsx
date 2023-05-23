import React, { useState, FormEvent, ChangeEvent } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';


const AddUser = () => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(enteredUsername, enteredAge);
  };

  const usernameChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameChangeHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
