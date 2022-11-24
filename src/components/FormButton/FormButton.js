import styled from "styled-components";

export default function FormButton({ children, disabled }) {
  return <Button disabled={disabled}>{children}</Button>;
}

const Button = styled.button`
  width: 300px;
  height: 45px;
  border-radius: 5px;
  border: none;
  background-color: #f19620;
  color: #ffffff;
  text-align: center;
  font-size: 21px;
  line-height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 300px) {
    width: 100%;
    overflow: hidden;
  }
`;
