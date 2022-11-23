import styled from "styled-components";
import Product from "./Product";

export default function ProductsList() {
  const store= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <List>
      {store.map((product) => (
        <Product />
      ))}
    </List>
  );
}

const List = styled.div`
  width: 90%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  background-color: red;

  
`;
