import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import store from './redux/store';


function App() {

  return (
    <Provider store={store}>
      <div>
        <h1>Todo List</h1>
        <AddTodoForm />
        <TodoList />
      </div>
    </Provider>
  )
}

export default App;
