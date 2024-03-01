import styled from 'styled-components';
import theme from '../../styles/theme';

const SelectSectionBody = styled.div`
  display: block;
`;
const SelectBox = styled.div`
  border: 3px solid ${theme.color.lightGrey};
  height: 200px;
  padding-left: 5px;
  margin-top: 50px;
  font-size: ${theme.fontSize.small};
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
  border: 1px solid ${theme.color.lightGrey};
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
  top: ${({ open }) => (open ? '100%' : '0')};
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  z-index: 10;
  display: ${({ open }) => (open ? 'block' : 'none')};
  list-style-type: none;
  margin: 10px 0px;
`;

const ListItem = styled.div`
  margin: 10px;
  padding: 5px 15px;
  cursor: pointer;
  &:hover {
    background-color: ${theme.color.lightGrey};
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
