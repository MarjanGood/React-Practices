import React from "react";
import './card-list.styles.css';
import { Card } from "../../card/card.component";

export const CardList = props => {

 console.log(props);
debugger
 return <div className="card-list">
            {
  props.monsters.map(x=>(
    <Card  key={x.id} monster={x} />
    // <h1  key={x.id}> {x.name} </h1>
  ))
}
     </div>; 
};


/* {<div className="card-list">
    {
    
     props.monsters.map(monster =>{
       console.log(monster.name);
      <h1 key={monster.id}>  {monster.name} </h1>
      //<Card  monster={monster}/>
    })
     }   
 </div> }*/