import "./ClientsCollection.scss";
import React from "react";

// cs
import {} from "./ClientsCollection.styles";

// constants
import { clientsCollectionConstants } from "./ClientsCollection.constants";

const ClientsCollection = () => {
  const { clients } = clientsCollectionConstants;
  return (
    <div className="clients">
      {clients.map((client) => {
        const { id, image } = client;
        return (
          <div className="clients__imgwrap" key={id}>
            <img className="clients__img" src={image} alt="happy client" />
          </div>
        );
      })}
    </div>
  );
};

export default ClientsCollection;
