import styled from "styled-components";

export const BoxDetails = styled.div`
  border: 1px solid #ffffff;
  width: 90%;
  margin-top: 20px;
  margin-left: 70px;
  border-radius: 5px;

  h2 {
    margin-left: 70px;
    padding: 20px;
  }
`;

export const BoxContent = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2px;

  img {
    width: 20%;
    height: 20%;
    border-radius: 5px;
  }
`;

export const BoxVideos = styled.div`
  display: flex;
  margin: 10px;
  gap: 1rem;
`;

export const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  font-weight: 600;

  p {
    padding: 10px;
  }

  span {
    padding: 10px;
  }
`;
