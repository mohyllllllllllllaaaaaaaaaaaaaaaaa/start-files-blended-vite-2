 import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import style from './EditForm.module.css';
import { useRef } from 'react';

const EditForm = ({defaultValue, updateTodo, cancelUpdate}) => {
 

  const inputRef = useRef()

const handleEditTodo = (event) => {
  event.preventDefault();
  const text = inputRef.current.value.trim();
  if(text){
    updateTodo(text);
  }

}

  return (
    <form className={style.form} onSubmit={handleEditTodo}>
  <button className={style.submitButton} type="submit" >
    <RiSaveLine color="green" size="24px" />
  </button>

  <button className={style.editButton} type="button" onClick={cancelUpdate}>
    <MdOutlineCancel color="red" size="24px" />
  </button>

  <input
    className={style.input}
    placeholder="What do you want to write?"
    name="text"
    required
    defaultValue={defaultValue}
    autoFocus
    ref={inputRef}
  />
</form>
  )
};
export default EditForm;
