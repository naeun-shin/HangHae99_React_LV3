import styled from 'styled-components';
import theme from '../../styles/theme';

const SelectSectionBody = styled.div`
  display: block;
`;
const SelectBox = styled.div`
  border: 3px solid ${theme.color.lightGrey};
  height: 200px;

  margin-top: 50px;
`;
const SelectContent = styled.div`
  display: flex;
  gap: 10px;
`;
const SelectList = styled.div`
  position: relative;
`;

const SelectButton = styled.div`
  overflow: hidden;
  position: relative;
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 300px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 28px;
  cursor: pointer;
`;
const SelectTitle = styled.div`
  display: block;
`;

const SelectListItems = styled.div`
  position: absolute;
  top: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 5px 0;
  width: 300px;
  z-index: 10;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.div`
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const SelectArrow = styled.div`
  display: block;
`;

export {
  SelectSectionBody,
  SelectBox,
  SelectContent,
  SelectList,
  SelectButton,
  SelectTitle,
  SelectArrow,
  SelectListItems,
  ListItem,
};
