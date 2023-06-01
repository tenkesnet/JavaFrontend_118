import {
  createUserProfileDocument,
  signInWithGooglePopup,
} from '../../utils/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    createUserProfileDocument(response, null);
  };
  return (
    <div>
      <h1>Bejelentkező oldal</h1>
      <button onClick={logGoogleUser}>Bejelentkezés Googlel</button>
    </div>
  );
};

export default SignIn;
