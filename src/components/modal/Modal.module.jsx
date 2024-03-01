import styled from 'styled-components';
import theme from '../../styles/theme';

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ModalBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const ModalFirstOpen = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  box-sizing: border-box;
  padding: 24px;
  background-color: rgb(255, 255, 255);
  width: 500px;
  height: 300px;
  z-index: 2;
`;

const ModalSecondOpen = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  box-sizing: border-box;
  padding: 24px;
  background-color: rgb(255, 255, 255);
  width: 300px;
  height: 200px;
  z-index: 2;
`;

const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  inset: 0px;
  position: fixed;
  opacity: 0.8;
  background-color: rgb(221, 221, 221);
  z-index: 1; /* 모달 뒷배경을 selectBox 아래에 표시 */
`;

const ModalCloseButton = styled.div`
  font-size: 16px;
`;

const ModalButtonBox = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: flex;
  gap: 5px;
`;

const ModalSecondButtonBox = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${theme.color.lightGrey};
  cursor: pointer;
`;

export {
  ModalContent,
  ModalBox,
  ModalFirstOpen,
  ModalSecondOpen,
  ModalOverlay,
  ModalButtonBox,
  ModalSecondButtonBox,
  ModalCloseButton,
};
