import React from 'react'
import { Container, SectionWrapper, Typography } from 'components'
import { CategoriesMenu } from '../elements';

export const Categories: React.FC = () => (
    <SectionWrapper>
        <Container>
            <Typography type='h4'>
                Categories
            </Typography>
            <CategoriesMenu />
        </Container>
    </SectionWrapper>
)

