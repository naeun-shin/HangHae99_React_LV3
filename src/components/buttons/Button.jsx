import React from 'react';
import { BaseButtonStyle, BaseButtonSpan } from './Button.module';
import { IoIosArrowForward } from 'react-icons/io';
import { LuBellDot } from 'react-icons/lu';

const Button = ({ onClick, type, text }) => {
  let icon = null;
  switch (type) {
    case 'lightGreenLarge':
      icon = <IoIosArrowForward />;
      break;
    case 'lightPinkLarge':
      icon = <LuBellDot />;
      break;
    default:
      break;
  }
  return (
    <BaseButtonStyle onClick={onClick} $type={type} $text={text}>
      <BaseButtonSpan>
        {text} {icon}
      </BaseButtonSpan>
    </BaseButtonStyle>
  );
};

export default Button;
