import styled from "styled-components";

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 400px;
  border: 1px solid #ffffff;
  height: 600px;
  h2{
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
    
  }

  button {
    margin-top: 20px;
  }
`;
