import React from "react";
import "./card.component.css";
import { CardsList } from "../cards-list/cards-list.component.jsx";

export const Card = (props) => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${props.elem.id}?set=set2&size=180x180`}
      alt="image"
    />
    <h1>{props.elem.name}</h1>
    <p>{props.elem.email}</p>
  </div>
);
