import React from 'react'
import { Card, DetalisBtn, ImageItem, TitleItem } from './style';

type ProductItemProps = {
    game: any;
};

const ProductItem = ({game}: ProductItemProps) => {

  const { CoverImageUrl, Title, id } = game;

  return (
    <Card>
        <ImageItem>
            <img src={CoverImageUrl} alt={Title}/>
        </ImageItem>
        <TitleItem>
            <h2>{game.Title}</h2>
        </TitleItem>
        <DetalisBtn>
            <button>Detalhes</button>
            <button>Editar</button>
        </DetalisBtn>
    </Card>
  )
}

export default ProductItem
