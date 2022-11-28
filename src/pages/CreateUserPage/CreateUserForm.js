import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FormButton from "../../components/FormButton/FormButton";
import { BASE_URL } from "../../constants/urls";

export default function CreateUserForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    address: {
      cep: "",
      street: "",
      number: 0,
      complement: "",
      district: "",
      city: "",
      uf: "",
    },
  });
  const [disabled, setDisabled] = useState(false);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [warning, setWarning] = useState("");
  const navigate = useNavigate();

  function handleForm(e) {
    const { name, value } = e.target;
    console.log(name, value);
    console.log(form);
    if (name === "name" || name === "email" || name === "password") {
      setForm({ ...form, [name]: value });
    } else {
      setForm({ ...form, address: { ...form.address, [name]: value } });
    }

    if (name === "password") {
      setPassword(value);
      if (value !== password2 && value !== "" && password2 !== "") {
        return setWarning("As senhas não são iguais!");
      }
      setWarning("");
    }
  }

  function confirmPassword(e) {
    const { value } = e.target;
    setPassword2(value);
    if (value !== password && password !== "" && value !== "") {
      return setWarning("As senhas não são iguais!");
    }
    setWarning("");
  }

  function registration(e) {
    e.preventDefault();
    setDisabled(true);
    if (password !== password2 && password !== "" && password2 !== "") {
      return setWarning("As senhas não são iguais!");
    }

    axios
      .post(`${BASE_URL}/sign-up`, form)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        alert(res.data);
        navigate("/login");
      })
      .catch((err) => {
        setDisabled(false);
        console.log(err.response.data);
        err.response.data.details
          ? alert(err.response.data.details[0])
          : alert(err.response.data);
      });
  }

  return (
    <Form onSubmit={registration}>
      <label htmlFor="name">Cadastro:</label>

      <input
        name="name"
        type="text"
        placeholder="nome"
        onChange={handleForm}
        required
        disabled={disabled}
      />
      <input
        name="email"
        type="email"
        placeholder="email"
        onChange={handleForm}
        required
        disabled={disabled}
      />
      <input
        name="password"
        type="password"
        placeholder="senha"
        onChange={handleForm}
        value={password}
        required
        disabled={disabled}
      />
      <input
        name="confirmPassword"
        type="password"
        placeholder="confirme a senha"
        onChange={confirmPassword}
        value={password2}
        required
        disabled={disabled}
      />
      <Text>{warning}</Text>
      <label htmlFor="cep">Endereço:</label>
      <InputBox>
        <Input60
          name="cep"
          type="text"
          placeholder="cep"
          onChange={handleForm}
          required
          disabled={disabled}
        />
        <Input35
          name="number"
          type="number"
          min={1}
          max={9999}
          placeholder="n°"
          onChange={handleForm}
          required
          disabled={disabled}
        />
      </InputBox>

      <input
        name="street"
        type="text"
        placeholder="rua, avenida, travessa..."
        onChange={handleForm}
        required
        disabled={disabled}
      />
      <input
        name="complement"
        type="text"
        placeholder="complemento"
        onChange={handleForm}
        disabled={disabled}
      />
      <input
        name="district"
        type="text"
        placeholder="bairro"
        onChange={handleForm}
        required
        disabled={disabled}
      />
      <InputBox>
        <Input75
          name="city"
          type="text"
          placeholder="cidade"
          onChange={handleForm}
          required
          disabled={disabled}
        />
        <Input20
          name="uf"
          type="text"
          placeholder="uf"
          onChange={handleForm}
          required
          disabled={disabled}
        />
      </InputBox>

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
          "Cadastrar"
        )}
      </FormButton>
    </Form>
  );
}

const Form = styled.form`
  max-width: 90%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    width: 100%;
    text-align: left;
    color: #fff;
    margin-bottom: 5px;
    font-weight: 700;
    font-size: 18px;
    line-height: 17.61px;
  }
`;
const Text = styled.p`
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 15px;
  line-height: 17.61px;
  color: red;
  text-decoration: underline;
`;
const InputBox = styled.div`
  width: 300px;
  display: flex;
  @media (max-width: 300px) {
    width: 100%;
  }
`;
const Input60 = styled.input`
  width: 60%;
  margin-right: 5%;
`;
const Input35 = styled.input`
  width: 35%;
`;
const Input75 = styled.input`
  width: 75%;
  margin-right: 5%;
`;
const Input20 = styled.input`
  width: 20%;
`;
