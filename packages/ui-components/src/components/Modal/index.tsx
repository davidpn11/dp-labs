import React from "react";
import CloseIcon from "../../assets/icons/close.svg";
import { GhostButton } from "../Button";
import { Button } from "../Button";
import {
  Overlay,
  ModalWrapper,
  CloseContainer,
  ModalContent,
  ButtonsWrapper,
} from "./style";
type Props = {
  onClose?: () => void;
  onSubmit?: () => void;
  open: boolean;
  children: React.ReactNode;
};

export function Modal(props: Props) {
  if (!props.open) return null;
  return (
    <>
      <Overlay onClick={props.onClose} />
      <ModalWrapper>
        <CloseContainer>
          <img src={CloseIcon} width={30} onClick={props.onClose} />
        </CloseContainer>
        <ModalContent>{props.children}</ModalContent>
        <ButtonsWrapper>
          <GhostButton onClick={props.onClose}>Cancel</GhostButton>
          <Button variant="primary" onClick={props.onSubmit}>
            Submit
          </Button>
        </ButtonsWrapper>
      </ModalWrapper>
    </>
  );
}
