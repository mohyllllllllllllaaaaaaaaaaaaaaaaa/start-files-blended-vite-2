import Text from '../components/Text/Text';
import TodoForm from '../components/TodoForm/TodoForm';
import TodoList from '../components/TodoList/TodoList';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import EditForm from '../components/EditForm/EditForm';



const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodo = window.localStorage.getItem('todos')
    return savedTodo ? JSON.parse(savedTodo) : [
      { id: '1', text: 'Practice more' },
      { id: '2', text: 'Get all tasks done on time' },
    ]
  });
    const [isEditing, setIsEditing] = useState(false);
    const [currentTodo, setCurrentTodo] = useState({});

useEffect(() => {
  window.localStorage.setItem('todos', JSON.stringify(todos))
},[todos]);

  const removeTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const addNewTodo = ({text}) => {
    const newTodo = {id: nanoid(), text}
    if(todos.some(todo => todo.text.toLowerCase() === text.toLowerCase())){
      alert(`${text} is already in todos `);
      return;
    }
    setTodos(prevTodos => [...prevTodos, newTodo]); 
  };
   const updateTodo = (newText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === currentTodo.id ? { ...todo, text: newText } : todo
      )
    );
    setIsEditing(false);
    setCurrentTodo({});
   };
   const handleEditTodo = (todo) => {
    setIsEditing(true);
    setCurrentTodo(todo);
   };
   const cancelUpdate = () => {
     setIsEditing(false);
     setCurrentTodo({});
   };
   


   return (
    <div>
      {isEditing ? (
        <EditForm
          defaultValue={currentTodo.text}
          updateTodo={updateTodo}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <>
          {todos.length === 0 && <Text textAlign="center">There are no any todos ...</Text>}
          <TodoForm onSubmit={addNewTodo} />
          <TodoList todos={todos} removeTodo={removeTodo} handleEditTodo={handleEditTodo} />
        </>
      )}
    </div>
  );
};

export default Todos;
