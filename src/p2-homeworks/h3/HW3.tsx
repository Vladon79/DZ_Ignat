import React, {useState} from 'react'
import { v1 } from 'uuid'
import GreetingContainer from './GreetingContainer'
import s from './Greeting.module.css'

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
       const user:UserType = {_id:v1(),name:name}
        setUsers([user,...users]) 
        // need to fix
    }
    console.log(users)
    

    return (
        <div className={s.someClass}>
            <hr/>
            <h2>Homeworks 3</h2>

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
