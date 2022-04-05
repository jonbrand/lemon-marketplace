import styled from "styled-components";

export const CollectionCardContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const CollectionCard = styled.h1`
  color: white;
  background-color: #1c1c1e;
  border-radius: 20px;
  overflow: hidden;
  width: 300px;
  height: 500px;
  margin-left: 30px;
  margin-top: 30px;

  > img {
    width: 100%;
  }
`;

export const Details = styled.div`
  padding: 20px;
`;

export const Name = styled.div`
  font-size: 20px;
  font-weight: 900;
  color: white;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  object-fit: contain;

  > img {
    height: 23px;
    width: 23px;
  }
`;

export const Price = styled.div`
  margin-left: 5px;
  font-weight: 600;
`;