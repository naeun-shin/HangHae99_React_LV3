import React from 'react';
import { SelectSectionBody, SelectBox, SelectContent } from './Select.module';

import SelectMain from './SelectMain';

const SelectSection = () => {
  return (
    <SelectSectionBody>
      <SelectBox>
        <h1>Select</h1>
        <SelectContent>
          <SelectMain />
        </SelectContent>
      </SelectBox>
    </SelectSectionBody>
  );
};

export default SelectSection;
