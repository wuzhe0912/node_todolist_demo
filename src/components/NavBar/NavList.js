/* eslint-disable no-unused-vars */
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MEDIA_QUERY_MD } from 'constant/BreakPoint';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faImages,
  faFilm,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

const list = [
  { name: 'Photos', path: '/', icon: faImages },
  { name: 'Movie', path: '/movie', icon: faFilm },
  { name: 'Todos', path: '/todos', icon: faCheckCircle },
];

const AsideList = styled.aside`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;

  .link-text {
    font-size: 24px;
  }

  .link-text:visited {
    color: #fff;
  }

  .link-text:hover {
    color: #333;
  }

  .link-icon {
    margin-right: 8px;
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
  }
`;

const NavList = ({ open }) => {
  return (
    <AsideList open={open}>
      {list.map((item) => {
        return (
          <div key={item.name}>
            <NavLink
              exact
              to={item.path}
              className='link-text'
              activeStyle={{ color: '#ff6f47' }}
            >
              <FontAwesomeIcon
                className='link-icon'
                icon={item.icon}
              ></FontAwesomeIcon>
              {item.name}
            </NavLink>
          </div>
        );
      })}
    </AsideList>
  );
};

export default NavList;
