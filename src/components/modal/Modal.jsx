import React, { useState, useRef } from 'react';
import {
  ModalBox,
  ModalFirstOpen,
  ModalSecondOpen,
  ModalOverlay,
  ModalButtonBox,
  ModalCloseButton,
  ModalSecondContent,
  ModalSecondButtonBox,
} from './Modal.module';
import Button from '../buttons/Button';

const Modal = () => {
  const [isModalFirstOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const modalRef = useRef();

  const handleModalFalseOverlayClick = () => {
    setIsFirstModalOpen(true);
  };

  const handleModalTrueOverlayClick = () => {
    setIsSecondModalOpen(true);
  };
  const handleModalClose = () => {
    setIsFirstModalOpen(false);
    setIsSecondModalOpen(false);
  };
  const handleModalCheck = () => {
    setIsFirstModalOpen(false);
  };
  return (
    <ModalBox>
      <Button
        type='lightGreenSmall'
        text='open modal'
        onClick={handleModalFalseOverlayClick}
      />
      {isModalFirstOpen && (
        <>
          <ModalOverlay />
          <ModalFirstOpen ref={modalRef}>
            <div>
              닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
              않아요.
            </div>
            <ModalButtonBox>
              <Button
                type='lightGreenSmall'
                text='닫기'
                onClick={handleModalClose}
              />
              <Button
                type='lightPinkSmall'
                text='확인'
                onClick={handleModalCheck}
              />
            </ModalButtonBox>
          </ModalFirstOpen>
        </>
      )}
      <Button
        type='lightPinkLarge'
        text='open modal'
        onClick={handleModalTrueOverlayClick}
      />
      {isSecondModalOpen && (
        <>
          <ModalOverlay onClick={handleModalClose} />
          <ModalSecondOpen ref={modalRef}>
            <ModalSecondContent>
              닫기 버튼 1개가 있고,
              <br />
              외부 영역을 누르면 모달이 닫혀요.
            </ModalSecondContent>
            <ModalSecondButtonBox>
              <ModalCloseButton onClick={handleModalClose}>X</ModalCloseButton>
            </ModalSecondButtonBox>
          </ModalSecondOpen>
        </>
      )}
    </ModalBox>
  );
};

export default Modal;
