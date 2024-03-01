import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  ModalBox,
  ModalFirstOpen,
  ModalSecondOpen,
  ModalOverlay,
  ModalButtonBox,
  ModalCloseButton,
  ModalSecondButtonBox,
} from './Modal.module';
import Button from '../buttons/Button';

const Modal = () => {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const handleFirstModalOpen = () => {
    setIsFirstModalOpen(true);
  };

  const handleSecondModalOpen = () => {
    setIsSecondModalOpen(true);
  };

  const handleModalClose = () => {
    setIsFirstModalOpen(false);
    setIsSecondModalOpen(false);
  };

  const firstModalContent = (
    <>
      <ModalFirstOpen>
        <div>
          닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
        </div>
        <ModalButtonBox>
          <Button
            type='lightGreenSmall'
            text='닫기'
            onClick={handleModalClose}
          />
          <Button type='lightPinkSmall' text='확인' />
        </ModalButtonBox>
      </ModalFirstOpen>
    </>
  );

  const secondModalContent = (
    <>
      <ModalSecondOpen>
        <div>
          닫기 버튼 1개가 있고,
          <br />
          외부 영역을 누르면 모달이 닫혀요.
        </div>
        <ModalSecondButtonBox>
          <ModalCloseButton onClick={handleModalClose}>X</ModalCloseButton>
        </ModalSecondButtonBox>
      </ModalSecondOpen>
    </>
  );

  return (
    <ModalBox>
      <Button
        type='lightGreenSmall'
        text='open modal'
        onClick={handleFirstModalOpen}
      />
      <Button
        type='lightPinkLarge'
        text='open modal'
        onClick={handleSecondModalOpen}
      />

      {isFirstModalOpen &&
        ReactDOM.createPortal(
          <ModalBox>
            <ModalOverlay />
            <ModalFirstOpen>{firstModalContent}</ModalFirstOpen>
          </ModalBox>,
          document.body
        )}

      {isSecondModalOpen &&
        ReactDOM.createPortal(
          <ModalBox>
            <ModalOverlay onClick={handleModalClose} />
            <ModalSecondOpen>{secondModalContent}</ModalSecondOpen>
          </ModalBox>,
          document.body
        )}
    </ModalBox>
  );
};

export default Modal;
