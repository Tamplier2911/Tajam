// import "./ClientsCollection.scss";
import React from "react";

// cs
import {
  ClientsCollectionContainer,
  ClientsCollectionImgWrap,
  ClientsCollectionImg,
} from "./ClientsCollection.styles";

// constants
import { clientsCollectionConstants } from "./ClientsCollection.constants";

const ClientsCollection = () => {
  const { clients } = clientsCollectionConstants;
  return (
    <ClientsCollectionContainer>
      {clients.map((client) => {
        const { id, image } = client;
        return (
          <ClientsCollectionImgWrap key={id}>
            <ClientsCollectionImg src={image} alt="happy client" />
          </ClientsCollectionImgWrap>
        );
      })}
    </ClientsCollectionContainer>
  );
};

export default ClientsCollection;
