import styled from "styled-components";

export const BoxProfiles = styled.div`
  display: flex; 
  margin-top: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

export const CardProfiles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  border-radius: 5px;
  padding: 1rem;
  margin-top: 2rem;

  img{
    max-width: 150px;
    border-radius:5px;
    margin-top: 2rem;
  }

  h2{
    padding: 1rem;
  }
`;

export const ButtonProfile = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;  

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
    background-color: #3e4144;
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