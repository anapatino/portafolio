import styled from "styled-components";

export const ContainerApp = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
export const ContainerAbout = styled(ContainerApp)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 6rem;
  padding-left: 15%;
`;

export const ContainerPricipal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 59rem;
  height: 28rem;
  border-radius: 40px;
  backdrop-filter: saturate(180%) blur(10px);
  box-shadow: rgba(2, 1, 1, 0.1) 0px 5px 20px -5px;
`;

export const TransparentRight = styled.div`
  position: absolute;
  overflow: hidden;
  padding: 1rem;
  top: 12rem;
  right: 6rem;
  width: 25rem;
  height: 15rem;
  border-radius: 40px;
  backdrop-filter: saturate(180%) blur(10px);
  box-shadow: rgba(2, 1, 1, 0.1) 0px 5px 20px -5px;

  @media (max-width: 1270px) {
    right: 5rem;
  }

  @media (max-width: 1000px) {
    width: 85%;
  }
`;
export const TransparentLeft = styled(TransparentRight)`
  top: 18rem;
  left: 10rem;
  @media (max-width: 1270px) {
    left: 7rem;
  }

  @media (max-width: 1000px) {
    width: 85%;
  }
`;
export const ContainerMedium = styled(ContainerPricipal)`
  top: 47%;
  width: 25rem;
  height: 25rem;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerContent = styled.div`
  margin: 8% 5%;
  display: flex;
  flex-direction: column;
  text-align: right;
  align-items: flex-end;
`;

export const ContainerDash = styled.div`
  height: 100vh;
  margin: 0;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 6% 90%;
`;
