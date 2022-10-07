import { Trash } from 'phosphor-react'
import { useState } from 'react'

import styles from './Task.module.css'

interface Props{
    id: Number,
    content: String,
    isComplete: Boolean,
    setStateChecked: Function,
    deleteTask: Function
}

export function Task(props: Props){

    function handleChange(){
        props.setStateChecked(props.id)
    }

    function handleDelete(){
        props.deleteTask(props.id)
    }

    console.log(props)
    return(
        <div className={styles.container}>
            <div className={styles.inputAndText}>
                <input
                type='checkbox'
                checked={props.isComplete}
                onChange={handleChange}
                />

                <span className={props.isComplete ? styles.textCompleted : ''}>{props.content}</span>
            </div>

            <button onClick={handleDelete}>
                <Trash size={20}/>
            </button>
        </div>
    )
}