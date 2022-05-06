import React from 'react'
import { FlexWrapper, Image } from 'components'
import { useQuery } from 'styles/breakpoints';
import { SectionsMenu, SocialBar } from '../elements';

export const Navbar: React.FC = () => {
  const { isTablet } = useQuery();
  return (
    <FlexWrapper
      flexDirection={isTablet ? 'column' : 'row'}
      alignItems='center'
      justifyContent='space-between'
      borderBottom="1px solid rgba(0, 0, 0, 0.1)"
      paddingX={isTablet ? 's0' : 's80'}
      paddingY={isTablet ? 's24' : 's40'}
    >
      <Image maxHeight='1.875rem' src='logo' alt='logo' />
      <SectionsMenu />
      <SocialBar />
    </FlexWrapper>
  )
}

