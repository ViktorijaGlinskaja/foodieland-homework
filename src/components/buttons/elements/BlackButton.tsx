import React, { ReactNode } from 'react';
import styled from 'styled-components/macro';
import { BaseButton, FlexWrapper } from 'components';
import { mobile } from 'styles/breakpoints';
import { theme } from 'styles/theme';

export interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
}

export const BlackButton: React.FC<ButtonProps> = ({ children }) => (
    <StyledButton>
        <FlexWrapper alignItems='center' justifyContent='center'>
        {children}
        </FlexWrapper>
    </StyledButton>
);

const StyledButton = styled(BaseButton)`
  width: 12.5rem;
  padding:  1.31rem 2.31rem;
  border-radius: 1rem;
  text-align: center;
  color: ${theme.colors.white};
  background-color: black;
  @media ${mobile} {
    padding: 1rem 1.5rem;
  }
`