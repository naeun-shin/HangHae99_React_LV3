import styled from 'styled-components';

const InputForm = styled.form`
  display: block;
  margin-top: 0em;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const InputEachBox = styled.div`
  display: block;
`;

const InputBlock = styled.input`
  border: 1px solid rgb(51, 51, 51);
  height: 40px;
  width: 200px;
  outline: none;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
`;

export { InputForm, InputBlock, InputEachBox, InputBox };
