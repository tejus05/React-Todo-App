import { createContext, useContext } from "react";

const ToDoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "ToDo Message",
      completed: false
    }
  ],
  addToDo: (todo) => { },
  updateToDo: (id) => { },
  deleteToDo: (id) => { },
  toggleComplete: (id) => { }
});

export const ToDoProvider = ToDoContext.Provider;

export const useToDoContext = () => {
  return useContext(ToDoContext);
}