import React from 'react'
import { BlackButton, Container, FlexWrapper, Image, SectionWrapper, Typography } from 'components'
import { Box } from "components/wrappers/Box";
import { useQuery } from 'styles/breakpoints';

export const LearnMore: React.FC = () => {
    const { isMobile, isTablet, isSmDesktop } = useQuery();
    return (
        <SectionWrapper>
            <Container>
                <FlexWrapper
                    flexDirection={isSmDesktop ? 'column' : 'row'}
                    alignItems='center' >
                    <FlexWrapper
                        flexDirection='column'
                        textAlign={isSmDesktop ? 'center' : 'left'}
                        alignItems={isSmDesktop ? 'center' : 'flex-start'}
                        maxWidth='34rem'>
                        <Typography type='h4' >
                            Everyone can be a
                            chef in their own kitchen
                        </Typography>
                        <Box >
                            <Typography type='body16' marginY='s32' color='secondary'>
                                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
                            </Typography>
                        </Box>
                        <BlackButton>
                            Learn more
                        </BlackButton>
                    </FlexWrapper>
                    <FlexWrapper
                        display={isMobile ? 'none' : 'flex'}
                        paddingTop={isSmDesktop ? 's32' : 's0'}
                    >
                        <Image src='chef' alt='chef' maxWidth={isTablet ? '30rem' : '50rem'} />
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </SectionWrapper >
    )
}

