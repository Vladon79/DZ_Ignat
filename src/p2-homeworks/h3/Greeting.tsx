import React, { ChangeEvent, KeyboardEvent } from 'react'
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    { name, setNameCallback, addUser, error, totalUsers, ...props } // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.notError // need to fix with (?:)
    const Disabled = error ? true : false

    return (
        <div className={s.users}>
            {/* <input value={name}
                onChange={setNameCallback}
                className={inputClass}
                onKeyPress={props.onKeyPressHandler} /> */}
            <SuperInputText
                error={error}
                value={name}
                onChange={setNameCallback}
                className={inputClass}
                onKeyPress={props.onKeyPressHandler}
            />
            <SuperButton onClick={addUser} className={s.button} disabled={Disabled} >Add</SuperButton>

            {/* <div className={s.error}>{error}</div> */}
            <div className={s.numberUsers}>Number of users={totalUsers}</div>

        </div>
    )
}

export default Greeting
