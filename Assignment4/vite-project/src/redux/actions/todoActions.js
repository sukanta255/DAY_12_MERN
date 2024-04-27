export const addTodo = (text) => {
    return {
      type: 'ADD_TODO',
      payload: {
        id: Math.random().toString(36).substr(2, 9),
        text,
        completed: false
      }
    };
  };
  
  export const toggleTodo = (id) => {
    return {
      type: 'TOGGLE_TODO',
      payload: id
    };
  };
  
  export const deleteTodo = (id) => {
    return {
      type: 'DELETE_TODO',
      payload: id
    };
  };
  