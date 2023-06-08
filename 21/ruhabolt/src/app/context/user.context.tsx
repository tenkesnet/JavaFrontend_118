import { createContext, useEffect, useState } from 'react';
import { WebshopUser } from '../model/WebshopUser';
import React from 'react';
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from '../utils/firebase.utils';

export type UserContextType = {
  currentUser: WebshopUser | null;
  setCurrentUser: (user: WebshopUser | null) => void;
};
interface Props {
  children: React.ReactNode;
}
export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<WebshopUser | null>(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((userAuth) => {
      if (userAuth) {
        const user = new WebshopUser(
          userAuth,
          userAuth.displayName,
          userAuth.email
        );
        createUserDocumentFromAuth(user);
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
