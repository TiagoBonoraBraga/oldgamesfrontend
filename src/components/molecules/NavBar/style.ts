import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #d3d3d3;
`;

export const LogoNavBar = styled.div`
  margin-left: 3rem;
  align-items: center;
  font-size: 1.8rem;
  font-weight: bold;
  color: #1e222b;

  a {
    text-decoration: none;
    color: #1e222b;
  }
`;

export const Menu = styled.div`
  ul {
    display: flex;
    list-style: none;
    align-items: center;

    li {
      margin: 1rem 1.5rem;
      background-color: #a7a7a7;
      border-radius: 10px;
      padding: 0.5rem 1rem;
     
      font-weight: 700;
      transition: all 0.5s;

      &:hover {
        background-color: #3e4144;
        padding: 0.7rem 1.5rem;
        color: white;
      }
      a {
        text-decoration: none;
        color: black;
        &:hover {
          color:white;
        }
      }
      
    }
  }
`;
