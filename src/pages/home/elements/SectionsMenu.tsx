import React from 'react';
import { FlexWrapper, Typography } from 'components'
import { SECTIONS } from 'constants/NavbarMenuSections';
import { useQuery } from 'styles/breakpoints';

export const SectionsMenu: React.FC = () => {
    const { isTablet, isMobile, isSmDesktop } = useQuery();
    return (
        <FlexWrapper
            display={isMobile ? 'none' : 'flex'}
            flexGrow='1'
            justifyContent='space-evenly'
            paddingX={isSmDesktop ? 's40' : 's80'}
        >
            {SECTIONS.map((section) =>
                <Typography key={section.title} fontWeight='fw500' paddingX={isTablet ? 's16' : 's0'} paddingY={isTablet ? 's4' : 's0'}>
                    {section.title}
                </Typography>
            )
            }
        </FlexWrapper>
    )
};

