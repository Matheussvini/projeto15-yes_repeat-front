import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GreenContainer } from "../../assets/styles/GlobalStyle";
import UserContext from "../../components/Context/context";
import Logo from "../../components/Logo/Logo";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user.length !== 0) {
      navigate("/produtos");
    }
  }, []);

  return (
    <GreenContainer>
      <Logo />
      <LoginForm />
      <Link to="/cadastro">
        <Text>Primeira compra? Cadastre-se!</Text>
      </Link>
      <RetrievePassword>Esqueceu sua senha?</RetrievePassword>
    </GreenContainer>
  );
}

const Text = styled.p`
  font-family: Raleway;
  margin-top: 25px;
  font-weight: 700;
  font-size: 15px;
  line-height: 17.61px;
  color: #ffffff;
  text-decoration: underline;
`;

const RetrievePassword = styled.p`
  margin-top: 25px;
  font-size: 14px;
  line-height: 17.47px;
  color: #ffffff;
  text-decoration: underline;
`;
