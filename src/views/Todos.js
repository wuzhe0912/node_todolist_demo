import { useState } from 'react';
import styled from 'styled-components';
import TodoForm from 'components/Todos/TodoForm';
import { MEDIA_QUERY_MD } from 'constant/BreakPoint';
import TodoItem from 'components/Todos/TodoItem';

const TodosWrap = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

const TodosSection = styled.section`
  width: 480px;
  height: 100%;
  box-shadow: 2px 2px 5px #333;
  border-radius: 6px;

  &:hover {
    cursor: pointer;
    box-shadow: 4px 4px 8px #333;
    transition: 0.3s all;
  }

  ${MEDIA_QUERY_MD} {
    width: 360px;
  }
`;

const Todos = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filterTodo, setFilterTodo] = useState([]);

  return (
    <TodosWrap>
      <TodosSection>
        <TodoForm
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
          status={status}
          setStatus={setStatus}
          setFilterTodo={setFilterTodo}
        />
        <TodoItem todos={todos} setTodos={setTodos} filterTodo={filterTodo} />
      </TodosSection>
    </TodosWrap>
  );
};

export default Todos;
