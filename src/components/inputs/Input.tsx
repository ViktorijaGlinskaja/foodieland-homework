import React from 'react';
import { Box,  Styles } from 'components/wrappers/Box';
import { Theme } from '../../styles/theme';
import { Typography } from 'components/typography/Typography';
import styled from 'styled-components/macro';
import { tablet } from 'styles/breakpoints';

export type InputType = 'text' | 'email' | 'password' | 'date';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    type?: InputType;
    placeholder?: string;
    error?: string;
    minValue?: number;
    maxValue?: number;
    onChange?: () => void;
}

type InputFieldProps = InputProps & Styles<Theme>;

export const InputField: React.FC<InputFieldProps> = ({ minValue, maxValue, label, type, onChange, error, placeholder, ...rest }) => (
    <>
        {error && (
            <label htmlFor="input">
                <Typography type="body16">{error}</Typography>
            </label>
        )}
        <label htmlFor="input">
            <Typography type="body16">{label}</Typography>
        </label>
        <StyledBox
            as="input"
            placeholder={placeholder}
            min={minValue}
            max={maxValue}
            type={type}
            onChange={onChange}
            {...rest}>
        </StyledBox>
    </>
);

 const StyledBox = styled(Box)<Styles<Theme>>`
    width: 30rem;
    height: 5rem;
    padding-left: 2rem;
    border-radius: 1.5rem;
    border: 0rem;
    @media ${tablet} {
        width: 20rem;
        height: 3.83rem;
  }
`;