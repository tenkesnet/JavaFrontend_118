import { createContext, useEffect, useState } from 'react';
import { WebshopUser } from '../model/WebshopUser';
import React from 'react';
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from '../utils/firebase.utils';

export type UserContextType = {
  currentUser: WebshopUser | null;
  setCurrentUser: (user: WebshopUser) => void;
};
interface Props {
  children: React.ReactNode;
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<WebshopUser | null>(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        const webshopUser = new WebshopUser(user, user.displayName, user.email);
        createUserDocumentFromAuth(webshopUser);
        setCurrentUser(webshopUser);
      } else {
        setCurrentUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
