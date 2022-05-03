import React from "react";
import styled from "styled-components/macro";
import { Badge, FlexWrapper, Image, Typography } from 'components';
import { Box } from "components/wrappers/Box";
import { FavoriteButton } from "components/buttons/elements/FavoriteButton";
import { Recipe } from "constants/RecipesSection";
import { mobile } from "styles/breakpoints";

export const RecipeCard: React.FC<Recipe> = ({ title, time, category, img, }) => (
    <StyledCard>
        <Image
            src={img}
            alt={title}
            borderRadius='30px'
            maxWidth='100%'
        />
        <FavoriteButton />
        <FlexWrapper
            marginTop='s16'
            flexDirection='column'
            paddingLeft='s8'
        >
            <Typography type='h6' fontSize='fs24'>
                {title}
            </Typography>
            <FlexWrapper marginTop='s24'>
                <Badge src='timer' alt='timer' title={time} padding='s0' />
                <Badge src='fork' alt='fork' title={category} />
            </FlexWrapper>
        </FlexWrapper>
    </StyledCard>
);


const StyledCard = styled(Box)`
  max-width: 22.5rem;
  height: 25rem;
  position: relative;
  margin: auto;
  padding: 0 1rem;
  border-radius: 1.875rem;
  background: linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #e7f9fd 100%);
  @media ${mobile} {
        width: 18rem;
  }
`;
