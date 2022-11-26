import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GreenContainer } from "../../assets/styles/GlobalStyle";
import FormButton from "../../components/FormButton/FormButton";
import Logo from "../../components/Logo/Logo";
import AddProductForm from "./AddProductForm";
import { ThreeDots } from "react-loader-spinner";

export default function AddProductPage() {
  const [disabled, setDisabled] = useState(false);
  return (
    <GreenContainer>
      <Logo />
      <AddProductForm disabled={disabled} setDisabled={setDisabled} />
      <Link to={"/produtos"}>
        <FormButton disabled={disabled}>
          {disabled ? (
            <ThreeDots
              height="45px"
              radius="9"
              color="#FFF"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            "Cancelar"
          )}
        </FormButton>
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
