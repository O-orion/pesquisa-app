import { Button, Modal } from "native-base";
import React, { useState } from "react";

type Props = {
  titulo: string;
  isVisible: boolean;
  closeModal: () => void;
  children: React.ReactNode;
};

export default function ModalComponent({
  titulo,
  isVisible,
  closeModal,
  children,
}: Props) {
  const [modalVisible, setModalVisible] = useState(isVisible);

  return (
    <Modal isOpen={modalVisible} onClose={closeModal}>
      <Modal.Content maxHeight="90%" maxWidth="90%">
        <Modal.CloseButton />
        <Modal.Header> {titulo}</Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal.Content>
    </Modal>
  );
}
