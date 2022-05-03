import React from 'react'
import styled from "styled-components/macro";
import { Image, Typography } from 'components';
import { Box } from "components/wrappers/Box";
import { mobile, useQuery } from 'styles/breakpoints';

interface Styles {
    width?: string;
    height?: string;
    padding?: string;
    margin?: string;
    borderRadius?: string;
    background?: string;
}

interface CardProps extends Styles {
    src: string;
    title?: string;
    alt?: string;
}

export const SmallCard: React.FC<CardProps> = ({ title, src, alt, ...rest }) => {
    const { isTablet } = useQuery();
    return (
        <StyledCard {...rest}>
            <Box position='relative'>
                <Box position='absolute' top='-3.5rem' right='-1rem'>
                    <Image src={src} alt={src} width={isTablet ? '6rem' : '6.25rem'} />
                </Box>
                <Box position='absolute'>
                    <Typography
                        type='h6'
                        fontSize={{
                            desktop: 'fs18',
                            ltablet: 'fs24',
                            lmobile: 'fs24'
                        }}
                        marginTop='s48'
                    >
                        {title}
                    </Typography>
                </Box>
            </Box>
        </StyledCard>
    );
}

const StyledCard = styled.div<Styles>`
height: 9.5rem;
margin: 2rem 1rem;
padding: 1.875rem 2.5rem;
border-radius: 1rem;
background: ${({ background }) => background || ''}; 
  @media ${mobile} {
    maxWidth: 11rem;
    margin: 2rem 0.5rem;
  }
`