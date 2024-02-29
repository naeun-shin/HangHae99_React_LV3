import React from 'react';
import Button from './Button';
import { handleGreenLargeButton, handlePinkLargeButton } from './ButtonHandler';
import { ButtonContent, ButtonBox } from './Button.module';

const ButtonSection = () => {
  return (
    <ButtonContent>
      <h1>Button</h1>
      <ButtonBox>
        <Button
          type='lightGreenLarge'
          text='Large Primary Button'
          onClick={handleGreenLargeButton}
        />
        <Button type='lightGreenMedium' text='Medium' />
        <Button type='lightGreenSmall' text='Small' />
      </ButtonBox>
      <ButtonBox>
        <Button
          type='lightPinkLarge'
          text='Large Negative Button'
          onClick={handlePinkLargeButton}
        />
        <Button type='lightPinkMedium' text='Medium' />
        <Button type='lightPinkSmall' text='Small' />
      </ButtonBox>
    </ButtonContent>
  );
};

export default ButtonSection;
