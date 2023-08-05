import styled, { css } from 'styled-components';

interface ContainerProps {
  align?: string;
  top?: string;
  full?: boolean;
}

const Container = styled.div<ContainerProps>`
  margin-top: ${({ top }) => (top ? top : '0' )};
  display: flex;
  justify-content: ${({ align }) => align || 'space-between'};
  
  ${props =>
    props.align === 'center' &&
    css`
      justify-content: center;
    `}
`;

export { Container };