import { useState } from "react";
import style from "./TodoForm.module.css";


const TodoForm = ({onSubmit}) => {
const [text, setText] = useState('');
const handelChange = e => {
  setText(e.target.value);
};
const handelSubmit = e => {
  e.preventDefault();
  if(!text.trim()){
   return alert('Please enter search term! ')
  }

onSubmit({text});
setText('')
}
return (
<form className={style.form} onSubmit={handelSubmit}>
  <button className={style.button} type="submit" >
    Add
  </button>

  <input
    className={style.input}
    placeholder="What do you want to write?"
    name="text"
    onChange={handelChange}
    value={text}
    required
    autoFocus
    
  />
</form>
)
};

export default TodoForm;