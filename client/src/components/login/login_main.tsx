import React from 'react';
import styled from 'styled-components';

const LoginMain = () => {
  return (
    <LoginContainer>
      <Input type='text' placeholder='Username' />
      <Input type='password' placeholder='Password' />
      <Button>Log In</Button>
    </LoginContainer>
  );
};

export default LoginMain;

const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2em;
`;

const Input = styled.input`
  padding: 1em;
  border: none;
  border-bottom: 1px solid black;
  width: 75%;
  color: black;
`;

const Button = styled.button`
  padding: 0.5em;
  background-color: #e99557;
  border: none;
  border-radius: 10px;
  margin-top: 1em;
  font-size: 2.5rem;
  color: white;
`;
