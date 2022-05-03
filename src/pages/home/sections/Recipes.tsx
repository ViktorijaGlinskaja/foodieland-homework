import React from 'react'
import { Container, SectionWrapper, Typography, FlexWrapper } from 'components';
import { Box } from "components/wrappers/Box";
import { useQuery } from 'styles/breakpoints';
import { RecipeList } from '../elements';


export const Recipes: React.FC = () => (
    <SectionWrapper>
        <Container >
            <FlexWrapper textAlign='center' flexDirection='column' alignItems='center' >
                <Typography type='h4' marginBottom='s24'>
                    Simple and tasty recipes
                </Typography>
                <Box maxWidth='44rem'>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
                    </Typography>
                </Box>
            </FlexWrapper>
            <Box >
                <RecipeList />
            </Box>
        </Container>
    </SectionWrapper>
);

