import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ListContainer = styled.div`
  background: #fff;
`;

const TodoLi = styled.li`
  display: grid;
  grid-template-columns: 1fr 30px 30px;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #333;

  .li-text {
    max-width: 90%;
    overflow-x: auto;
    transition: all 0.3s ease;
  }

  .text-completed {
    opacity: 0.8;
    color: #d1d5db;
    text-decoration: line-through;
  }

  .li-icon {
    color: #d1d5db;
  }

  .icon-completed {
    color: #ff6f47;
  }
`;

const TodoItem = ({ todos, setTodos, filterTodo }) => {
  const handleDelete = (item) => {
    setTodos(
      todos.filter((element) => {
        return element.id !== item.id;
      })
    );
  };

  const handleCompleted = (item) => {
    setTodos(
      todos.map((element) => {
        if (element.id === item.id) {
          return {
            ...element,
            completed: !element.completed,
          };
        }
        return element;
      })
    );
  };

  return (
    <ListContainer>
      <ul>
        {filterTodo.map((item) => {
          return (
            <TodoLi key={item.id}>
              <span
                className={`li-text ${
                  item.completed ? 'text-completed' : null
                }`}
              >
                {item.text}
              </span>
              <FontAwesomeIcon
                onClick={() => handleCompleted(item)}
                className={`li-icon ${
                  item.completed ? 'icon-completed' : null
                }`}
                icon={faCheckCircle}
              />
              <FontAwesomeIcon
                onClick={() => handleDelete(item)}
                className={`li-icon ${
                  item.completed ? 'icon-completed' : null
                }`}
                icon={faTrashAlt}
              />
            </TodoLi>
          );
        })}
      </ul>
    </ListContainer>
  );
};

export default TodoItem;
