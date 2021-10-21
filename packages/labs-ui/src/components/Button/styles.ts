import styled, {css} from 'styled-components';

export type ButtonVariants = 'primary' | 'warning' | 'error' | 'success';

type ButtonProps = {
  variant: ButtonVariants;
  rounded?: boolean;
};

type GhostButtonProps = {
  rounded?: boolean;
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
  color: ${props => props.theme.colors.neutral[500]};
  background: transparent;
  transition: all 0.3s ease;
  &:hover {
    background: ${props => props.theme.colors.neutral[200]};
  }
  &:active {
    background: ${props => props.theme.colors.neutral[300]};
  }

  &:disabled {
    color: ${props => props.theme.colors.neutral[100]};
    background: ${props => props.theme.colors.neutral[300]};
  }
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
      case 'warning':
        return css`
          background-color: ${props => props.theme.colors.warning100};
        `;
      case 'error':
        return css`
          background-color: ${props => props.theme.colors.error100};
        `;
      case 'success':
        return css`
          background-color: ${props => props.theme.colors.success100};
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
            background-color: ${props => props.theme.colors.warning300};
          `;
        case 'error':
          return css`
            background-color: ${props => props.theme.colors.error300};
          `;
        case 'success':
          return css`
            background-color: ${props => props.theme.colors.success300};
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
            background-color: ${props => props.theme.colors.warning200};
          `;
        case 'error':
          return css`
            background-color: ${props => props.theme.colors.error200};
          `;
        case 'success':
          return css`
            background-color: ${props => props.theme.colors.success200};
          `;
        default:
          break;
      }
    }}
  }

  &:focus {
    border: 2px solid ${props => props.theme.colors.blue};
  }
`;
