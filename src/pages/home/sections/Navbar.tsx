import React from 'react'
import { FlexWrapper, Image } from 'components'
import { useQuery } from 'styles/breakpoints';
import NavbarMenu from '../elements/NavbarMenu';
import NavbarSocialBar from '../elements/NavbarSocialBar';

const Navbar: React.FC = () => {
  const { isTablet, isMobile } = useQuery();
  return (
    <FlexWrapper flexDirection={isTablet ? 'column' : 'row'} alignItems='center' borderBottom="1px solid rgba(0, 0, 0, 0.1)" justifyContent='space-between' paddingX={isTablet ? 's0' : 's80'} paddingY={isTablet ? 's24' : 's40'}>
      <Image maxHeight='1.875rem' src='logo' alt='logo' />
      <NavbarMenu />
      <NavbarSocialBar/>
    </FlexWrapper>
  )
}

export default Navbar