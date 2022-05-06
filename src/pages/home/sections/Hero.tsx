import React from 'react';
import { useQuery } from 'styles/breakpoints';
import { theme } from 'styles/theme';
import { Badge, BlackButton, Container, FlexWrapper, Image, Typography, SectionWrapper } from 'components';
import { HeroImageDeskop, HeroImageTablet } from '../elements';

export const HomePageHero: React.FC = () => {
    const { isTablet, isMobile, isSmMobile, isSmDesktop } = useQuery();
    return (
        <SectionWrapper>
            <Container>
                <FlexWrapper
                    flexDirection={isTablet ? 'column' : 'row'}
                    backgroundColor='accent'
                    borderRadius={isTablet ? 'r16' : 'r80'}
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
                            backgroundColor={theme.colors.white}
                            height='2.8125rem'
                            width='9.75rem'
                        />
                        <Typography type='h3' fontWeight='fw600' marginY='s16'>
                            Spicy delicious chicken wings
                        </Typography>
                        <Typography color='secondary' marginBottom='s32'>
                            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
                        </Typography>
                        <FlexWrapper flexDirection={isSmMobile ? 'column' : 'row'}>
                            <Badge
                                src='timer'
                                alt='timer'
                                title='30 Minutes'
                                backgroundColor={theme.colors.light}
                                height='2.5rem'
                                width='9rem'
                            />
                            <Badge
                                src='fork'
                                alt='fork'
                                title='Chicken'
                                backgroundColor={theme.colors.light}
                                marginLeft={isSmMobile ? '0rem' : '1rem'}
                                marginTop={isSmMobile ? '0.5rem' : '0rem'}
                                height='2.5rem'
                                width='7.4rem'
                            />
                        </FlexWrapper>
                        <FlexWrapper
                            flexDirection={isSmDesktop ? 'column' : 'row'}
                            justifyContent='space-between'
                            alignItems={isSmDesktop ? 'flex-start' : 'center'}
                            marginTop={isSmDesktop ? 's64' : 's96'}
                            marginBottom='s32'
                        >
                            <Badge
                                src='John'
                                alt='John'
                                title='John Smith'
                                date='15 March 2022'
                                height='2.5rem'
                                borderRadius='0'
                                padding='0rem'
                                marginBottom={isSmDesktop ? '1.5rem' : '0rem'}
                            />
                            <BlackButton >
                                View Recipes
                                <Image src="play" alt="play" padding='0rem 0.4rem'/>
                            </BlackButton>
                        </FlexWrapper>
                    </FlexWrapper>
                    <FlexWrapper>
                        {
                            isTablet
                                ? <HeroImageTablet />
                                : <HeroImageDeskop />
                        }
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </SectionWrapper>
    )
};
