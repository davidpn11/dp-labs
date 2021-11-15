import React from 'react';
import {FieldWrapper, FieldLabel, FieldInput} from './styles';
type Props = {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (v: string) => void;
};

export function TextField(props: Props) {
  return (
    <FieldWrapper>
      <FieldLabel>{props.label}</FieldLabel>
      <FieldInput
        type="text"
        value={props.value}
        onChange={event => props.onChange(event.target.value)}
        placeholder={props.placeholder}
      />
    </FieldWrapper>
  );
}
