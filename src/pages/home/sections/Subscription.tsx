import React from 'react'
import { BlackButton, Container, FlexWrapper, InputField, SectionWrapper, Typography } from 'components'
import { useQuery } from 'styles/breakpoints';
import { StaticImage } from 'gatsby-plugin-image'
import { Box } from "components/wrappers/Box";


export const Subscription: React.FC = () => {
    const { isTablet, isMobile } = useQuery();
    return (
        <SectionWrapper>
            <Container>
                <FlexWrapper
                    width='100%'
                    backgroundColor='accent'
                    justifyContent='center'
                    alignItems='center'
                    height='30rem'
                    borderRadius={isTablet ? 'r16' : 'r80'}
                    paddingX='s40'
                    paddingY={isMobile ? 's32' : 's48'}
                    flexDirection='column'
                    position='relative'
                >
                    <Box marginBottom='s48' textAlign='center' >
                        <Typography type='h4' fontWeight='fw600' marginY='s16'>
                            Deliciousness to your inbox
                        </Typography>
                        <Box maxWidth='620px'>
                            <Typography color='secondary'>
                                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
                            </Typography>
                        </Box>
                    </Box>
                    {isTablet ?
                        <FlexWrapper flexDirection='column' alignItems='center' zIndex={3}>
                            <InputField placeholder='Your email address...' />
                            <Box marginTop='s16' >
                                <BlackButton >Subscribe</BlackButton>
                            </Box>
                        </FlexWrapper>
                        : <Box position='relative' zIndex={1}>
                            <InputField placeholder='Your email address...' />
                            <Box position='absolute' top='0.5rem' right='0.5rem'>
                                <BlackButton >Subscribe</BlackButton>
                            </Box>
                        </Box>
                    }
                    <Box 
                    position='absolute' 
                    bottom='0' 
                    right='0' 
                    display={isTablet ? 'none' : 'flex'}>
                        <StaticImage src='../../../assets/images/avocado.png'
                            alt='avocado slad'
                            placeholder='tracedSVG'
                            draggable='false'
                            style={{
                                borderRadius: '0rem 0rem 5rem 0',
                            }} />
                    </Box>
                    <Box position='absolute' bottom='0' left='0' display={isTablet ? 'none' : 'flex'}>
                        <StaticImage src='../../../assets/images/food.png'
                            alt='food salad'
                            placeholder='tracedSVG'
                            draggable='false'
                            style={{
                                borderRadius: '0rem 0rem 0rem 5rem',
                            }} />
                    </Box>
                </FlexWrapper>
            </Container>
        </SectionWrapper >
    )
}
