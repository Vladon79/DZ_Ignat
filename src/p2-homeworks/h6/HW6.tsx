import React, { useState } from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { restoreState, saveState } from './localStorage/localStorage'
import s from "./HW6.module.css"

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState('editable-span-value', ''))
    }

    return (
        <div className={s.HW6}>
            <hr />
            <h2>Homeworks 6</h2>

            {/*should work (должно работать)*/}
            <div className={s.text}>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{ children: value ? undefined : 'enter text1...' }}
                />
            </div>
            <SuperButton onClick={save} className={s.button}>save</SuperButton>
            <SuperButton onClick={restore} className={s.button}>restore</SuperButton>

            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr />
        </div>
    )
}

export default HW6
