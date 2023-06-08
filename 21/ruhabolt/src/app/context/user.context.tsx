import { SetStateAction, createContext, useState } from 'react';
import { User } from '../model/User';
import React from 'react';

export type UserContextType = {
  currentUser: User | null;
  setCurrentUser: (user: User) => void;
};
interface Props {
  children: React.ReactNode;
}
export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
