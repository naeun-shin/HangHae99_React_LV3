import React, { useState } from 'react';
import Button from '../buttons/Button';
import { InputBlock, InputEachBox, InputForm, InputBox } from './Input.module';

const InputSection = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const handlePriceChange = (e) => {
    const priceNum = Number(e.target.value.replace(/,/g, ''));

    if (!Number.isNaN(priceNum)) {
      setPrice(priceNum.toLocaleString());
    }
  };

  const handleSubmitClick = () => {
    if (name !== '' && price !== '') {
      const data = {
        name,
        price,
      };
      alert(JSON.stringify(data));
      setName('');
      setPrice('');
    } else {
      alert('값이 비어있습니다!');
    }
  };

  return (
    <div>
      <h1>Input</h1>
      <InputForm>
        <InputBox>
          <InputEachBox>
            <label>이름</label>
            <InputBlock
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputEachBox>
          <InputEachBox>
            <label>가격</label>
            <InputBlock
              type='text'
              value={price}
              onChange={handlePriceChange}
            />
          </InputEachBox>
          <InputEachBox>
            <Button
              onClick={handleSubmitClick}
              type='lightGreenSmall'
              text='저장'
            />
          </InputEachBox>
        </InputBox>
      </InputForm>
    </div>
  );
};

export default InputSection;
