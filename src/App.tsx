import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import styles from './App.module.css'

import { Task } from './components/Task'
import { Header } from './components/Header'
import { ListEmpty } from './components/ListEmpty'

export function App() {
  const [amoutComplete, setAmountComplete] = useState(0)

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    function verifyComplet(){
      let amount = 0
      for(var i = 0; i < tasks.length; i ++){
        if(tasks[i].isComplete == true){
          amount += 1
        }
      }
      setAmountComplete(amount)
    }

    verifyComplet()
  }, [tasks])

  interface Id{
    id: Number
  }

  function handleChecked(id:Id){
    const newTasks = tasks.map(task => {
      if(task.id == id){
        task.isComplete = !task.isComplete
      }
      return {...task}
    })

    setTasks(newTasks)
  }

  function handleDelete(id){
    const newTasks = tasks.filter(task => {
      if(task.id != id){
        return {...task}
      }
    })

    setTasks(newTasks)
  }

  function handleCreate(content){
    let data = {
      id: uuidv4(),
      content: content,
      isComplete: false
    }

    setTasks([...tasks, data])
  }

  return (
    <div className={styles.container}>
      <Header createTask={handleCreate}/>

      <main className={styles.containerMain}>
        <div className={styles.rowInfo}>
          <h2 className={styles.tasksCreated}>
            Tarefas criadas
            <span className={styles.amountTasks}>{tasks.length}</span>    
          </h2>

          <h2 className={styles.tasksCompleted}>
            Concluídas
            <span className={styles.amountTasks}>{amoutComplete} de {tasks.length}</span>
          </h2>
        </div>

        <div className={styles.listTasks}>

          {tasks.map(item => {
            return(
            <Task
              key={item.id}
              id={item.id}
              content={item.content}
              isComplete={item.isComplete}
              setStateChecked={handleChecked}
              deleteTask={handleDelete}
            />
          )})}

          {tasks.length === 0 ?  <ListEmpty/> : ''}

        </div>
      </main>
    </div>
  )
}

