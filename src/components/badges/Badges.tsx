import { FlexWrapper, Image, Typography } from "components";
import React from "react";
import styled from "styled-components/macro";
import { Colors } from '../../styles/theme';

interface Styles {
    backgroundColor? : Colors;
    maxWidth?: string;
    width?: string;
    height?: string;
    margin?: string;
    marginLeft?: string;
    marginTop?: string;
    maxHeight?: string;
    padding?: string;
    borderRadius?: string;
}

interface BadgeProps extends Styles {
    src: string;
    title: string;
    alt: string;
}

export const Badge: React.FC<BadgeProps> = ({ src, alt, title, ...rest }) => (
    <StyledFlexWrapper {...rest}>
        <Image src={src} alt={alt}  />
        <Typography type='caption14' fontWeight='fw600' paddingLeft='s8'>
            {title}
        </Typography>
    </StyledFlexWrapper>
);

export const StyledFlexWrapper = styled(FlexWrapper) <BadgeProps>`
  align-Items: center;
  justify-content: center;
  padding: 0 1rem;
  border-radius: 1.875rem;
`;