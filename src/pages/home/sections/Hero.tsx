import React from 'react';
import { useQuery } from 'styles/breakpoints';
import { FlexWrapper, Typography, SectionWrapper, Container } from 'components';
import { StaticImage } from 'gatsby-plugin-image';
import { Badge } from 'components/badges/Badges';

const HomePageHero: React.FC = () => {
    const { isTablet, isMobile, isSmMobile } = useQuery();
    return (
        <SectionWrapper>
            <Container>
                <FlexWrapper
                    height='40rem'
                    flexDirection={isTablet ? 'column' : 'row'}
                    backgroundColor='accent'
                    borderRadius='r80'
                >
                    <FlexWrapper
                        paddingX='s40'
                        paddingY={isMobile ? 's40' : 's48'}
                        flexDirection='column'
                        flexGrow='1'
                    >
                        <Badge
                            src='recipe'
                            alt='recipe'
                            title='Hot Recipes'
                            backgroundColor='white'
                            height='2.8125rem'
                            width='9.75rem'
                        />
                        <Typography type='h4' fontWeight='fw600' marginY='s16'>
                            Spicy delicious chicken wings
                        </Typography>
                        <Typography color='secondary' marginBottom='s16'>
                            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
                        </Typography>
                        <FlexWrapper flexDirection={isSmMobile ? 'column' : 'row'}>
                            <Badge
                                src='timer'
                                alt='timer'
                                title='30 Minutes'
                                backgroundColor='light'
                                height='2.5rem'
                                width='9rem' />
                            <Badge
                                src='fork'
                                alt='fork'
                                title='Chicken'
                                backgroundColor='light'
                                marginLeft={isSmMobile ? 's0' : 's16'}
                                marginTop={isSmMobile ? 's8' : 's0'}
                                height='2.5rem'
                                width='7.4rem' />
                        </FlexWrapper>
                    </FlexWrapper>
                    <FlexWrapper>
                        <StaticImage src='../../../assets/images/chicken-wings.png'
                            alt='chicken-wings'
                            placeholder='tracedSVG'
                            draggable='false'
                            width={1200}
                            style={{
                                borderRadius: '0 5rem 5rem 0',
                            }} />
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </SectionWrapper>
    )
};

export default HomePageHero;