import React, { useState } from "react";
import styled from "styled-components/macro";
import { BaseButton, Image } from "components";

interface ButtonProps {
    onClick?: () => void;
}

export const FavoriteButton: React.FC<ButtonProps> = () => {
    const [favorite, setFavorite] = useState(false);
    return (
        <StyledButton onClick={() => setFavorite(!favorite)}>
            {favorite ? (
                <Image
                    src='favorite'
                    alt='favorite'
                    width='1.6rem'
                    margin='0.85rem 0.75rem'
                />
            ) : (
                <Image
                    src='heart'
                    alt='heart'
                    width='1.6rem'
                    margin='0.85rem 0.7rem'
                />
            )}
        </StyledButton>
    );
};

const StyledButton = styled(BaseButton)`
  width: 3rem;
  height: 3rem;
  position: absolute;
  top: 0.55rem;
  right: 2rem;
  padding: 0 0rem;
  border-radius: 1.875rem;
  border: 0rem;
  background-color: white;
  border-color: white;
`;
