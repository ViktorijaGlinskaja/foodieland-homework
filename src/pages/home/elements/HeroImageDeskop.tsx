import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export const HeroImageDeskop = () => (
    <StaticImage src='../../../assets/images/chicken-wings.png'
        alt='chicken-wings'
        placeholder='tracedSVG'
        draggable='false'
        width={1200}
        style={{
            borderRadius: '0rem 5rem 5rem 0',
        }} />
)

