import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import { v1 } from 'uuid'
import Greeting from './Greeting'

type GreetingContainerPropsType = {
    users: any // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({ users, addUserCallback }) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(event.currentTarget.value)
        setError('')// need to fix
    }
    const addUser = () => {
        if (name.length === 0) {
            setError('Error: name not entered')
        }
        else if (name.match(' ')) {
            setError("Error: forbidden symbol ' '")
        }

        else {
            alert(`Hello ${name}!`)
            addUserCallback(name)
            setName('')
        }

        // need to fix
    }
    const onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>)=>{
        if (e.charCode=== 13) {
            addUser();
        }
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressHandler={onKeyPressHandler}
        />
    )
}

export default GreetingContainer
