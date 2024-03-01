import React from 'react';
import { SelectSectionBody, SelectBox, SelectContent } from './Select.module';

import Select from './Select';

const SelectSection = () => {
  return (
    <SelectSectionBody>
      <SelectBox>
        <h1>Select</h1>
        <SelectContent>
          <Select />
        </SelectContent>
      </SelectBox>
    </SelectSectionBody>
  );
};

export default SelectSection;
