import Todo from '../models/Todo';
import TodoItem from './TodoItem';

import classes from './Todo.module.css'

type todoPropsTyle = { items: Todo[]}

const Todos = (props:todoPropsTyle) => {
  return (
    <>
      <ul className={classes.todos}>  
        {props.items.map((item) => (
          <TodoItem key={item.id} text={ item.text } />
        ))}
      </ul>
    </>
  );
};

export default Todos;