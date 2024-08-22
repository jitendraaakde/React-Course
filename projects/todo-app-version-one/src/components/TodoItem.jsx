import { useContext } from 'react'
import styles from './TodoItem.module.css'
import { ContextApiForTodo } from '../store/ContextApi'

function TodoItem({ title, date }) {
    const { deletTodoItem } = useContext(ContextApiForTodo)
    return <>
        <div className={styles['inputItem']}>
            <p> {title} </p>
            <p> {date} </p>
            <button type="button" class="btn btn-danger" onClick={() => deletTodoItem(title)}  >Delete</button>
        </div>
    </>
}
export default TodoItem