import './form-input.styles.scss';

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  label: string;
}

const FormInput = ({ label, ...inputProps }: InputProps) => {
  return (
    <div className="group">
      <input className="form-input" {...inputProps} />
      {label && (
        <label
          className={`${
            inputProps.value?.toString().length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
