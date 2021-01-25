import React from "react";
import styled from "styled-components";
import { Modal } from ".";
import { Button } from "../Button";
import ModalImage from "../../assets/images/modal-img.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const LoginModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Wrapper>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Open modal
      </Button>

      <Modal open={isOpen} onClose={() => setIsOpen(false)} onSubmit={() => {}}>
        <img src={ModalImage} width={250} />
      </Modal>
    </Wrapper>
  );
};

export default {
  title: "Component/Modal",
  component: LoginModal,
};
