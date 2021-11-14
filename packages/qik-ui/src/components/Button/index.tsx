import React from 'react';
import {
  ButtonVariants,
  GhostButtonVariants,
  GhostButtonWrapper,
  ButtonWrapper,
  ActiveBar,
} from './styles';

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

type GhostButtomProps = BaseProps & {
  variant?: GhostButtonVariants;
  active?: boolean;
};

export function GhostButton({
  variant = 'default',
  children,
  active,
  ...props
}: GhostButtomProps) {
  return (
    <GhostButtonWrapper variant={variant} {...props}>
      <span>{children}</span>
      {active && <ActiveBar />}
    </GhostButtonWrapper>
  );
}
