import React from 'react'
import Affair from './Affair'
import { AffairPriorityType, AffairType, FilterType } from './HW2'
import s from './Affairs.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

type AffairsPropsType = { // need to fix any
    data: AffairPriorityType
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs({ data, setFilter, deleteAffairCallback, ...props }: AffairsPropsType) {
    const mappedAffairs = data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={deleteAffairCallback}
        />
    ))

    const setAll = () => setFilter('all'); // need to fix
    const setHigh = () => setFilter('high');
    const setMiddle = () => setFilter('middle');
    const setLow = () => setFilter('low');

    return (
        <div className={s.filterButton}>

            {mappedAffairs}
            <SuperButton onClick={setAll} className={s.button} disabled={props.filter === 'all'}>All</SuperButton>
            <SuperButton onClick={setHigh} className={s.button} disabled={props.filter === 'high'}>High</SuperButton>
            <SuperButton onClick={setMiddle} className={s.button} disabled={props.filter === 'middle'}>Middle</SuperButton>
            <SuperButton onClick={setLow} className={s.button} disabled={props.filter === 'low'}>Low</SuperButton>
            {/* <button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button> */}
        </div>
    )
}

export default Affairs
