import React, { ReactNode } from 'react';

type todoPropsTyle = { items: string[], children: ReactNode }

const Todos = (props:todoPropsTyle) => {
  return (
    <>
      <h2>{ props.children }</h2>  
      <ul>
        {props.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Todos;