import { useMediaQuery } from 'react-responsive';

export const smMobile = '(max-width: 26rem)'; //416px
export const mobile = '(max-width: 33rem)'; //528px
export const tablet = '(max-width: 56.25rem)'; //900px
export const smDesktop = '(max-width: 71.875rem)'; //1150px

export const useQuery = () => ({
	isSmMobile: useMediaQuery({ query: smMobile }),
	isMobile: useMediaQuery({ query: mobile }),
	isTablet: useMediaQuery({ query: tablet }),
	isSmDesktop: useMediaQuery({ query: smDesktop }),
});