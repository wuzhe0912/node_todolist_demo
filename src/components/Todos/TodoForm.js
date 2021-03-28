import { useEffect } from 'react';
import { Form, FormInput, FormBtn, FormTags } from 'styles/FormStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTags } from '@fortawesome/free-solid-svg-icons';

const TodoForm = ({
  todos,
  setTodos,
  inputText,
  setInputText,
  status,
  setStatus,
  setFilterTodo,
}) => {
  const tagList = [
    { name: 'All', tag: 'all' },
    { name: 'Done', tag: 'done' },
    { name: 'To Do', tag: 'todo' },
  ];

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText !== '') {
      // 透過展開語法，複製物件
      setTodos([
        ...todos,
        {
          id: Math.random() * 100,
          text: inputText,
          completed: false,
        },
      ]);
    }
    setInputText('');
  };

  // first enter
  useEffect(() => {
    getLocalData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handleSelect();
    saveLocalData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos]);

  const handleSelect = (element) => {
    setStatus((status = element));
    switch (status) {
      case 'done':
        setFilterTodo(todos.filter((item) => item.completed === true));
        break;
      case 'todo':
        setFilterTodo(todos.filter((item) => item.completed === false));
        break;
      default:
        setFilterTodo(todos);
        break;
    }
  };

  const saveLocalData = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalData = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todosData = JSON.parse(localStorage.getItem('todos'));
      setTodos(todosData);
    }
  };

  return (
    <Form>
      <h2>Todos</h2>
      <div>
        <FormInput
          value={inputText}
          onChange={handleInput}
          type='text'
          className='todo-input'
        />
        <FormBtn onClick={handleSubmit} className='todo-button' type='submit'>
          <FontAwesomeIcon icon={faPlus} />
        </FormBtn>
      </div>
      <FormTags>
        {tagList.map((item) => {
          return (
            <div
              onClick={() => handleSelect(item.tag)}
              className='todo-tags'
              key={item.tag}
            >
              <FontAwesomeIcon icon={faTags} />
              {item.name}
            </div>
          );
        })}
      </FormTags>
    </Form>
  );
};

export default TodoForm;
