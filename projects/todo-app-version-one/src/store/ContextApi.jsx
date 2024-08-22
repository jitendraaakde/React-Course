
import { useReducer } from "react";
import { createContext } from "react";

export const ContextApiForTodo = createContext()

const todoItemReducer = (currTodos, action) => {

    let newTodoItems = currTodos;
    if (action.type === "NEW_ITEM") {
        newTodoItems = [...currTodos, {
            text: action.payload.text,
            date: action.payload.date
        }];
        return newTodoItems;
    }
    else if (action.type === "DELETE_ITEM") {
        newTodoItems = currTodos.filter((item) => item.text !== action.payload.text)
        return newTodoItems
    }
    return newTodoItems
}
const TodoItemContextProvider = ({ children }) => {
    const [todos, dispatchTodoItem] = useReducer(todoItemReducer, [])
    function handleAddTodo(text, date) {
        const newItemAction = {
            type: "NEW_ITEM",
            payload: {
                text,
                date
            }
        }
        dispatchTodoItem(newItemAction)
    }
    function deletTodoItem(itemName) {
        const deleteTodoItem = {
            type: "DELETE_ITEM",
            payload: {
                text: itemName
            }
        }
        dispatchTodoItem(deleteTodoItem)
    }

    return <ContextApiForTodo.Provider value={{
        todos,
        handleAddTodo,
        deletTodoItem,
    }}>
        {children}
    </ContextApiForTodo.Provider>
}
export default TodoItemContextProvider