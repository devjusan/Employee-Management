import styled from "styled-components";

export const Wrapper = styled.nav`
  width: 135.1px;
  height: 100%;
  background: #1f95ee;
  border-bottom-left-radius: 56.7663px;
  border-top-left-radius: 56.7663px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 5rem 0;
  gap: 2rem;
  align-items: center;
`;

export const SVG = styled.svg`
  cursor: pointer;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.75rem;
  li {
    text-decoration: none;
    list-style: none;
  }
  img {
    cursor: pointer;
  }
`;
