import React from 'react';
import Button from './Button';
import { handleGreenLargeButton, handlePinkLargeButton } from './ButtonHandler';
import { Content, Box } from '../../styles/commonStyles';

const ButtonSection = () => {
  return (
    <Content>
      <h1>Button</h1>
      <Box>
        <Button
          type='lightGreenLarge'
          text='Large Primary Button'
          onClick={handleGreenLargeButton}
        />
        <Button type='lightGreenMedium' text='Medium' />
        <Button type='lightGreenSmall' text='Small' />
      </Box>
      <Box>
        <Button
          type='lightPinkLarge'
          text='Large Negative Button'
          onClick={handlePinkLargeButton}
        />
        <Button type='lightPinkMedium' text='Medium' />
        <Button type='lightPinkSmall' text='Small' />
      </Box>
    </Content>
  );
};

export default ButtonSection;
