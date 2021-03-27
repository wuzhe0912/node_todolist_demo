import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MEDIA_QUERY_MD } from 'constant/BreakPoint';

const list = [
  { name: 'Photos', path: '/' },
  { name: 'Movie', path: '/movie' },
  { name: 'Todos', path: '/todos' },
];

const AsideList = styled.aside`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;

  .selected {
    color: green;
  }

  ${MEDIA_QUERY_MD} {
    grid-template-columns: none;
    grid-template-rows: 60px 60px 60px;
    transform: ${({ open }) => (open ? 'translatxX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;
    align-items: center;
    background-color: #0d2538;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    color: #fff;
    font-size: 28px;
    text-align: left;
    padding: 10px 30px;

    .link-text {
      color: #fff;
    }
  }
`;

const NavList = ({ open }) => {
  return (
    <AsideList open={open}>
      {list.map((item) => {
        return (
          <div key={item.name}>
            <i>icon</i>
            <NavLink
              exact
              to={item.path}
              className='link-text'
              activeClassName='selected'
            >
              {item.name}
            </NavLink>
          </div>
        );
      })}
    </AsideList>
  );
};

export default NavList;
