import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem/ProductItem';
import { useNavigate } from "react-router-dom";
import { BoxList } from './style';
// import http from "../../../Http/Http"

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
const navigate =  useNavigate()

function Seek(title: string | any) {
  const regex = new RegExp(seek, "i");
  return regex.test(title);
}

// useEffect(() => {
//   http
//     .get<Api[]>("game")
//     .then((response) => setGames(response.data))
//     .catch((erro) => {
//       console.log(erro)
//       if(erro == 'NotAuthenticated' ){
//         console.log('redirecionado')
      
//       navigate('/auth')}
//     });
// }, []);

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
