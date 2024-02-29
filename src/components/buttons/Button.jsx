import React from 'react';
import BaseButtonStyle from './Button.module';

const Button = ({ onClick, type, text }) => {
  return (
    <BaseButtonStyle onClick={onClick} $type={type} $text={text}>
      {text}
    </BaseButtonStyle>
  );
};

export default Button;
