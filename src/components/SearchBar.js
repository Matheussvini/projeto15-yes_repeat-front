import styled from "styled-components";
import imgLogo from "../assets/LogoTopBar.png";

function searchByName(event, value) {
  event.preventDefault();
  console.log(value);
}

export default function SearchBar() {
  return (
    <TopBar>
      <ion-icon name="menu-outline"></ion-icon>
      <img src={imgLogo} alt="imagem logo" />
      <form
        onSubmit={(event) =>
          searchByName(event, event.target.querySelector("input").value)
        }
      >
        <input name="clothing" type={"search"}></input>
      </form>
      <ion-icon name="bag-handle-outline"></ion-icon>
    </TopBar>
  );
}

const TopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 60px;
  width: 100vw;

  padding: 10px;
  box-sizing: border-box;

  background-color: #254a38;

  img {
    height: 100%;
  }

  ion-icon {
    height: 100%;
    color: #ffff;
  }
`;
