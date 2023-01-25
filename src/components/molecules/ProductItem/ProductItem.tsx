import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { api } from '../../../utils/api/api';
import { Card, DeleteBtn, DetalisBtn,  EditBtn,  ImageItem, TitleItem } from './style';
import { useNavigate } from "react-router-dom";

type ProductItemProps = {
    game: any;
    gameRemovido: any;
};

const ProductItem = ({game, gameRemovido}: ProductItemProps) => {

    const navigate = useNavigate();
    const { CoverImageUrl, Title, id } = game;
    
    async function handleDeleteGame() {
        await api.deleteGame(game.id);
        gameRemovido = true;
    }

  return (
    <Card>
        <ImageItem>
            <img src={CoverImageUrl} alt={Title}/>
        </ImageItem>
        <TitleItem>
            <h2>{game.Title}</h2>
        </TitleItem>
        <DetalisBtn>
            {/* <button>Detalhes</button> */}
            
            
           <Link to="/updategame">
           <EditBtn>Editar</EditBtn>
           </Link> 
            

           <DeleteBtn onClick={handleDeleteGame}>Deletar</DeleteBtn>
        </DetalisBtn>

    </Card>
  )
}

export default ProductItem
