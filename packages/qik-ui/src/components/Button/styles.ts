import {darken, opacify} from 'polished';
import styled, {css} from 'styled-components';
import {transparentizeThemedValue} from '../..';
import {getThemedValues} from '../utils';

export type ButtonVariants = 'primary' | 'secondary';

export type GhostButtonVariants = 'default' | 'inverted';

type ButtonProps = {
  variant: ButtonVariants;
  rounded?: boolean;
};

type GhostButtonProps = {
  rounded?: boolean;
  variant: GhostButtonVariants;
};

const BaseButton = css`
  font-family: 'Arial';
  font-weight: ${[props => props.theme.font.weight.bold]};
  cursor: pointer;
  overflow: hidden;
  letter-spacing: 0.5px;
  outline: none;
  font-size: 16px;
  border: 2px solid transparent;
  border-radius: 9px;
  position: relative;
  user-select: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 12px 24px;
`;

export const GhostButtonWrapper = styled.button<GhostButtonProps>`
  ${BaseButton}
  color: ${props =>
    props.variant === 'default'
      ? getThemedValues('text')
      : getThemedValues('textInverse')};
  background: transparent;
  transition: all 0.3s ease;
  margin: 0 4px;
  position: relative;
  font-size: 18px;
  &:hover {
    background: ${transparentizeThemedValue(0.8, 'accent')};
  }
  &:active {
    background: ${props => props.theme.colors.primary[300]};
  }

  &:disabled {
    color: ${props => props.theme.colors.neutral[100]};
    background: ${props => props.theme.colors.neutral[300]};
  }

  span {
    z-index: 2;
    opacity: 1;
  }
`;

export const ActiveBar = styled.div`
  height: 5px;
  width: 100%;
  border-radius: 4px;
  margin-top: 4px;
  background: ${getThemedValues('accent')};
`;

export const ButtonWrapper = styled.button<ButtonProps>`
  ${BaseButton}
  color: ${props => props.theme.colors.neutral[100]};
  ${props => {
    switch (props.variant) {
      case 'primary':
        return css`
          background-color: ${props => props.theme.colors.primary[100]};
        `;
      case 'secondary':
        return css`
          background-color: ${props => props.theme.colors.neutral[500]};
        `;
      default:
        break;
    }
  }}

  &:active {
    ${props => {
      switch (props.variant) {
        case 'primary':
          return css`
            background-color: ${props => props.theme.colors.primary[300]};
          `;
        case 'secondary':
          return css`
            background-color: ${props =>
              darken(0.2, props.theme.colors.neutral[500])};
          `;
        default:
          break;
      }
    }}
  }

  &:hover {
    ${props => {
      switch (props.variant) {
        case 'primary':
          return css`
            background-color: ${props => props.theme.colors.primary[200]};
          `;
        case 'secondary':
          return css`
            background-color: ${props =>
              darken(0.1, props.theme.colors.neutral[500])};
          `;
        default:
          break;
      }
    }}
  }

  &:focus {
    border: 2px solid ${props => props.theme.colors.neutral[500]};
  }
`;
