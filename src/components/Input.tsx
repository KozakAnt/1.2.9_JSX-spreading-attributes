import { type ComponentPropsWithoutRef } from 'react';

type InputProps = {
  id: string;
  labelText?: string;
} & ComponentPropsWithoutRef<'input'>;

export const Input = ({ id, labelText, className, ...rest }: InputProps) => {
  return (
    <div className={className}>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input id={id} {...rest} />
    </div>
  );
};
