import React from "react";
import styled from "styled-components/macro";
import { FlexWrapper, Image, Typography } from "components";

interface Styles {
    width?: string;
    height?: string;
    maxHeight?: string;
    marginLeft?: string;
    marginTop?: string;
    marginBottom?: string;
    padding?: string;
    borderRadius?: string;
    backgroundColor?: string;
}

interface BadgeProps extends Styles {
    src: string;
    title?: string;
    alt: string;
    date?: string;
}


export const Badge: React.FC<BadgeProps> = ({ src, alt, title, date, ...rest }) => (
    <StyledBadge {...rest}>
        <Image src={src} alt={alt} />
        <FlexWrapper flexDirection='column'>
            <Typography type='caption14' paddingLeft='s8'>
                {title}
            </Typography>
            {date &&
                <Typography
                    type='caption14'
                    fontWeight='fw500'
                    paddingLeft='s8'
                    marginTop='s8' >
                    {date}
                </Typography>
            }
        </FlexWrapper>
    </StyledBadge>
);

const StyledBadge = styled.div<Styles>`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: ${({ marginLeft }) => marginLeft || ''};
    margin-top: ${({ marginTop }) => marginTop || ''};
    margin-bottom: ${({ marginBottom }) => marginBottom || ''};
    padding: ${({ padding }) => padding || '0 1rem'};
    width: ${({ width }) => width || ''};
    height: ${({ height }) => height || ''};
    border-radius: ${({ borderRadius }) => borderRadius || '1.875rem'};
    background-color: ${({ backgroundColor }) => backgroundColor || ''};
`;
