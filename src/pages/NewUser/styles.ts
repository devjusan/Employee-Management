import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 2rem 0;
  gap: 3rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f5f9ff;
  border-top-right-radius: 56.7663px;
  border-bottom-right-radius: 56.7663px;
  img {
    width: 100%;
    height: 250px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 95%;
`;

export const Title = styled.h1`
  text-align: center;
  font-style: normal;
  font-weight: 600;
  width: 100%;
  font-size: 49.9543px;
  line-height: 75px;
  letter-spacing: -1.13533px;
  color: #11142d;
`;
