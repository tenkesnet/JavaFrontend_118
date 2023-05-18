import Todo from '../../models/Todo';
import TodoItem from './TodoItem';

import classes from './Todo.module.css'

const Todos = (props : { items: Todo[]}) => {
  return (
    <>
      
      <ul className={classes.todos}>  
        {props.items.map((item) => (
          <TodoItem key={item.id} text={item.text}/>
        ))}
      </ul>
    </>
  );
};

export default Todos;