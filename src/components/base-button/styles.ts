import styled from 'styled-components';

const Button = styled.button`
  border: none;
  padding: 0;
  margin: 16px 0;
  font: inherit;
  cursor: pointer;
  outline: none;
  background: var(--color-white);
  color: var(--color-blue);
  max-width: 480px;
  width: 100%;
  font-size: 18px;
  border-radius: 37px;
  padding: 10px 20px;
  font-family: 'Roboto', sans-serif;
`;

const Text = styled.span`
  margin-left: 8px;
`;

export { Button, Text };
