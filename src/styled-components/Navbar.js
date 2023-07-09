import styled from "styled-components";

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  padding: 35px;
  padding-top: 50px;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  backdrop-filter: saturate(180%) blur(10px);
  box-shadow: rgba(2, 1, 1, 0.1) 0px 5px 20px -5px;
  color: #fff;
  z-index: 9999;

  @media (max-width: 1270px) {
    width: 85%;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 1000px) {
    width: 85%;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const ListItems = styled.ul`
  margin-left: auto;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  align-items: center;
  justify-content: center;
  gap: 1em;
`;

export const Title = styled.h3`
  margin-left: 40px;
  letter-spacing: -3px;
  font-weight: bold;
  font-size: 35px;
`;
