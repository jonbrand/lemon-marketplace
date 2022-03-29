import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? '#62FF5B' : '#0C4900')};

  white-space: nowrap;
  outline: none;
  border: none;

  min-width: 100px;
  max-width: 200px;
  cursor: pointer;

  text-decoration: none;
  transition: 0.3s;
  display: flex;

  justify-content: center;
  align-items: center;
  border-radius: 5px;

  padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};

  color: ${({ primary }) => (primary ? '#363f5f' : '#fff')};

  font-size: ${({ big }) => (big ? '20px' : '14px')};

  &:hover {
    background: #FBDE1B;
    transform: translateY(-2px);
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.link``;
