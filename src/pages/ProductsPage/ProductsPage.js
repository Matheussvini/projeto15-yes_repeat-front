import styled from "styled-components";
import ProductsList from "./ProductsList";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function ProductsPage() {
  return (
    <PageOfProdutcs>
      <SearchBar />
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
