import styled from "styled-components";

export const Container = styled.div`
  width: 120px;
  max-width: 120px;
  height: 20px;
  max-width: 150px;
  position: relative;
`;

export const Input = styled.input`
  font-size: 15px;
  padding: 10px 15px;
  margin: 10px;
  background: rgba(31, 149, 238, 0.2);
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: #444;
  }

  &:focus {
    border: 1px solid #1670be;
    outline-offset: 0px;
    outline: none;
  }
`;
