import styled from 'styled-components';

export const DemoWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-areas:
    'summary summary components components'
    'summary summary components components'
    'form form components components'
    'form form components components';
  grid-row-gap: 12px;
  grid-column-gap: 24px;
`;

export const ColorSummaryWrapper = styled.div`
  grid-area: summary;
  display: flex;
  flex-direction: column;
  > span {
    display: flex;
    flex-direction: row;
  }
`;
export const ThemeGenFormWrapper = styled.div`
  grid-area: form;
`;

export const ComponentsWrapper = styled.div`
  grid-area: components;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ColorCircle = styled.div<{color: string}>`
  width: 30px;
  height: 30px;
  border-radius: 4px;
  background: ${props => props.color};
  margin: 2px 4px;
`;
