import styled from "styled-components";

export const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 80px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 50%;
    margin-top: 30px;

    input {
      display: flex;
      width: 90%;
      margin: 0.5rem;
      border-radius: 0.2rem;
      border: none;
      padding-left: 0.3rem;
    }
    button {
      margin: 20px;
      padding: 5px;
      border-radius: 5px;
      border: none;
      transition: all 0.7s;
      &:hover {
        background-color: aquamarine;
        color:#ffffff;
        padding: 0.7rem 1.5rem;
      }
    }
  }
`;
