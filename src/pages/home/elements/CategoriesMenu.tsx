import React from 'react';
import { GridWrapper, SmallCard } from 'components'
import { CATEGORIES } from 'constants/CategoriesSection';

export const CategoriesMenu: React.FC = () => (
    <GridWrapper gridTemplateColumns={{
        desktop: 'repeat(6, 1fr)',
        ltablet: 'repeat(3, 1fr)',
        lmobile: 'repeat(2, 1fr)'
    }}
        marginTop='s80'
    >
        {CATEGORIES.map((category) =>
            <SmallCard
                key={category.title}
                src={category.src}
                title={category.title}
                alt={category.src}
                background={category.color}
            />
        )}
    </GridWrapper>
);