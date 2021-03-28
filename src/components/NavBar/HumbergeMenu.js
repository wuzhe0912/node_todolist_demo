import { useState, Fragment } from 'react';
import styled from 'styled-components';
import NavList from 'components/NavBar/NavList';
import { MEDIA_QUERY_MD } from 'constant/BreakPoint';

const BurgerMenu = styled.aside`
  display: none;

  ${MEDIA_QUERY_MD} {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 3rem;
    height: 2rem;
    position: fixed;
    top: 25px;
    right: 15px;
    cursor: pointer;
    z-index: 2;

    div {
      width: 2rem;
      height: 0.25rem;
      background-color: ${({ open }) => (open ? '#ccc' : '#333')};
      border-radius: 10px;
      transform-origin: 0.5px;
      transition: all 0.3s linear;

      &:nth-child(1) {
        transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
      }

      &:nth-child(2) {
        transform: ${({ open }) =>
          open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({ open }) => (open ? 0 : 1)};
      }

      &:nth-child(3) {
        transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
      }
    }
  }
`;

const HumbergeMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <BurgerMenu open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerMenu>
      <NavList open={open} />
    </Fragment>
  );
};

export default HumbergeMenu;
