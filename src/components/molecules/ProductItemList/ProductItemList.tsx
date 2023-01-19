import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem/ProductItem';
import { BoxList } from './style';

interface Props {
  seek: string;
}

interface Api {
  title: string;
  image: string;
  score: number;
  trailer: string;
  year: string;
  description: string;
}

const ProductItemList = (props: Props) => {
const [games, setGames] = useState<Api[]>([]);
const { seek } = props;

function Seek(title: string | any) {
  const regex = new RegExp(seek, "i");
  return regex.test(title);
}

useEffect(() => {
  const newList = games.filter((item) => Seek(item.title));
  setGames(newList);
}, [seek]);


  return (
    <BoxList>
      {games.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}      
    </BoxList>
  )
}

export default ProductItemList
