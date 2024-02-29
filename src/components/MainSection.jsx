import React from 'react';
import ButtonSection from './buttons/ButtonSection';
import InputSection from './input/InputSection';
import SelectSection from './select/SelectSection';
import ModalSection from './modal/ModalSection';
import Main from './MainSection.module';

const MainSection = () => {
  return (
    <>
      <Main>
        <ButtonSection />
        <InputSection />
        <ModalSection />
        <SelectSection />
      </Main>
    </>
  );
};

export default MainSection;
