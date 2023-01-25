import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  height: 500px;
  width: 250px;
  border-radius: 20px;
  background-color: #cbd3df;
  color: black;
`;

export const ImageItem = styled.div`
  margin-top: 1rem;
  img {
    width: 200px;
    min-height: 300px;
  }
`;

export const TitleItem = styled.div`
  font-size: 1.1rem;
  text-align: center;
`;

export const YearScoreItem = styled.div`
  display: flex;
  font-size: 1rem;
  font-weight: 500;
  gap: 23px;
  margin: 1rem 0;

  a {
    text-decoration: none;
  }
`;
export const DetalisBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 0.5rem;
  border: none;
  cursor: pointer;
  font-weight: 600;
  padding: 0.5rem 2.5rem;
  gap: 5px;
`;
export const EditBtn = styled.button`
  justify-content: center;
  border-radius: 5px;
  margin: 0.5rem;
  border: none;
  background-color: #85929e;
  cursor: pointer;
  font-weight: 600;
  padding: 0.5rem 2.5rem;
  width: 150px;
  gap: 2px;
  transition: all 0.7s;
  &:hover {
    background-color: aquamarine;
    color: #ffffff;
    padding: 0.7rem 1.5rem;
  }
`;

export const DeleteBtn = styled.button`
  justify-content: center;
  border-radius: 5px;
  margin: 0.5rem;
  border: none;
  background-color: #85929e;
  cursor: pointer;
  font-weight: 600;
  padding: 0.5rem 2.5rem;
  width: 150px;
  gap: 2px;
  transition: all 0.7s;
  &:hover {
    background-color: red;
    color: #ffffff;
    padding: 0.7rem 1.5rem;
  }
`;
