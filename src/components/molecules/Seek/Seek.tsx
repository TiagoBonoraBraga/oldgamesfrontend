import { CgSearch } from "react-icons/cg";
import { SeekDiv } from "./style";

interface Props {
  seek: string;
  setSeek: React.Dispatch<React.SetStateAction<string>>;
}

const Seek = ({ seek, setSeek }: Props) => {
  return (
    <SeekDiv>
      <input
        type="text"
        value={seek}
        placeholder="Buscar"
        onChange={(e) => setSeek(e.target.value)}
      />
       <CgSearch size={20} color="#4C4D5F" />
    </SeekDiv>
  );
};

export default Seek;
