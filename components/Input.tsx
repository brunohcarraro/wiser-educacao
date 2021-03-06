import styled from 'styled-components';

export default styled.input`
  font-size: 16px;
  padding: 10px;
  height: 40px;
  border: 1px solid #989FDB;
  border-radius: 8px;
  color: ${props => props.inputColor || "#383E71"};
  ::placeholder {
    color: #989FDB;
  }
  width: 100%;
  margin-bottom: 30px;
`;