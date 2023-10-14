import styled from "styled-components";

const CreateAccountText = styled.p`
  color: var(--color-white);
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  width: 100%;
  text-align: center;
  margin-top: 20px;
`;

const SignUpText = styled.a`
  text-decoration: underline;
  cursor: pointer;
`

const ContainerSignUpText = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 16px;
`;

export { CreateAccountText, SignUpText, ContainerSignUpText }