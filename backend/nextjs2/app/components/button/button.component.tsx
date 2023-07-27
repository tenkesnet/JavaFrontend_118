import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from './button.styles';

export enum BUTTON_TYPE_CLASSES {
  base = 'base',
  google = 'google-sign-in',
  inverted = 'inverted',
}
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children?: React.ReactNode;
  buttonType?: BUTTON_TYPE_CLASSES;
}

const Button: React.FC<ButtonProps> = ({
  children,
  buttonType,
  ...otherOptions
}) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherOptions}>{children}</CustomButton>;
};

export default Button;
