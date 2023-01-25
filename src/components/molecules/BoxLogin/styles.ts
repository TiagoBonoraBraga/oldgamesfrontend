import styled from "styled-components";

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 400px;
  /* border: 1px solid #ffffff; */
  height: 600px;
  h2 {
    margin: 20px;
  }
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;

  input {
    display: flex;
    width: 90%;
    margin: 5px;
    padding: 3px 5px;
    border-radius: 5px;
    border: none;
    height: 35px;
    font-size: 1rem;
  }

  div {
    display: flex;
    flex-direction: row;
    width: 90%;
    margin: 5px;

    border-radius: 5px;
    border: none;
    align-items: center;

    input {
      display: flex;
      width: 100%;
      padding: 3px 5px;
      margin: 0;
      border-radius: 5px 0 0 5px;
      border: none;
      height: 35px;
    }
    button {
      display: flex;
      align-items: center;
      border: none;
      margin: 0;
      padding: 5px;
      cursor: pointer;
      border-radius: 0 5px 5px 0;
      height: 35px;
      background-color: #ffffff;
    }
  }

  button {
    display: flex;
    align-items: center;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 10px;
    cursor: pointer;
    width: 50px;
  }
`;
