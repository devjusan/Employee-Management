import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Input = styled.input`
  font-size: 15px;
  padding: 10px 20px;
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

export const Error = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: flex-start;
  color: #ff354e;
  margin-top: -5px;
  margin-left: 10px;
`;
