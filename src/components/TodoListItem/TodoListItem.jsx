import { RiDeleteBinLine, RiEdit2Line} from 'react-icons/ri';
import Text from "../Text/Text";
import style from './TodoListItem.module.css';



const TodoListItem = ({text, id, removeTodo,  realId, handleEditTodo}) => {

  return(
    <div className={style.box}>
  <Text textAlign="center" marginBottom="20">
    #{id}
  </Text>
  <Text>{text}</Text>
  <button className={style.deleteButton} type="button" onClick={() => removeTodo( realId)}>
    <RiDeleteBinLine size={24} />
  </button>
  <button className={style.editButton} type="button"
   onClick={() => handleEditTodo({ id: realId, text })}>
        <RiEdit2Line size={24} />
      </button>
</div>
  )
};

export default TodoListItem;
