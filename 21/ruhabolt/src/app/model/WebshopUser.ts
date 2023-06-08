import { User } from 'firebase/auth'

export class WebshopUser {
    userAuth?: User;
    displayName?: string | null;
    email?: string | null;

    constructor(userAuth: User | undefined, displayName: string | null, email: string | null) {
        this.userAuth = userAuth;
        this.displayName = displayName;
        this.email = email;
    }
}