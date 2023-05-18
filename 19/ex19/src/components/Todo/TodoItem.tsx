import classes from './TodoItem.module.css';

const TodoItem: React.FC<{ text: string; onClickTodo: () => void }> = (
  props
) => {
  return (
    <li className={classes.item} onClick={props.onClickTodo}>
      {props.text}
    </li>
  );
};

export default TodoItem;