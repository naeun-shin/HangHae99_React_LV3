import React from 'react';
import Button from '../buttons/Button';
import { InputBlock, InputEachBox, InputForm, InputBox } from './Input.module';

const InputSection = () => {
  const handleSubmitClick = (name, price) => {
    console.log();
  };

  return (
    <div>
      <h1>Input</h1>
      <InputForm>
        <InputBox>
          <InputEachBox>
            <label>이름</label> <InputBlock type='text' />
          </InputEachBox>
          <InputEachBox>
            <label>가격</label> <InputBlock type='text' />
          </InputEachBox>
        </InputBox>
        <Button
          onClick={() => handleSubmitClick()}
          type='lightGreenSmall'
          text='저장'
        />
      </InputForm>
    </div>
  );
};

export default InputSection;
