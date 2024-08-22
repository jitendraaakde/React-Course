import styles from './ItemDisplay.module.css'
function ItemDisplay({title}){
    
    return <li className={styles['gap']}>{title}</li>
}
export default ItemDisplay  