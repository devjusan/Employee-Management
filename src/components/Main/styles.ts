import styled from "styled-components";

export const Wrapper = styled.main`
  width: 726px;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 3rem 0;
`;

export const Content = styled.aside`
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

export const UserStyle = styled.div`
  width: 295px;
`;
