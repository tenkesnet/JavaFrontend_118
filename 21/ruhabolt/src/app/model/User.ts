import { UserCredential } from 'firebase/auth'

export class User {
    userAuth?: UserCredential;
    displayName?: string | null;
    email?: string | null;

    constructor(userAuth: UserCredential | undefined, displayName: string | null, email: string | null) {
        this.userAuth = userAuth;
        this.displayName = displayName;
        this.email = email;
    }
}