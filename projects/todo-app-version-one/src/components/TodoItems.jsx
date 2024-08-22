import Heading from "./Heading";
import AddTodo from "./AddTodo";
import TodoItem from './TodoItem';
import styles from './TodoItems.module.css';
import ErrorMessage from "./ErrorMessage";
import TodoItemContextProvider, { ContextApiForTodo } from "../store/ContextApi";
import { useContext } from "react";

function TodoItems() {
    const { todos } = useContext(ContextApiForTodo);

    return (
        <TodoItemContextProvider>
            <center className={styles['container']}>
                <Heading />
                <AddTodo />
                {todos.length === 0 && <ErrorMessage />}
                {todos.map((todo, index) => (
                    <TodoItem key={index}
                        title={todo.text}
                        date={todo.date}
                    />
                ))}
            </center>
        </TodoItemContextProvider>
    );
}

export default TodoItems;
