import styled from "styled-components";
import logo from "../../assets/images/logo.jpg";

export default function Logo() {
  return <Img src={logo} alt="Logomarca Yes repeat" />;
}

const Img = styled.img`
  width: auto;
  max-width: 60vh;
  margin-top: -50px;
  max-height: 80vh;
`;
