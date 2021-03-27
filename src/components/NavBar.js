import React from 'react';
import styled from 'styled-components';
import HumbergeMenu from 'components/HumbergeMenu';

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 150px auto 450px;
  align-items: center;
  width: 100%;
  height: 65px;
  border-bottom: 2px solid #f1f1f1;

  .nav-logo {
    padding: 0 20px;
  }
`;

const NavBar = () => {
  return (
    <header>
      <Nav>
        <div className='nav-logo'>Logo App</div>
        <div></div>
        <HumbergeMenu></HumbergeMenu>
      </Nav>
    </header>
  );
};

export default NavBar;
