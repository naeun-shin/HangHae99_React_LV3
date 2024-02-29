import React from 'react';
import Modal from './Modal';
import { ModalContent } from './Modal.module';

const ModalSection = () => {
  return (
    <ModalContent>
      <h1>Modal</h1>
      <Modal />
    </ModalContent>
  );
};

export default ModalSection;
