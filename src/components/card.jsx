import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <h4>{props.name}</h4>
      <img src={props.sprite} alt={props.name} />
      <p>
        <div>HP: {props.base.HP}</div>
        <div>Ataque: {props.base.Attack}</div>
        <div>Defensa: {props.base.Defense}</div>
        <div>Velocidad: {props.base.Speed}</div>
      </p>
      <p>
        {props.types.map(element => {
          console.log(element);
          return <span className="types">{element}</span>;
        })}
      </p>
    </div>
  );
}
