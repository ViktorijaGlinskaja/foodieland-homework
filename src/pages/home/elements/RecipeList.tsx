import React from 'react'
import { Container, GridWrapper, Image, RecipeCard } from 'components'
import { RECIPES } from 'constants/RecipesSection'

export const RecipeList = () => (
    <GridWrapper
        gridGap='2rem'
        marginTop='s80'
        gridTemplateColumns={{
            desktop: 'repeat(3, 1fr)',
            ltablet: 'repeat(2, 1fr)',
            lmobile: 'repeat(1, 1fr)',
        }}>
        {RECIPES.map((recipe) => (
            recipe.title === 'Ad'
                ? <Container key={recipe.title}>
                    <Image
                        src='Ads'
                        alt='ad'
                        width='100%'
                        margin='auto'
                    />
                </Container>
                : <RecipeCard
                    key={recipe.title}
                    img={recipe.img}
                    title={recipe.title}
                    category={recipe.category}
                    time={recipe.time}
                />
        ))}
    </GridWrapper>
);

