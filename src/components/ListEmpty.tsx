import styles from './ListEmpty.module.css'
import clipBoardImg from '../assets/clipboard.svg'

export function ListEmpty(){
    return(
        <div className={styles.listEmpty}>
            <img src={clipBoardImg} alt='Clipboard'></img>
            <p className={styles.p1}>Você ainda não tem tarefas cadastradas</p>
            <p className={styles.p2}>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}