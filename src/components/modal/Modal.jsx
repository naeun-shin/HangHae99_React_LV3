import React from 'react';
import { ModalBox } from './Modal.module';
import Button from '../buttons/Button';
import {
  HandleModalFalseOverlayClick,
  HandleModalTrueOverlayClick,
} from './ModalHandler';

const Modal = () => {
  return (
    <ModalBox>
      <Button
        type='lightGreenSmall'
        text='open modal'
        onClick={HandleModalFalseOverlayClick}
      />
      <Button
        type='lightPinkLarge'
        text='open modal'
        onClick={HandleModalTrueOverlayClick}
      />
    </ModalBox>
  );
};

export default Modal;
