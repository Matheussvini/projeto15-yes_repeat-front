import styled from "styled-components";
import logo from "../../assets/images/logo.jpg";

export default function Logo() {
  return <Img src={logo} alt="Logomarca Yes repeat" />;
}

const Img = styled.img`
  width: 300px;
  max-width: 60vh;
  margin-top: -50px;
  margin-bottom: -50px;
  max-height: 80vh;
  @media (max-width: 300px) {
    width: 100%;
  }
`;
