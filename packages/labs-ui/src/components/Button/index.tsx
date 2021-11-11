import React from 'react';
import {ButtonVariants, GhostButtonWrapper, ButtonWrapper} from './styles';

type BaseProps = {
  disabled?: boolean;
  link?: boolean;
  type?: 'button' | 'submit';
  loading?: boolean;
  children: string | JSX.Element | JSX.Element[];
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

type ButtonProps = BaseProps & {
  variant: ButtonVariants;
};

export function Button(props: ButtonProps) {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
}

export function GhostButton(props: BaseProps) {
  return (
    <GhostButtonWrapper {...props}>
      <span>{props.children}</span>
    </GhostButtonWrapper>
  );
}
