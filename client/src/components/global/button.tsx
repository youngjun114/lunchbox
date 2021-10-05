import React, { FormEvent, memo } from 'react';
import styled from 'styled-components';

type Props = {
  children?: HTMLCollection | string;
  color: string;
  onClick: (e: FormEvent<HTMLButtonElement>) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, color, onClick, ...other }: Props) => {
  return (
    <StyledButton color={color} onClick={onClick} {...other}>
      {children}
    </StyledButton>
  );
};

export default memo(Button);

const StyledButton = styled.button`
  padding: 0.75em;
  border: none;
  border-radius: 10px;
  font-size: 1.6rem;
  background-color: ${(props) => props.color};
  color: white;
  width: 100%;
`;
