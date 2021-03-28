import React from 'react';
import styled from 'styled-components';
import HumbergeMenu from 'components/NavBar/HumbergeMenu';
import Logo from 'assets/logo.png';
import { MEDIA_QUERY_MD } from 'constant/BreakPoint';

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 150px auto 450px;
  align-items: center;
  width: 100%;
  height: 85px;

  img {
    margin-left: 30px;
    width: 60px;
    height: 60px;

    ${MEDIA_QUERY_MD} {
      width: 40px;
      height: 40px;
    }
  }
`;

const NavBar = () => {
  return (
    <header>
      <Nav>
        <img src={Logo} alt='logo' />
        <div></div>
        <HumbergeMenu></HumbergeMenu>
      </Nav>
    </header>
  );
};

export default NavBar;
