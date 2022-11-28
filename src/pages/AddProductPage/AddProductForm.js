import axios from "axios";
import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../components/Context/context";
import FormButton from "../../components/FormButton/FormButton";
import { BASE_URL } from "../../constants/urls";

export default function AddProductForm({ disabled, setDisabled }) {
  const [form, setForm] = useState({
    name: "",
    color: "",
    size: "",
    description: "",
    state: "",
    value: 0,
    image: [],
  });
  const { user } = useContext(UserContext);
  const [warning, setWarning] = useState("");
  const navigate = useNavigate();

  function handleForm(e) {
    const { name, value } = e.target;
    if (name === "value") {
      setForm({ ...form, [name]: Number(value).toFixed(0) });
    }  else{
      setForm({ ...form, [name]: value });
    }
  }

  function registration(e) {
    e.preventDefault();
    setDisabled(true);

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    console.log("FORMMMMMMM",form);

    axios
      .post(`${BASE_URL}/admin/produtos`, form, config)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        alert(res.data.message);
        navigate("/produtos");
      })
      .catch((err) => {
        setDisabled(false);
        console.log(err)
        console.log(err.response.data);
        console.log(err)
        err.response.data
          ? alert(err.response.data)
          : alert(err.response);
      });
  }

  return (
    <Form onSubmit={registration} encType="multipart/form-data" >
      <label htmlFor="name">Cadastro de produto:</label>
      <Space />
      <Div>
        <FilesLabel htmlFor="image">Selecione as fotos:</FilesLabel>
        <FilesInput
          name="image"
          id="image"
          type="file"
          multiple
          accept=".jpg,.png"
          onChange={handleForm}
          disabled={disabled}
          required
        />
      </Div>
      <Space />
      <input
        name="name"
        type="text"
        placeholder="nome da peça"
        onChange={handleForm}
        disabled={disabled}
        required
      />
      <input
        name="color"
        type="text"
        placeholder="cor"
        onChange={handleForm}
        disabled={disabled}
        required
      />
      <input
        name="size"
        type="text"
        placeholder="tamanho"
        onChange={handleForm}
        disabled={disabled}
        required
      />
      <input
        name="description"
        type="text"
        placeholder="descrição"
        onChange={handleForm}
        disabled={disabled}
        required
      />
      <input
        name="state"
        type="text"
        placeholder="estado de conservação"
        onChange={handleForm}
        disabled={disabled}
        required
      />

      <input
        name="value"
        type="number"
        min={0}
        placeholder="valor"
        step="1.0"
        onChange={handleForm}
        disabled={disabled}
        required
      />

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
      <Space />
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
const Space = styled.div`
  height: 15px;
  width: 100%;
`;
const FilesLabel = styled.label`
  background-color: #f19620;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  width: 300px;
  height: 45px;
  border-radius: 5px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 20px;
  padding: 0 11px;
`;
const FilesInput = styled.input`
  min-width: 485px;
  position: absolute;
  left: -182px;
  margin-bottom: 15px;
  padding: 8px;
  box-sizing: border-box;
  word-wrap: break-word;
`;
const Div = styled.div`
  position: relative;
  height: 105px;
  width: 300px;
  overflow: hidden;
`;
