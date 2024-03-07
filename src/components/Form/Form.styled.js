import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 63px);
  & > form {
    padding: 25px 20px;
    width: 350px;
    min-height: 200px;
    box-shadow: 0px 0px 6px 2px black;
    display: flex;
    flex-direction: column;
    gap: 10px;
    & > h2 {
      margin: 0 auto;
    }
  }
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  & > input {
    padding: 10px 10px;
    border-radius: 10px;
    border-style: none;
    box-shadow: 0px 0px 8px 6px lightgray;
  }
  & > label {
    font-size: 0.9rem;
    font-style: italic;
  }
  & > span {
    color: red;
    font-size: 0.8rem;
    font-style: italic;
  }
`;
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-style: italic;
  font-size: 0.8rem;
  padding: 10px 15px;
  margin-top: 10px;
  background-color: rgba(32, 178, 171, 0.646);
  cursor: pointer;
  box-shadow: 0px 0px 8px 6px lightgray;
  border-radius: 15px;
  border-style: none;
  &:hover {
    background-color: lightseagreen;
    color: white;
  }
`;
export const LinkBox = styled.p`
  margin: 0 auto;
  margin-top: 15px;
`;
export const Button = styled.button`
  padding: 10px 15px;
  margin-top: 10px;
  background-color: white;
  cursor: pointer;
  box-shadow: 0px 0px 8px 6px lightgray;
  border-radius: 15px;
  border-style: none;
  &:hover {
    background-color: rgba(32, 178, 171, 0.646);
    color: white;
  }
`;

export const IconBtn = styled.div`
  position: absolute;
  right: 10px;
  bottom: 5px;
  cursor: pointer;
`