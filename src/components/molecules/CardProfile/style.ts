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

  img{
    max-width: 200px;
    border-radius:5px;
    margin-top: 2rem;
  }

  h2{
    padding: 1rem;
  }
`;

export const ButtonProfile = styled.div`
    display: flex;
    gap: 1rem;
   

`;
