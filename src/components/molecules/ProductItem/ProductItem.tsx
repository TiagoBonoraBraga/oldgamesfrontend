
import {  NavLink, useNavigate } from "react-router-dom";
import { api } from "../../../utils/api/api";
import { Card, DeleteBtn, DetalisBtn, EditBtn, ImageItem, TitleItem } from "./style";
// import { useNavigate } from "react-router-dom";
import { Game } from "../../../utils/types/data";

type ProductItemProps = {
  game: Game;
  handleControl: () => void;
};

const ProductItem = ({ game, handleControl }: ProductItemProps) => {   
  const navigate = useNavigate()

  async function handleDeleteGame() {
    await api.deleteGame(game.id);
    handleControl();
  }
 
  

  return (

      <Card>
        <ImageItem>
          <img src={game.CoverImageUrl} alt={game.Title} />
        </ImageItem>
        <TitleItem>
          <h2>{game.Title}</h2>
        </TitleItem>
       
        <DetalisBtn onClick={() => {navigate('/updategame/' + game.id)}}>Detalhes</DetalisBtn>
        <EditBtn onClick={() => {navigate('/updategame/' + game.id)}}>Editar</EditBtn>
        <DeleteBtn onClick={handleDeleteGame}>Deletar</DeleteBtn>
      </Card>
    
  );
};

export default ProductItem;
