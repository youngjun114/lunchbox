import React, { FormEvent, useState } from 'react';
import styled from 'styled-components';
import Button from '../global/button';
import { Link } from 'react-router-dom';

const LoginMain = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(username, password);
  };

  return (
    <LoginContainer>
      <Input
        type='text'
        placeholder='Username'
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type='password'
        placeholder='Password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button color='rgb(235, 87, 87)' type='submit' onClick={handleSubmit}>
        Log In
      </Button>
      <Text>
        Don't have an account? <Link to='#'>Sign Up</Link>
      </Text>
    </LoginContainer>
  );
};

export default LoginMain;

const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  margin: 0 4em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2em;
`;

const Input = styled.input`
  padding: 1em;
  border: none;
  border-bottom: 1px solid black;
  width: 100%;
  color: black;
`;

const Text = styled.p`
  color: black;
  font-size: 1.2rem;
`;
