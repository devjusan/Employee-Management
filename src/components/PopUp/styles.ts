import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 100%;
  white-space: nowrap;
  background-color: #622ee5;
  color: #ccc;
  border-radius: 6px;
  font-size: 15px;
  padding: 15px 10px;
  border-radius: 5px;
  position: absolute;
  z-index: 1000;
  bottom: 125%;
  left: 50%;
  margin-left: 5px;
  margin-bottom: -5px;
  cursor: pointer;

  .popup-cloud {
    background-color: #fff;
    position: absolute;
    left: 50px;
    width: 12px;
    height: 20px;
    transform: rotate(45deg);
    bottom: -0.7rem;
    left: 1.5rem;
    background-color: #622ee5;
  }
`;
