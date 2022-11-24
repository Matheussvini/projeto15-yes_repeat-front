import { Link } from "react-router-dom";
import styled from "styled-components";
import { GreenContainer } from "../../assets/styles/GlobalStyle";
import Logo from "../../components/Logo/Logo";
import CreateUserForm from "./CreateUserForm";

export default function CreateUserPage() {
  return (
    <GreenContainer>
      <Logo />
      <CreateUserForm />
      <Link to="/login">
        <Text>Já tem uma conta? Faça login!</Text>
      </Link>
    </GreenContainer>
  );
}

const Text = styled.p`
  margin-top: 25px;
  font-size: 14px;
  line-height: 17.47px;
  color: #ffffff;
  text-decoration: underline;
`;
