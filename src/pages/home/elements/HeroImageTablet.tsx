import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export const HeroImageTablet = () => (
    <StaticImage src='../../../assets/images/chicken-wings.png'
        alt='chicken-wings'
        placeholder='tracedSVG'
        draggable='false'
        width={1200}
        style={{
            borderRadius: '0 0rem 1rem 1rem',
        }} />
)

