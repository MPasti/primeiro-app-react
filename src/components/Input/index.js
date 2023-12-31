import styled from "styled-components";

const Input = styled.input`
  order: 1px solid #fff;
  background: transparent;
  border: 1px solid #fff;
  padding: 20px 140px;
  border-radius: 10px;
  width: 210px;
  color: #fff;
  font-size: 16px;
  margin-bottom: 10px;

  &::placeholder {
    color: #fff;
    font-size: 16px;
  }
`;

export default Input;
