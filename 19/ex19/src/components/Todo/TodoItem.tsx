import classes from './TodoItem.module.css'
const TodoItem = (props: { text: string }) => {
  return <li className={classes.item}>{props.text}</li>;
};

export default TodoItem;