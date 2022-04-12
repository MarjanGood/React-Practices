import React from "react";

export const Card = (props) => (
 //   console.log(props);
   <div>
      <h1 key={props.monster.id}> {props.monster.name }</h1> 
   </div>
  )