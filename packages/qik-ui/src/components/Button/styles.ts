import {darken} from 'polished';
import styled, {css} from 'styled-components';

export type ButtonVariants = 'primary' | 'warning' | 'error' | 'success';

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
  font-weight: 600;
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
      ? props.theme.colors.neutral[600]
      : props.theme.colors.neutral[100]};
  background: transparent;
  transition: all 0.3s ease;
  margin: 0 4px;
  position: relative;
  font-size: 18px;
  &:hover {
    background: ${props => props.theme.colors.primary[200]};
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

// export const ActiveBar = styled.div`
//   height: 5px;
//   width: 100%;
//   border-radius: 4px;
//   margin-top: 4px;
//   background: ${props => props.theme.colors.secondary[100]};
// `;

export const ButtonWrapper = styled.button<ButtonProps>`
  ${BaseButton}
  color: ${props => props.theme.colors.neutral[100]};
  ${props => {
    switch (props.variant) {
      case 'primary':
        return css`
          background-color: ${props => props.theme.colors.primary[100]};
        `;
      case 'warning':
        return css`
          background-color: ${props => props.theme.colors.yellow};
        `;
      case 'error':
        return css`
          background-color: ${props => props.theme.colors.red};
        `;
      case 'success':
        return css`
          background-color: ${props => props.theme.colors.green};
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
        case 'warning':
          return css`
            background-color: ${props => props.theme.colors.yellow};
          `;
        case 'error':
          return css`
            background-color: ${props => props.theme.colors.red};
          `;
        case 'success':
          return css`
            background-color: ${props => props.theme.colors.green};
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
        case 'warning':
          return css`
            background-color: ${props => props.theme.colors.yellow};
          `;
        case 'error':
          return css`
            background-color: ${props => props.theme.colors.red};
          `;
        case 'success':
          return css`
            background-color: ${props => props.theme.colors.green};
          `;
        default:
          break;
      }
    }}
  }

  &:focus {
    border: 2px solid ${props => props.theme.colors.primary[200]};
  }
`;
