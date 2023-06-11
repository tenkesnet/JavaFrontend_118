import { createContext, useEffect, useState } from 'react';
import { WebshopUser } from '../model/WebshopUser';
import React from 'react';
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from '../utils/firebase.utils';

export type UserContextType = {
  currentUser: WebshopUser;
  setCurrentUser: (user: WebshopUser) => void;
};
interface Props {
  children: React.ReactNode;
}

export const UserContext = createContext<Partial<UserContextType>>({});

export const UserProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<WebshopUser>();
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        const webshopUser = new WebshopUser(user, user.displayName, user.email);
        createUserDocumentFromAuth(webshopUser);
        setCurrentUser(webshopUser);
      } else {
        setCurrentUser({});
      }
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
