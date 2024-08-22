import styles from './Compo.module.css'
function Compo({children}){
    return <div className={styles['colorDiv']} >{children}</div>
}
export default Compo