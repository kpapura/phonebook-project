import styled from 'styled-components';

export const Form = styled.form`
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  width: 350px;
  padding: 20px;
`;
export const Input = styled.input`
  margin-top: 3px;
  width: 100%;
  border-radius: 30px;
  padding: 10px 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  color: #333;
  &:hover {
    box-shadow: 1px 1px 5px 1px white;
  }
`;
export const Button = styled.button`
  padding: 10px 15px;
  margin-top: 20px;
  background-color: white;
  cursor: pointer;
  box-shadow: 0px 0px 8px 6px lightgray;
  border-radius: 15px;
  border-style: none;
  &:hover {
    cursor: pointer;
    background-color: rgba(32, 178, 171, 0.646);
    color: white;
  }
`;
export const Label = styled.label`
  font-size: 0.9rem;
  font-style: italic;
  margin-bottom: 10px;
  color: #333;
`;
