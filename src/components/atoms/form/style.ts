import styled from "styled-components";

export const FormContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        width: 50%;

        input{
            display: flex;
            width: 90%;
            margin: .5rem;
            border-radius: .2rem;
            border:none ;
            padding-left: .3rem;
        }
    }

`