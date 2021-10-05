import React, { memo } from 'react';
import styled from 'styled-components';

type Props = {
  children: string;
  color: string;
};

const Button = ({ children, color }: Props) => {
  return <StyledButton color={color}>{children}</StyledButton>;
};

export default memo(Button);

export const StyledButton = styled.button`
  padding: 0.75em;
  border: none;
  border-radius: 10px;
  font-size: 1.6rem;
  background-color: ${(props) => props.color};
  color: white;
  width: 100%;
`;
