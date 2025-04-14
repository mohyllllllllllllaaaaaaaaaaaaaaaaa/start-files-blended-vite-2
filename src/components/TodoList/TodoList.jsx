import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';


const TodoList = ({todos, removeTodo,  handleEditTodo}) => {
  return (
    <Grid>
  {todos.map(({id, text}, index) => (
    <GridItem key={id}>
      <TodoListItem  id={index + 1}
       text={text}
        removeTodo={removeTodo}
          realId={id}
           handleEditTodo={handleEditTodo}/>
    </GridItem>
  ))}
</Grid>
  )
};

export default TodoList;
