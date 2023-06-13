import { FormInputLabel, Input, Group } from './form-input.styles';

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  label: string;
}

const FormInput = ({ label, ...inputProps }: InputProps) => {
  return (
    <Group>
      <Input {...inputProps} />
      {label && (
        <FormInputLabel shrink={inputProps.value?.toString().length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
