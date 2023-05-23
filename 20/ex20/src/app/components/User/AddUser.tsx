import React, { useState, FormEvent, ChangeEvent, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import './AddUser.css';

const AddUser = () => {
  const userNameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const addUserHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(userNameRef.current?.value, ageRef.current?.value);
  };

  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" ref={userNameRef} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" ref={ageRef} />
        <Button type="submit">Add User</Button>
        <button type="button" className="button">
          Példa
        </button>
      </form>
    </Card>
  );
};

export default AddUser;
