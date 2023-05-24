// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react';
import styles from './app.module.css';
import AddUser from './components/User/AddUser';
import User from './models/User';
import UsersList from './components/User/UsersList';

export function App() {
  const [usersList, setUsersList] = useState<User[]>([]);

  const addUserHandler = (user: User) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, user];
    });
  };
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
