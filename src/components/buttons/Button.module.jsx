import styled from 'styled-components';

const BaseButtonStyle = styled.button`
  cursor: pointer;
  border-radius: 8px;
  padding: 1px 6px;
  /* 버튼 컴포넌트에 따른 디자인 변경 */
  ${({ $type, theme }) => {
    switch ($type) {
      case 'lightGreenLarge':
        return `
        border: 3px solid ${theme.color.lightGreen};
        width : ${theme.widthSize.large};
        height : ${theme.heightSize.large};
        font-weight : ${theme.fontWeight.large};
        background-color : ${theme.color.white};
        `;
      case 'lightGreenMedium':
        return `
        border: 3px solid ${theme.color.lightGreen};
        width : ${theme.widthSize.medium};
        height : ${theme.heightSize.medium};
        font-weight : ${theme.fontWeight.medium};
        background-color : ${theme.color.lightGreen};
        `;
      case 'lightGreenSmall':
        return `
        border: 3px solid ${theme.color.lightGreen};
        width : ${theme.widthSize.small};
        height : ${theme.heightSize.small};
        background-color : ${theme.color.lightGreen};
        `;
      case 'lightPinkLarge':
        return `
        border: 3px solid ${theme.color.lightPink};
        width : ${theme.widthSize.large};
        height : ${theme.heightSize.large};
        font-weight : ${theme.fontWeight.large};
        background-color : ${theme.color.white};
        color : ${theme.color.red};
        `;
      case 'lightPinkMedium':
        return `
        border: 3px solid ${theme.color.lightPink};
        width : ${theme.widthSize.medium};
        height : ${theme.heightSize.medium};
        font-weight : ${theme.fontWeight.medium};
        background-color : ${theme.color.lightPink};
        color : ${theme.color.red};
        `;
      case 'lightPinkSmall':
        return `
        border: 3px solid ${theme.color.lightPink};
        width : ${theme.widthSize.small};
        height : ${theme.heightSize.small};
        font-weight : ${theme.fontWeight.small};
        background-color : ${theme.color.lightPink};
        color : ${theme.color.red};
        `;

      default:
        return '';
    }
  }}
`;

export default BaseButtonStyle;
