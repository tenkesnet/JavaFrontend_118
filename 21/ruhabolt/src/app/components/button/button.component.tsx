import './button.styles.scss';

export enum BUTTON_TYPE_CLASSES {
  google = 'google-sign-in',
  inverted = 'inverted',
}

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children?: React.ReactNode;
  buttonType?: BUTTON_TYPE_CLASSES;
}

const Button: React.FC<ButtonProps> = ({ children, buttonType, ...rest }) => {
  return (
    <button className={`button-container ${buttonType}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
