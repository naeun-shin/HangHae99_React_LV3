import { useState, useRef, useEffect } from 'react';

import {
  SelectList,
  SelectButton,
  SelectTitle,
  SelectArrow,
  SelectListItems,
  ListItem,
} from './Select.module';

const SelectMain = () => {
  const options = ['리액트', '자바', '노드', '리액트 네이티브'];

  const [isOpenList1, setIsOpenList1] = useState(false);
  const [isOpenList2, setIsOpenList2] = useState(false);

  const [selectedOption1, setSelectedOption1] = useState(options[0]);
  const [selectedOption2, setSelectedOption2] = useState(options[0]);

  const selectList1Ref = useRef(null);
  const selectList2Ref = useRef(null);

  const toggleDropdownList1 = () => {
    setIsOpenList1(!isOpenList1);
    setIsOpenList2(false);
  };

  const toggleDropdownList2 = () => {
    setIsOpenList2(!isOpenList2);
    setIsOpenList1(false);
  };

  const handleSelectList1 = (option) => {
    setSelectedOption1(option);
    setIsOpenList1(false);
  };

  const handleSelectList2 = (option) => {
    setSelectedOption2(option);
    setIsOpenList2(false);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        selectList1Ref.current &&
        !selectList1Ref.current.contains(event.target) &&
        selectList2Ref.current &&
        !selectList2Ref.current.contains(event.target)
      ) {
        setIsOpenList1(false);
        setIsOpenList2(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <SelectList>
        <SelectButton onClick={toggleDropdownList1}>
          <SelectTitle>{selectedOption1}</SelectTitle>
          <SelectArrow>▼</SelectArrow>
        </SelectButton>
        <SelectListItems ref={selectList1Ref} isOpen={isOpenList1}>
          {options.map((option, index) => (
            <ListItem key={index} onClick={() => handleSelectList1(option)}>
              {option}
            </ListItem>
          ))}
        </SelectListItems>
      </SelectList>
      <SelectList>
        <SelectButton onClick={toggleDropdownList2}>
          <SelectTitle>{selectedOption2}</SelectTitle>
          <SelectArrow>▼</SelectArrow>
        </SelectButton>
        <SelectListItems ref={selectList2Ref} isOpen={isOpenList2}>
          {options.map((option, index) => (
            <ListItem key={index} onClick={() => handleSelectList2(option)}>
              {option}
            </ListItem>
          ))}
        </SelectListItems>
      </SelectList>
    </>
  );
};

export default SelectMain;
