import React from 'react'
import { AffairType } from './HW2'
import s from './Affairs.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType// need to fix any
    deleteAffairCallback: (_id: number) => void// need to fix any
}

function Affair({ deleteAffairCallback, affair, ...props }: AffairPropsType) {
    const deleteCallback = (_id: number) => {
        deleteAffairCallback(_id)
    }// need to fix

    return (
        <div className={s.affair}>
            <span className={s.afairName}>{affair.name}</span>
            <span className={s.parametr}> {affair.priority}</span>
            <span className={s.deleteButton}>
                <SuperButton red onClick={() => deleteCallback(affair._id)} className={s.deleteButtonn}>X</SuperButton>
            </span>
        </div>
    )
}

export default Affair
