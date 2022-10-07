import styles from './Header.module.css'
import rocketImg from '../assets/rocket.svg'

import { PlusCircle } from 'phosphor-react'
import { useState } from 'react'

export function Header({createTask}){
    const [taskContent, setTaskContent] = useState()

    function handleContent(event){
        setTaskContent(event.target.value)
    }

    function createNewTask(){
        if(taskContent){
            createTask(taskContent)
        } else{
            alert('Informe uma tarefa')
        }
        setTaskContent('')
    }

    return(
        <header className={styles.container}>
            <div className={styles.containerTitle}>
                <img className={styles.imgRocket} src={rocketImg} alt="Desenho de um foguete"></img>
                <h1 className={styles.title}>to
                    <span className={styles.titleDo}>do</span>
                </h1>
            </div>

            <div className={styles.containerInput}>
                <input
                value={taskContent}
                onChange={handleContent}
                className={styles.input}
                placeholder='Adicione uma nova tarefa'
                >
                </input>

                <button onClick={createNewTask} className={styles.button}>
                    Criar
                    <PlusCircle size={16}/>
                </button>
            </div>
        </header>
    )
}