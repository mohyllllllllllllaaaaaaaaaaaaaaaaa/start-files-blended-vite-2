import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import style from './Form.module.css';

const Form = ({onSubmit}) => {
const [query, setQuery] = useState('');
const handelChange = e => {
  setQuery(e.target.value);
};
const handelSubmit = e => {
  e.preventDefault();
  if(!query.trim()){
   return alert('Please enter search term! ')
  }

onSubmit(query);
setQuery('')
}
return (
<form className={style.form} onSubmit={handelSubmit}>
  <button className={style.button} type="submit" >
  <FiSearch size="16px" />
  </button>

  <input
    className={style.input}
    placeholder="What do you want to write?"
    name="search"
    onChange={handelChange}
    value={query}
    required
    autoFocus
    
  />
</form>
)
};

export default Form;
