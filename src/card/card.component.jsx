import React from "react";
import '../card/card.styles.css'

export const Card = props => (
  <div className="card-container">
     <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2`} className="img"/>
     <h2 key={props.monster.id}> {props.monster.name }</h2>
     <p>{props.monster.email}</p>
  </div>
  ); 