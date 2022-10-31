import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children?: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return <StyledButton>{children}</StyledButton>;
};

const StyledButton = styled.button`
  color: 'red';
`;

export default Button;
