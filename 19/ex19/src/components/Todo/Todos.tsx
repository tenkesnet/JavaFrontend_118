import TodoItem from './TodoItem';
import Todo from '../../models/Todo';
import classes from './Todos.module.css';

const Todos = (props: {items: Todo[]; onRemoveTodo: (id: string) => void }) => {
  
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onClickTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;