import React from 'react';
import ButtonSection from './buttons/ButtonSection';
import InputSection from './input/InputSection';
import SelectSection from './select/SelectSection';
import ModalSection from './modal/ModalSection';

const Section = () => {
  return (
    <>
      <ButtonSection />
      <InputSection />
      <ModalSection />
      <SelectSection />
    </>
  );
};

export default Section;
