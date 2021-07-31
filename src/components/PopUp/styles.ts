import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: #622ee5;
  color: #ccc;
  text-align: center;
  border-radius: 6px;
  font-size: 15px;
  padding: 15px 10px;
  border-radius: 5px;
  position: absolute;
  z-index: 1000;
  bottom: 125%;
  left: 50%;
  margin-left: 5px;
  margin-bottom: 0px;

  .popup-cloud {
    background-color: #fff;
    position: absolute;
    left: 50px;
    width: 12px;
    height: 20px;
    transform: rotate(45deg);
    bottom: -0.75rem;
    left: 1.5rem;
    background-color: #622ee5;
  }
`;
