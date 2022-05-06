import React from 'react'
import {  FlexWrapper, Image, Typography } from 'components'
import { Box } from "components/wrappers/Box";
import { SectionsMenu, SocialBar } from '../elements';
import { useQuery } from 'styles/breakpoints';

export const Footer: React.FC = () => {
    const { isTablet, isSmDesktop } = useQuery();
    return (
        <>
            <FlexWrapper alignItems='center' flexDirection={isTablet ? 'column' : 'row'} paddingLeft={isTablet ? 's0' : 's80'} paddingRight={isTablet ? 's0' : 's16'} paddingY={isTablet ? 's24' : 's40'} borderBottom="1px solid rgba(0, 0, 0, 0.1)">
                <FlexWrapper textAlign={isSmDesktop ? 'center' : 'left'} alignItems={isTablet ? 'center' : 'flex-start'} flexGrow='1' flexDirection='column' justifyContent={isTablet ? 'center' : 'flex-start'} marginBottom={isTablet ? 's16' : 's0'} >
                    <Image maxHeight='1.875rem' src='logo' alt='logo' />
                    <Typography type='body16' color='secondary'>
                        Lorem ipsum dolor sit amet, consectetuipisicing elit,
                    </Typography>
                </FlexWrapper>
                <SectionsMenu />
            </FlexWrapper>
            <FlexWrapper justifyContent='space-between' flexDirection={isTablet ? 'column' : 'row'} padding='s48' paddingRight='s64' alignItems='center'>
                <Box />
                <Typography type='body16' color='secondary'>
                    © 2020 Flowbase. Powered by <span color='accent'>Webflow</span>
                </Typography>
                <SocialBar />
            </FlexWrapper>
        </>
    )
}