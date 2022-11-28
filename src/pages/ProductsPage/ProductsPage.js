import styled from "styled-components";
import ProductsList from "./ProductsList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [aa, setaa] = useState(null);

  console.log("entrei na ProductsList");

  useEffect(() => {
    console.log("useEffect");

    axios
      .get(`${BASE_URL}/produtos`, {})
      .then((res) => {
        console.log("entrei");
        console.log(res.data);
        setaa(res.data);
      })
      .catch((err) => {
        console.log("entrou no catch", err);
      });
  }, []);

  if (!aa) {
    return <div>Carregando...</div>;
  }

  return (
    <PageOfProdutcs>
      <SearchBar />
      <img src={aa?.image} alt="AQUIIIII" />

      <ProductsList />
    </PageOfProdutcs>
  );
}

const PageOfProdutcs = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f3f3f3;

  margin-top: 60px;

  min-height: 100vh;
`;
