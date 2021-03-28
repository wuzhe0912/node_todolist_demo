import styled from 'styled-components';

export const Form = styled.form`
  display: grid;
  justify-content: center;
  padding: 16px;
  background: #ff6f47;

  h2 {
    color: #fff;
    text-align: center;
    font-size: 36px;
  }
`;

export const FormInput = styled.input`
  padding: 8px;
  font-size: 16px;
  background: #f7fffe;
  border: none;
  border-radius: 20px;
  width: 280px;
`;

export const FormBtn = styled.button`
  width: 36px;
  height: 36px;
  font-size: 16px;
  background: #f7fffe;
  color: #ff6f47;
  cursor: pointer;
  border: none;
  border-radius: 50%;
  transition: all 0.3s ease;
  margin-left: 12px;
`;

export const FormTags = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 8px;

  .todo-tags {
    background: #fff;
    margin: 4px;
    padding: 6px;
    border-radius: 16px;
    color: #ff6f47;
    text-align: center;
  }
`;
