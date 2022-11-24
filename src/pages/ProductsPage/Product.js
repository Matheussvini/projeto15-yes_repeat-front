import { useNavigate } from "react-router-dom";
import styled from "styled-components";




export default function Product() {
  const navigate = useNavigate()

  function selectItem(itemId){
    navigate(`/produto/:${itemId}`)
  }
  return (
    <ProductBox onClick={()=>selectItem(5)} >
      <img src="" alt="imagem"></img>
      <p></p>
    </ProductBox>
  );
}

const ProductBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 205px;
  width: 36%;

  background-color: #ffff;

  margin: 10px;

  padding: 5px;
  border-radius: 3px;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);

  img {
    width: 129px;
    border-radius: 5px;
  }

  p {
    font-family: Roboto;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0em;
  }
`;
