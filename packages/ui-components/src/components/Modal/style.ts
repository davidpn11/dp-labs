import styled from "styled-components";

export const Overlay = styled.div`
  background: black;
  position: fixed;
  top: 0;
  left: 0;
  /* width:100%; */
  /* height: 100%; */
  opacity: 0.6;
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  z-index: 998;
`;

export const ModalWrapper = styled.main`
  position: fixed;
  background: white;
  z-index: 999;
  max-width: 80%;
  min-width: 50%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: ${(props) => props.theme.zIndex.z5};
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
`;

export const CloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  img {
    cursor: pointer;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px 0;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    margin-left: 16px;
  }
`;
