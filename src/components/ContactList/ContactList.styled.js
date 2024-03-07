import styled from 'styled-components';

export const List = styled.ul`
  box-shadow: 0px 0px 8px 6px lightgray;
  border: 1px solid white;
  padding: 20px 0;
  border-radius: 20px;
  list-style: none;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`;
export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 350px;
  padding: 10px 10px;
  &:hover {
    cursor: pointer;
    box-shadow: 1px 1px 5px 1px white;
  }
`;
export const Button = styled.button`
  color: white;
  display: flex;
  font-weight: bold;
  font-style: italic;
  font-size: 0.8rem;
  padding: 10px 15px;
  background-color: rgba(32, 178, 171, 0.646);
  cursor: pointer;
  box-shadow: 0px 0px 8px 6px lightgray;
  border-radius: 15px;
  border-style: none;
  margin-left: 20px;
  &:hover {
    background-color: lightseagreen;
    color: white;
  }
`;
