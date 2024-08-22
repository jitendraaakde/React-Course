import styles from './Button.module.css'
const Button = ({ val, onClickUser }) => {
    return <button className={styles['edButton']} onClick={onClickUser}>{val}</button>
}
export default Button