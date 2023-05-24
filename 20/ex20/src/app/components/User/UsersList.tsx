import React from 'react';

import Card from '../UI/Card';
import classes from './UsersList.module.css';
import User from '../../models/User';

type Props = {
  users: User[];
};
const UsersList = (props: Props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
