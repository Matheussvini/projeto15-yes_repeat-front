import styled from "styled-components";
import ProductsList from "./ProductsList";

export default function ProductsPage() {
  return (
    <PageOfProdutcs>
      <ProductsList />
    </PageOfProdutcs>
  );
}

const PageOfProdutcs = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f3f3f3;

  min-height: 100vh;
`;
