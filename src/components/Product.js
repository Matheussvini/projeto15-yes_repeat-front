import styled from "styled-components";

export default function Product() {
  return (
    <ProductBox>
      <img></img>
      <p></p>
    </ProductBox>
  );
}

const ProductBox = styled.div`
  height: 205px;
  width: 145px;

  background-color: blue;

  margin: 10px;

  padding: 5px;
  border-radius: 3px;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);

  img {
    width: 129px;
    border-radius: 5px;
  }
`;