import React from "react";
import { Card } from "../card/card.component.jsx";
import "./cards-list.component.css";

export const CardsList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((elem, index) => {
        return <Card key={index} elem={elem}></Card>;
      })}
    </div>
  );
};
