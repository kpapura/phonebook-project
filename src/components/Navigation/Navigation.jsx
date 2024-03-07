import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/authSlice';
import { logoutThunk } from '../../redux/auth/authOperations';
import { Container, LogOutBtn, StyledNavLink, User } from './Navigation.styled';
import { FaRegUserCircle } from "react-icons/fa";

export const Navigation = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  return (
    <Container  isLoggedIn={isLoggedIn}>
      {isLoggedIn && <User>
       <FaRegUserCircle />
        <p>{user.email}</p>
      </User>}
      <nav>
        <StyledNavLink to="/contacts">Contacts</StyledNavLink>
        {isLoggedIn && (
          <LogOutBtn
            onClick={() => {
              dispatch(logoutThunk());
              navigate('login');
            }}
          >
            Log out
          </LogOutBtn>
        )}

        {!isLoggedIn && (
          <>
            <StyledNavLink to="/register">Register</StyledNavLink>
            <StyledNavLink to="/login">Log in</StyledNavLink>
          </>
        )}
      </nav>
    </Container>
  );
};
