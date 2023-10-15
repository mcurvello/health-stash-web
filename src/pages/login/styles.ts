import styled from "styled-components";
import { Link } from 'react-router-dom';

const CreateAccountText = styled.div`
  color: var(--color-white);
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  width: 100%;
  text-align: center;
  margin-top: 20px;
`;

const SignUpText = styled(Link)`
  text-decoration: underline;
  cursor: pointer;
  color: var(--color-white);
`

const ContainerSignUpText = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 16px;
`;

export { CreateAccountText, SignUpText, ContainerSignUpText }