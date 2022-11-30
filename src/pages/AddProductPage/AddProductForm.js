import axios from "axios";
import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../components/Context/context";
import FormButton from "../../components/FormButton/FormButton";
import { BASE_URL } from "../../constants/urls";

export default function AddProductForm({ disabled, setDisabled, urls }) {
  console.log("urls", urls);
  const [form, setForm] = useState({
    name: "",
    color: "",
    size: "",
    description: "",
    state: "",
    value: 0,
    urls,
  });

  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  function handleForm(e) {
    const { name, value } = e.target;
    if (name === "value") {
      setForm({ ...form, [name]: Number(value).toFixed(0) });
    } else {
      setForm({ ...form, [name]: value });
    }
  }

  function registration(e) {
    e.preventDefault();
    if (!urls.length) return alert("Envie alguma imagem do produto!");
    setDisabled(true);

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    console.log("FORMMMMMMM", { ...form, urls });

    axios
      .post(`${BASE_URL}/admin/produtos`, { ...form, urls }, config)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        alert(res.data.message);
        navigate("/produtos");
      })
      .catch((err) => {
        setDisabled(false);
        console.log(err);
        console.log(err.response.data);
        console.log(err);
        err.response.data ? alert(err.response.data) : alert(err.response);
      });
  }

  return (
    <Form onSubmit={registration} encType="multipart/form-data">
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Space = styled.div`
  height: 15px;
  width: 100%;
`;
