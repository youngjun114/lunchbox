import React, { memo } from 'react';
import styled from 'styled-components';

type Props = {
  children: JSX.Element;
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
`;
