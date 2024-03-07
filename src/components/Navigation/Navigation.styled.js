import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  //justify-content: space-between;
  justify-content: ${props => props.isLoggedIn ? "space-between" : "center"};

  gap: 20px;
  padding: 20px 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.696);
  font-size: 1.4rem;
  font-weight: bold;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
    gap: 50px;
  }
`;
export const User = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  & > p {
    color: lightseagreen;
    margin: 0;
  }
`;
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  cursor: pointer;
  &.active {
    color: lightseagreen;
  }
`;
export const LogOutBtn = styled.button`
  padding: 10px 15px;
  background-color: white;
  cursor: pointer;
  box-shadow: 0 0 6px 2px lightgray;
  border-radius: 15px;
  border-style: none;
  &:hover {
    background-color: lightseagreen;
    color: white;
  }
`;
