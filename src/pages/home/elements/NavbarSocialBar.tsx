import React from 'react';
import { FlexWrapper, Image } from 'components';
import { useQuery } from 'styles/breakpoints';

const NavbarSocialBar: React.FC = () => {
    const { isTablet, isMobile } = useQuery();
    return (
        <FlexWrapper display={isMobile ? 'none' : 'flex'} paddingTop={isTablet ? 's8' : 's0'}>
            <Image src='facebook' alt='facebook' padding='0 0.5rem' />
            <Image src='twitter' alt='twitter' padding='0 0.5rem' />
            <Image src='instagram' alt='instagram' padding='0 0.5rem' />
        </FlexWrapper>
    )
};

export default NavbarSocialBar;