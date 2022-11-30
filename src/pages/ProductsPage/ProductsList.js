import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { BASE_URL } from "../../constants/urls";
import Product from "./Product";

export default function ProductsList() {
  const store = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [aa, setaa] = useState(null)

  console.log("entrei na ProductsList")

  useEffect(() =>{
    console.log("useEffect")

    axios
    .get(`${BASE_URL}/produtos`, {})
    .then((res) => {
      console.log("entrei")
      console.log(res.data)
      setaa(res.data)
    })
    .catch((err) => {
      console.log("entrou no catch", err)
    })


  },[])



  return (
    <List>
      <img src={aa?.image} alt="AQUIIIII" />
      {store.map((product,idx) => (
        <Product key={idx}  />
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
