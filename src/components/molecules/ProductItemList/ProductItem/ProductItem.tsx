import React from 'react'
import { Card, DetalisBtn, ImageItem, TitleItem, YearScoreItem } from './style';

type ProductItemProps = {
    product: any;
};

const ProductItem = ({product}: ProductItemProps) => {

  const { image, title, year, score, id } = product;

  return (
    <Card>
        <ImageItem>
            <img src={image} alt={title}/>
        </ImageItem>
        <TitleItem>
            <h2>{title}</h2>
        </TitleItem>
        <YearScoreItem>
            <p>Lançamento: {year}</p>
            <p>Nota: {score}</p>
        </YearScoreItem>       
        <DetalisBtn>
            <button>Detalhes</button>
            <button>Editar</button>
        </DetalisBtn>
    </Card>
  )
}

export default ProductItem
